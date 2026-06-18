<template>
  <div class="fade-in">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">新建谈判方案</h1>
      <p class="text-gray-600 mt-1">请输入客户基本资料，AI将自动生成分析报告</p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2">
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">客户基本信息</h2>
          
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">品牌 <span class="text-red-500">*</span></label>
              <input 
                v-model="form.companyName"
                type="text"
                placeholder="请输入客户品牌名称"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">所属行业 <span class="text-red-500">*</span></label>
              <select 
                v-model="form.industry"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="">请选择行业</option>
                <option v-for="industry in industries" :key="industry.id" :value="industry.name">
                  {{ industry.name }}
                </option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">当前业务进度 <span class="text-red-500">*</span></label>
              <select 
                v-model="form.businessStage"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="">请选择业务进度</option>
                <option v-for="stage in businessStages" :key="stage.id" :value="stage.id">
                  {{ stage.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <div class="space-y-6">
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 class="font-semibold text-gray-900 mb-4">操作</h3>
          <button 
            @click="generatePlan"
            :disabled="isGenerating || !isFormValid"
            class="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <i v-if="isGenerating" class="fas fa-spinner spin mr-2"></i>
            {{ isGenerating ? 'AI分析中...' : '生成方案' }}
          </button>
          <button 
            @click="$router.push('/')"
            class="w-full mt-3 py-3 px-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            取消
          </button>
        </div>
        
        <div class="bg-blue-50 rounded-xl p-4">
          <h3 class="font-semibold text-blue-900 mb-2">提示</h3>
          <ul class="text-sm text-blue-700 space-y-1">
            <li class="flex items-start">
              <i class="fas fa-check-circle mt-0.5 mr-2 text-blue-500"></i>
              填写品牌名称后，系统将自动联网获取外部信息
            </li>
            <li class="flex items-start">
              <i class="fas fa-check-circle mt-0.5 mr-2 text-blue-500"></i>
              AI将分析品牌画像并生成谈判话术
            </li>
            <li class="flex items-start">
              <i class="fas fa-check-circle mt-0.5 mr-2 text-blue-500"></i>
              支持将分析结果保存至品牌行业知识库
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { industries, businessStages, generateMockAnalysis } from '../data/mockData'

const router = useRouter()

const form = ref({
  companyName: '',
  industry: '',
  businessStage: ''
})

const isGenerating = ref(false)

const isFormValid = computed(() => {
  return form.value.companyName && form.value.industry && form.value.businessStage
})

const generatePlan = async () => {
  if (!isFormValid.value) return
  
  isGenerating.value = true
  
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  const analysis = generateMockAnalysis({
    companyName: form.value.companyName,
    industry: form.value.industry,
    companySize: ''
  })
  
  isGenerating.value = false
  
  sessionStorage.setItem('currentAnalysis', JSON.stringify(analysis))
  sessionStorage.setItem('currentForm', JSON.stringify(form.value))
  router.push('/editor')
}
</script>