<template>
  <div class="fade-in">
    <div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 mb-8 text-white">
      <div class="max-w-3xl">
        <h2 class="text-3xl font-bold mb-4">AI驱动的商务谈判助手</h2>
        <p class="text-blue-100 text-lg mb-6">
          输入客户基本资料，AI自动生成客户品牌画像、痛点分析、参考方案及谈判话术，
          帮助您快速准备客户拜访材料，提升谈判成功率。
        </p>
        <button 
          @click="$router.push('/create')"
          class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg"
        >
          <i class="fas fa-rocket mr-2"></i> 开始创建方案
        </button>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <i class="fas fa-user-circle text-blue-600 text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">客户画像分析</h3>
        <p class="text-gray-600 text-sm">AI自动分析客户品牌定位、市场份额、竞争优势等关键信息</p>
      </div>
      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
          <i class="fas fa-target text-green-600 text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">痛点精准识别</h3>
        <p class="text-gray-600 text-sm">智能识别客户潜在痛点，提供针对性解决方案建议</p>
      </div>
      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
          <i class="fas fa-comment-dots text-purple-600 text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">谈判话术指导</h3>
        <p class="text-gray-600 text-sm">提供完整的谈判流程话术，助力临场发挥</p>
      </div>
    </div>
    
    <div class="bg-white rounded-xl shadow-sm border border-gray-100">
      <div class="px-6 py-4 border-b border-gray-100">
        <h3 class="font-semibold text-gray-900">最近方案</h3>
      </div>
      <div class="divide-y divide-gray-100">
        <div 
          v-for="plan in recentPlans" 
          :key="plan.id"
          class="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
          @click="$router.push(`/plan/${plan.id}`)"
        >
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-medium text-gray-900">{{ plan.companyName }}</h4>
              <p class="text-sm text-gray-500">{{ plan.industry }} · {{ plan.createTime }}</p>
            </div>
            <span 
              class="px-3 py-1 text-xs rounded-full"
              :class="plan.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'"
            >
              {{ plan.status === 'completed' ? '已完成' : '草稿' }}
            </span>
          </div>
        </div>
        <div v-if="recentPlans.length === 0" class="px-6 py-8 text-center text-gray-500">
          <i class="fas fa-folder-open text-4xl mb-3 text-gray-300"></i>
          <p>暂无方案记录</p>
          <button 
            @click="$router.push('/create')"
            class="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            立即创建第一个方案
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { samplePlans } from '../data/mockData'

const recentPlans = ref(samplePlans)
</script>
