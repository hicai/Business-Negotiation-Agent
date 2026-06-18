<template>
  <div class="fade-in">
    <div class="mb-6 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">历史方案</h1>
        <p class="text-gray-600 mt-1">查看和管理您创建的谈判方案及AI对话记录</p>
      </div>
      <button 
        @click="$router.push('/create')"
        class="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        <i class="fas fa-plus-circle mr-2"></i> 新建方案
      </button>
    </div>
    
    <div class="bg-white rounded-xl shadow-sm border border-gray-100">
      <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <select 
            v-model="filterStatus"
            class="px-3 py-2 border border-gray-300 rounded-lg text-sm"
          >
            <option value="">全部状态</option>
            <option value="completed">已完成</option>
            <option value="draft">草稿</option>
          </select>
          <input 
            v-model="searchKeyword"
            type="text"
            placeholder="搜索公司名称..."
            class="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div class="text-sm text-gray-500">
          共 {{ filteredPlans.length }} 个方案
        </div>
      </div>
      
      <div class="divide-y divide-gray-100">
        <div 
          v-for="plan in filteredPlans" 
          :key="plan.id"
          class="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
          @click="$router.push(`/plan/${plan.id}`)"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-semibold">
                {{ plan.companyName.charAt(0) }}
              </div>
              <div>
                <h4 class="font-medium text-gray-900">{{ plan.companyName }}</h4>
                <div class="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{{ plan.industry }}</span>
                  <span>{{ plan.createTime }}</span>
                  <span>最后修改: {{ plan.lastModified }}</span>
                  <span v-if="plan.chatHistory?.length > 0" class="flex items-center text-blue-500">
                    <i class="fas fa-comments mr-1"></i>
                    {{ plan.chatHistory.length }} 条对话
                  </span>
                  <span v-if="plan.versions?.length > 1" class="flex items-center text-purple-500">
                    <i class="fas fa-history mr-1"></i>
                    {{ plan.versions.length }} 个版本
                  </span>
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <span 
                class="px-3 py-1 text-xs rounded-full"
                :class="plan.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'"
              >
                {{ plan.status === 'completed' ? '已完成' : '草稿' }}
              </span>
              <button 
                v-if="plan.versions?.length > 1"
                @click.stop="openVersionHistory(plan)"
                class="px-3 py-1.5 bg-purple-50 text-purple-600 text-sm font-medium rounded-lg hover:bg-purple-100 transition-colors flex items-center"
              >
                <i class="fas fa-history mr-1"></i> 版本历史
              </button>
              <button 
                v-if="plan.chatHistory?.length > 0"
                @click.stop="openChatHistory(plan)"
                class="px-3 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-100 transition-colors flex items-center"
              >
                <i class="fas fa-comments mr-1"></i> 查看对话
              </button>
              <button 
                @click.stop="deletePlan(plan.id)"
                class="text-gray-400 hover:text-red-500 transition-colors"
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div v-if="filteredPlans.length === 0" class="px-6 py-12 text-center">
          <i class="fas fa-folder-open text-4xl mb-3 text-gray-300"></i>
          <p class="text-gray-500">暂无方案记录</p>
          <button 
            @click="$router.push('/create')"
            class="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            立即创建方案
          </button>
        </div>
      </div>
      
      <div v-if="filteredPlans.length > 0" class="px-6 py-4 border-t border-gray-100 flex items-center justify-center">
        <nav class="flex items-center space-x-1">
          <button 
            @click="currentPage > 1 && currentPage--"
            :disabled="currentPage === 1"
            class="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            上一页
          </button>
          <span class="px-3 py-1 text-sm">{{ currentPage }}</span>
          <button 
            @click="currentPage < totalPages && currentPage++"
            :disabled="currentPage === totalPages"
            class="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            下一页
          </button>
        </nav>
      </div>
    </div>

    <!-- 对话历史弹窗 -->
    <Transition name="fade">
      <div 
        v-if="showChatModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        @click.self="closeChatModal"
      >
        <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col">
          <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div class="flex items-center">
              <span class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-semibold mr-3">
                {{ selectedPlan?.companyName?.charAt(0) }}
              </span>
              <div>
                <h3 class="font-semibold text-gray-900">{{ selectedPlan?.companyName }} - AI对话记录</h3>
                <p class="text-sm text-gray-500">{{ selectedPlan?.chatHistory?.length || 0 }} 条对话记录</p>
              </div>
            </div>
            <button 
              @click="closeChatModal"
              class="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <i class="fas fa-times text-lg"></i>
            </button>
          </div>

          <div class="flex-1 overflow-y-auto p-6 space-y-4">
            <div v-if="!selectedPlan?.chatHistory?.length" class="text-center py-12">
              <i class="fas fa-comments text-4xl mb-3 text-gray-300"></i>
              <p class="text-gray-500">暂无对话记录</p>
            </div>
            
            <div 
              v-for="(msg, index) in selectedPlan?.chatHistory" 
              :key="index"
              class="flex items-start"
            >
              <template v-if="msg.role === 'user'">
                <div class="flex-1 flex justify-end">
                  <div class="max-w-[80%]">
                    <div class="flex items-center justify-end mb-1">
                      <span class="text-xs text-gray-400">{{ msg.timestamp }}</span>
                      <span class="text-xs text-gray-600 ml-2">我</span>
                    </div>
                    <div class="bg-blue-600 text-white rounded-2xl rounded-br-md p-3 text-sm">
                      {{ msg.content }}
                    </div>
                  </div>
                </div>
              </template>

              <template v-else>
                <span class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-2 flex-shrink-0">AI</span>
                <div class="max-w-[80%]">
                  <div class="flex items-center mb-1">
                    <span class="text-xs text-gray-600">AI智能助手</span>
                    <span class="text-xs text-gray-400 ml-2">{{ msg.timestamp }}</span>
                  </div>
                  <div class="bg-gray-50 rounded-xl p-3 text-sm text-gray-700">
                    {{ msg.content }}
                  </div>
                </div>
              </template>
            </div>
          </div>

          <div class="px-6 py-4 border-t border-gray-200 flex justify-end">
            <button 
              @click="closeChatModal"
              class="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              关闭
            </button>
            <button 
              @click="continueChat(selectedPlan)"
              class="ml-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <i class="fas fa-comments mr-2"></i> 继续对话
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 版本历史弹窗 -->
    <Transition name="fade">
      <div 
        v-if="showVersionModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        @click.self="closeVersionModal"
      >
        <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col">
          <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div class="flex items-center">
              <span class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold mr-3">
                {{ selectedPlan?.companyName?.charAt(0) }}
              </span>
              <div>
                <h3 class="font-semibold text-gray-900">{{ selectedPlan?.companyName }} - 版本历史</h3>
                <p class="text-sm text-gray-500">{{ selectedPlan?.versions?.length || 0 }} 个版本</p>
              </div>
            </div>
            <button 
              @click="closeVersionModal"
              class="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <i class="fas fa-times text-lg"></i>
            </button>
          </div>

          <div class="flex-1 overflow-y-auto p-6">
            <div v-if="!selectedPlan?.versions?.length" class="text-center py-12">
              <i class="fas fa-history text-4xl mb-3 text-gray-300"></i>
              <p class="text-gray-500">暂无版本记录</p>
            </div>
            
            <div class="space-y-3">
              <div 
                v-for="(version, index) in sortedVersions" 
                :key="version.id"
                class="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
                :class="{ 'border-blue-500 bg-blue-50': selectedVersion?.id === version.id }"
              >
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <div class="flex items-center space-x-3">
                      <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        {{ version.version }}
                      </span>
                      <h4 class="font-medium text-gray-900">{{ version.title }}</h4>
                      <span 
                        v-if="index === 0"
                        class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded"
                      >
                        当前版本
                      </span>
                    </div>
                    <p class="text-sm text-gray-600 mt-2">{{ version.description }}</p>
                    <p class="text-xs text-gray-400 mt-1">{{ version.createdAt }}</p>
                  </div>
                  <div class="flex items-center space-x-2">
                    <button 
                      v-if="index !== 0"
                      @click="previewVersion(version)"
                      class="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <i class="fas fa-eye mr-1"></i> 预览
                    </button>
                    <button 
                      v-if="index !== 0"
                      @click="restoreVersion(version)"
                      class="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <i class="fas fa-undo mr-1"></i> 恢复
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="px-6 py-4 border-t border-gray-200 flex justify-end">
            <button 
              @click="closeVersionModal"
              class="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              关闭
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 版本预览弹窗 -->
    <Transition name="fade">
      <div 
        v-if="showPreviewModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        @click.self="closePreviewModal"
      >
        <div class="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[85vh] flex flex-col">
          <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h3 class="font-semibold text-gray-900">版本预览</h3>
              <p class="text-sm text-gray-500">{{ previewVersionData?.version }} - {{ previewVersionData?.title }}</p>
            </div>
            <button 
              @click="closePreviewModal"
              class="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <i class="fas fa-times text-lg"></i>
            </button>
          </div>

          <div class="flex-1 overflow-y-auto p-6">
            <div class="bg-gray-50 rounded-xl p-4">
              <p class="text-sm text-gray-700">
                <span class="font-medium">版本描述：</span>{{ previewVersionData?.description }}
              </p>
              <p class="text-sm text-gray-500 mt-2">
                创建时间：{{ previewVersionData?.createdAt }}
              </p>
            </div>
            
            <div class="mt-4 p-4 border border-gray-200 rounded-xl">
              <h4 class="font-medium text-gray-900 mb-3">方案快照内容</h4>
              <div class="text-sm text-gray-600">
                <p>这是 {{ previewVersionData?.version }} 版本的方案预览。</p>
                <p class="mt-2">如果恢复到此版本，当前的修改将被覆盖。</p>
              </div>
            </div>
          </div>

          <div class="px-6 py-4 border-t border-gray-200 flex justify-end">
            <button 
              @click="closePreviewModal"
              class="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              关闭
            </button>
            <button 
              @click="confirmRestoreVersion"
              class="ml-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <i class="fas fa-undo mr-1"></i> 确认恢复此版本
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { samplePlans } from '../data/mockData'

