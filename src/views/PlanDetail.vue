<template>
  <div class="fade-in">
    <div class="mb-6 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">{{ plan?.companyName }} - 谈判方案</h1>
        <p class="text-gray-600 mt-1">创建时间: {{ plan?.createTime }}</p>
      </div>
      <div class="flex space-x-3">
        <button 
          @click="editPlan"
          class="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          <i class="fas fa-edit mr-2"></i> 编辑
        </button>
        <button 
          @click="exportPlan"
          class="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <i class="fas fa-download mr-2"></i> 导出PDF
        </button>
      </div>
    </div>
    
    <div v-if="plan" class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-blue-100">
        <h2 class="text-lg font-semibold text-gray-900">方案概览</h2>
      </div>
      
      <div class="p-6">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
              <i class="fas fa-user-circle text-blue-500 mr-2"></i>
              企业基本信息
            </h3>
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-gray-600">品牌定位</span>
                  <span class="font-medium">{{ analysis.brandProfile.brandPosition }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">市场份额</span>
                  <span class="font-medium">{{ analysis.brandProfile.marketShare }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">发展阶段</span>
                  <span class="font-medium">{{ analysis.brandProfile.developmentStage }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">区域布局</span>
                  <span class="font-medium">{{ analysis.brandProfile.regionalLayout }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
              <i class="fas fa-building text-indigo-500 mr-2"></i>
              企业规模
            </h3>
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-gray-600">注册资本</span>
                  <span class="font-medium">{{ analysis.brandProfile.companyScale.registeredCapital }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">员工人数</span>
                  <span class="font-medium">{{ analysis.brandProfile.companyScale.employeeCount }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">年收入规模</span>
                  <span class="font-medium">{{ analysis.brandProfile.companyScale.annualRevenue }}</span>
                </div>
              </div>
              <div class="mt-3 pt-3 border-t border-gray-200">
                <span class="text-gray-600">主营业务</span>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span 
                    v-for="(business, index) in analysis.brandProfile.mainBusiness" 
                    :key="index"
                    class="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
                  >
                    {{ business }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
              <i class="fas fa-database text-green-500 mr-2"></i>
              数据来源
            </h3>
            <div class="bg-gray-50 rounded-lg p-4">
              <p class="text-sm text-gray-700 mb-3">{{ analysis.externalInfo.summary }}</p>
              <div class="space-y-2">
                <div 
                  v-for="(source, index) in analysis.externalInfo.dataSources" 
                  :key="index"
                  class="flex items-center justify-between text-sm"
                >
                  <div class="flex items-center">
                    <span class="text-gray-600">{{ source.name }}</span>
                    <span class="text-gray-400 text-xs ml-2">({{ source.type }})</span>
                  </div>
                  <span 
                    class="text-xs px-2 py-0.5 rounded-full"
                    :class="source.status === '已获取' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'"
                  >
                    {{ source.status }}
                  </span>
                </div>
              </div>
              <div class="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-500">
                更新时间: {{ analysis.externalInfo.updateTime }}
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-6">
          <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-users text-purple-500 mr-2"></i>
            会员现状
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-gray-600">会员体系</span>
                <span 
                  class="text-xs px-2 py-0.5 rounded-full"
                  :class="analysis.membershipStatus.hasMembershipSystem ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
                >
                  {{ analysis.membershipStatus.hasMembershipSystem ? '已建立' : '未建立' }}
                </span>
              </div>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="flex items-center justify-between">
                <span class="text-gray-600">会员规模</span>
                <span class="font-medium">{{ analysis.membershipStatus.membershipScale }}</span>
              </div>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="flex items-center justify-between">
                <span class="text-gray-600">活跃率</span>
                <span class="font-medium">{{ analysis.membershipStatus.memberActivityRate }}</span>
              </div>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <span class="text-gray-600">会员权益</span>
              <div class="flex flex-wrap gap-1 mt-2">
                <span 
                  v-for="(benefit, index) in analysis.membershipStatus.membershipBenefits" 
                  :key="index"
                  class="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded"
                >
                  {{ benefit }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-6">
          <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-handshake text-orange-500 mr-2"></i>
            竞品合作与营销活动
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-gray-50 rounded-lg p-4">
              <span class="text-gray-600">竞品合作</span>
              <div class="flex flex-wrap gap-2 mt-2">
                <span 
                  v-for="(partner, index) in analysis.competitorPartners" 
                  :key="index"
                  class="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full"
                >
                  {{ partner }}
                </span>
              </div>
              <p v-if="analysis.competitorPartners.length === 0" class="text-sm text-gray-500 mt-2">暂无公开合作信息</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <span class="text-gray-600">历史营销活动</span>
              <div class="flex flex-wrap gap-2 mt-2">
                <span 
                  v-for="(activity, index) in analysis.marketingActivities" 
                  :key="index"
                  class="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full"
                >
                  {{ activity }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-6">
          <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-alert-circle text-red-500 mr-2"></i>
            痛点分析
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div 
              v-for="painPoint in analysis.painPoints" 
              :key="painPoint.id"
              class="bg-gray-50 rounded-lg p-4"
            >
              <div class="flex items-center justify-between mb-2">
                <span class="font-medium text-gray-900">{{ painPoint.name }}</span>
                <span 
                  class="px-2 py-0.5 text-xs rounded-full"
                  :class="getPriorityClass(painPoint.level)"
                >
                  {{ painPoint.level }}优先级
                </span>
              </div>
              <p class="text-sm text-gray-600 mb-1">影响: {{ painPoint.impact }}</p>
              <p class="text-sm text-blue-600">{{ painPoint.suggestion }}</p>
            </div>
          </div>
        </div>
        
        <div class="mt-6">
          <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-gift text-purple-500 mr-2"></i>
            匹配产品/服务
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div 
              v-for="product in analysis.matchedProducts" 
              :key="product.id"
              class="bg-gray-50 rounded-lg p-4 text-center"
            >
              <span class="text-3xl">{{ product.icon }}</span>
              <h4 class="font-medium text-gray-900 mt-2">{{ product.name }}</h4>
              <p class="text-xs text-gray-500 mt-1">{{ product.category }}</p>
              <p class="text-sm text-gray-600 mt-2">{{ product.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="mt-6">
          <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-file-text text-pink-500 mr-2"></i>
            参考方案
          </h3>
          <div class="space-y-4">
            <div 
              v-for="caseItem in analysis.referenceCases" 
              :key="caseItem.id"
              class="bg-gray-50 rounded-lg p-4"
            >
              <div class="flex items-center justify-between mb-3">
                <span class="font-semibold text-gray-900">{{ caseItem.brandName }}</span>
                <span class="text-sm text-gray-500">{{ caseItem.industry }}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span class="text-sm text-gray-500">痛点:</span>
                  <div class="flex flex-wrap gap-1 mt-1">
                    <span 
                      v-for="(point, index) in caseItem.painPoints" 
                      :key="index"
                      class="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded"
                    >
                      {{ point }}
                    </span>
                  </div>
                </div>
                <div>
                  <span class="text-sm text-gray-500">方案:</span>
                  <div class="flex flex-wrap gap-1 mt-1">
                    <span 
                      v-for="(solution, index) in caseItem.solutions" 
                      :key="index"
                      class="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded"
                    >
                      {{ solution }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="mt-3 pt-3 border-t border-gray-200">
                <span class="text-sm text-gray-500">效果: </span>
                <span class="text-sm text-green-600 font-medium">{{ caseItem.results }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-6">
          <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-comments text-indigo-500 mr-2"></i>
            当前阶段话术（现场沟通）
          </h3>
          <div class="bg-gray-50 rounded-lg p-4">
            <h4 class="font-medium text-gray-900 mb-3">现场沟通阶段话术</h4>
            <ul class="space-y-2">
              <li 
                v-for="(script, index) in stageScripts['communication']?.content || []" 
                :key="index"
                class="text-sm text-gray-700 pl-4 border-l-2 border-indigo-300"
              >
                {{ script }}
              </li>
            </ul>
          </div>
        </div>
        
        <div class="mt-6">
          <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-question-circle text-blue-500 mr-2"></i>
            客户常问问题及标准应答
          </h3>
          <div class="space-y-3">
            <div 
              v-for="(faq, index) in customerFAQs" 
              :key="index"
              class="bg-gray-50 rounded-lg p-4"
            >
              <div class="flex items-start">
                <span class="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">?</span>
                <div>
                  <p class="font-medium text-gray-900">{{ faq.question }}</p>
                  <p class="text-sm text-gray-700 mt-1">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-6">
          <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-reply text-green-500 mr-2"></i>
            我方反问话术（收集关键信息）
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              v-for="(item, index) in reverseQuestions" 
              :key="index"
              class="bg-gray-50 rounded-lg p-4"
            >
              <h4 class="font-medium text-gray-900 mb-2">{{ item.category }}</h4>
              <ul class="space-y-1">
                <li 
                  v-for="(question, qIndex) in item.questions" 
                  :key="qIndex"
                  class="text-sm text-gray-700 flex items-start"
                >
                  <span class="text-green-500 mr-2">•</span>
                  {{ question }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="mt-6">
          <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-message-circle text-purple-500 mr-2"></i>
            通用谈判话术
          </h3>
          <div class="space-y-4">
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="font-medium text-gray-900 mb-2 flex items-center">
                <span class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs mr-2">1</span>
                开场介绍
              </h4>
              <ul class="space-y-2">
                <li 
                  v-for="(script, index) in scripts.opening" 
                  :key="index"
                  class="text-sm text-gray-700 pl-8"
                >
                  {{ script }}
                </li>
              </ul>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="font-medium text-gray-900 mb-2 flex items-center">
                <span class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-2">2</span>
                需求探询
              </h4>
              <ul class="space-y-2">
                <li 
                  v-for="(script, index) in scripts.probing" 
                  :key="index"
                  class="text-sm text-gray-700 pl-8"
                >
                  {{ script }}
                </li>
              </ul>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="font-medium text-gray-900 mb-2 flex items-center">
                <span class="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs mr-2">3</span>
                方案推介
              </h4>
              <ul class="space-y-2">
                <li 
                  v-for="(script, index) in scripts.presenting" 
                  :key="index"
                  class="text-sm text-gray-700 pl-8"
                >
                  {{ script }}
                </li>
              </ul>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="font-medium text-gray-900 mb-2 flex items-center">
                <span class="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs mr-2">4</span>
                异议处理
              </h4>
              <ul class="space-y-2">
                <li 
                  v-for="(script, index) in scripts.handlingObjections" 
                  :key="index"
                  class="text-sm text-gray-700 pl-8"
                >
                  {{ script }}
                </li>
              </ul>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="font-medium text-gray-900 mb-2 flex items-center">
                <span class="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs mr-2">5</span>
                结束促成
              </h4>
              <ul class="space-y-2">
                <li 
                  v-for="(script, index) in scripts.closing" 
                  :key="index"
                  class="text-sm text-gray-700 pl-8"
                >
                  {{ script }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { samplePlans, generateMockAnalysis, negotiationScripts, stageScripts, customerFAQs, reverseQuestions } from '../data/mockData'

const route = useRoute()

const plan = ref(null)
const analysis = ref(null)
const scripts = ref(negotiationScripts)

const loadPlan = () => {
  const planId = route.params.id
  plan.value = samplePlans.find(p => p.id === planId) || samplePlans[0]
  
  analysis.value = generateMockAnalysis({
    companyName: plan.value?.companyName || '测试公司',
    industry: plan.value?.industry || '零售',
    companySize: '大型企业'
  })
}

onMounted(() => {
  loadPlan()
})

watch(() => route.params.id, () => {
  loadPlan()
})

const getPriorityClass = (level) => {
  switch(level) {
    case '高': return 'bg-red-100 text-red-700'
    case '中': return 'bg-yellow-100 text-yellow-700'
    case '低': return 'bg-green-100 text-green-700'
    default: return 'bg-gray-100 text-gray-700'
  }
}

const editPlan = () => {
  alert('编辑功能开发中...')
}

const exportPlan = () => {
  alert('PDF导出功能开发中...')
}
</script>