const router = useRouter()

const plans = ref([...samplePlans])
const filterStatus = ref('')
const searchKeyword = ref('')
const currentPage = ref(1)
const pageSize = ref(10)

const showChatModal = ref(false)
const showVersionModal = ref(false)
const showPreviewModal = ref(false)
const selectedPlan = ref(null)
const selectedVersion = ref(null)
const previewVersionData = ref(null)

const filteredPlans = computed(() => {
  let result = plans.value
  
  if (filterStatus.value) {
    result = result.filter(p => p.status === filterStatus.value)
  }
  
  if (searchKeyword.value) {
    const keyword = searchKeyword.value.toLowerCase()
    result = result.filter(p => p.companyName.toLowerCase().includes(keyword))
  }
  
  return result
})

const totalPages = computed(() => {
  return Math.ceil(filteredPlans.value.length / pageSize.value)
})

const sortedVersions = computed(() => {
  if (!selectedPlan.value?.versions) return []
  return [...selectedPlan.value.versions].reverse()
})

const deletePlan = (id) => {
  if (confirm('确定要删除这个方案吗？')) {
    plans.value = plans.value.filter(p => p.id !== id)
  }
}

const openChatHistory = (plan) => {
  selectedPlan.value = plan
  showChatModal.value = true
}

const closeChatModal = () => {
  showChatModal.value = false
  selectedPlan.value = null
}

const continueChat = (plan) => {
  sessionStorage.setItem('currentAnalysis', JSON.stringify({
    brandProfile: { companyName: plan.companyName, industry: plan.industry }
  }))
  sessionStorage.setItem('currentPlan', JSON.stringify(plan))
  closeChatModal()
  router.push('/editor')
}

const openVersionHistory = (plan) => {
  selectedPlan.value = plan
  showVersionModal.value = true
}

const closeVersionModal = () => {
  showVersionModal.value = false
  selectedPlan.value = null
  selectedVersion.value = null
}

const previewVersion = (version) => {
  previewVersionData.value = version
  selectedVersion.value = version
  showPreviewModal.value = true
}

const closePreviewModal = () => {
  showPreviewModal.value = false
  previewVersionData.value = null
  selectedVersion.value = null
}

const restoreVersion = (version) => {
  previewVersionData.value = version
  selectedVersion.value = version
  showPreviewModal.value = true
}

const confirmRestoreVersion = () => {
  if (confirm(`确定要恢复到 ${previewVersionData.value.version} 版本吗？当前的修改将被覆盖。`)) {
    const planIndex = plans.value.findIndex(p => p.id === selectedPlan.value.id)
    if (planIndex !== -1) {
      plans.value[planIndex].lastModified = new Date().toLocaleString()
    }
    
    sessionStorage.setItem('currentAnalysis', JSON.stringify({
      brandProfile: { companyName: selectedPlan.value.companyName, industry: selectedPlan.value.industry }
    }))
    
    closePreviewModal()
    closeVersionModal()
    
    router.push('/editor')
    alert(`已成功恢复到 ${previewVersionData.value.version} 版本！`)
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
