<template>
  <div class="fade-in h-screen flex flex-col bg-gray-50">
    <div class="bg-white border-b border-gray-200 px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <button @click="$router.back()" class="mr-4 text-gray-500 hover:text-gray-700">
            <i class="fas fa-arrow-left text-lg"></i>
          </button>
          <h1 class="text-xl font-bold text-gray-900">AI对话优化</h1>
        </div>
        <div class="flex items-center space-x-4">
          <span class="text-sm text-gray-500">{{ analysis?.brandProfile?.companyName }}</span>
          <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
            AI对话中
          </span>
        </div>
      </div>
    </div>
    
    <div class="flex flex-1 overflow-hidden">
      <div class="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div class="px-4 py-3 border-b border-gray-100">
          <h3 class="font-semibold text-gray-900">历史对话</h3>
        </div>
        <div class="flex-1 overflow-y-auto p-2">
          <div 
            v-for="(msg, index) in chatHistory" 
            :key="index"
            class="mb-3 p-3 rounded-lg cursor-pointer transition-colors"
            :class="msg.role === 'user' ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-700'"
            @click="scrollToMessage(index)"
          >
            <div class="flex items-center mb-1">
              <span 
                class="w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2"
                :class="msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-400 text-white'"
              >
                {{ msg.role === 'user' ? 'U' : 'AI' }}
              </span>
              <span class="text-xs text-gray-500">{{ formatTime(msg.timestamp) }}</span>
            </div>
            <p class="text-sm line-clamp-2">{{ msg.content }}</p>
          </div>
          <div v-if="chatHistory.length === 0" class="text-center py-8 text-gray-400">
            <i class="fas fa-comments text-4xl mb-2"></i>
            <p>暂无对话记录</p>
          </div>
        </div>
      </div>
      
      <div class="flex-1 flex flex-col">
        <div class="flex-1 overflow-y-auto p-6 space-y-6" ref="chatContainer">
          <div v-if="!isFirstMessage" class="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div class="flex items-start">
              <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-4 flex-shrink-0">AI</div>
              <div>
                <div class="flex items-center mb-2">
                  <span class="font-medium text-gray-900">AI智能助手</span>
                  <span class="text-xs text-gray-400 ml-2">刚刚</span>
                </div>
                <p class="text-gray-700">您好！我已为您分析了{{ analysis?.brandProfile?.companyName }}的信息。以下是分析摘要：</p>
                <div class="mt-3 space-y-2">
                  <div class="flex items-center">
                    <i class="fas fa-building text-blue-500 mr-2"></i>
                    <span class="text-sm text-gray-600">行业：{{ analysis?.brandProfile?.industry }}</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-tags text-green-500 mr-2"></i>
                    <span class="text-sm text-gray-600">定位：{{ analysis?.brandProfile?.brandPosition }}</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-users text-purple-500 mr-2"></i>
                    <span class="text-sm text-gray-600">会员规模：{{ analysis?.membershipStatus?.membershipScale }}</span>
                  </div>
                </div>
                <p class="mt-3 text-gray-700">请问您想了解哪方面的内容？我可以帮您优化痛点分析、调整谈判话术，或者解答您的疑问。</p>
              </div>
            </div>
          </div>
          
          <div 
            v-for="(msg, index) in chatHistory" 
            :key="index"
            :id="`msg-${index}`"
            class="flex items-start"
          >
            <div 
              class="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold mr-4 flex-shrink-0"
              :class="msg.role === 'user' ? 'bg-green-500' : 'bg-blue-500'"
            >
              {{ msg.role === 'user' ? 'U' : 'AI' }}
            </div>
            <div class="flex-1">
              <div class="flex items-center mb-2">
                <span class="font-medium text-gray-900">{{ msg.role === 'user' ? '我' : 'AI智能助手' }}</span>
                <span class="text-xs text-gray-400 ml-2">{{ formatTime(msg.timestamp) }}</span>
              </div>
              <div 
                class="rounded-lg p-4"
                :class="msg.role === 'user' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'"
              >
                <div v-if="msg.isThinking" class="flex items-center">
                  <i class="fas fa-spinner spin mr-2"></i>
                  <span>AI正在思考...</span>
                </div>
                <div v-else v-html="msg.content"></div>
              </div>
            </div>
          </div>
          
          <div v-if="isThinking" class="flex items-start">
            <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-4 flex-shrink-0">AI</div>
            <div class="bg-blue-50 rounded-lg p-4">
              <div class="flex items-center">
                <div class="flex space-x-1">
                  <div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                  <div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                  <div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
                </div>
                <span class="ml-2 text-blue-700">AI正在分析您的问题...</span>
              </div>
              <div v-if="thinkingSteps.length > 0" class="mt-3">
                <div class="text-xs text-blue-600 mb-2">思考过程：</div>
                <div class="space-y-1">
                  <div 
                    v-for="(step, index) in thinkingSteps" 
                    :key="index"
                    class="text-xs text-blue-700 flex items-center"
                  >
                    <span class="w-5 h-5 bg-blue-100 rounded flex items-center justify-center text-blue-600 mr-2">{{ index + 1 }}</span>
                    {{ step }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-white border-t border-gray-200 px-6 py-4">
          <div class="flex items-end space-x-3">
            <div class="flex-1">
              <textarea 
                v-model="inputMessage"
                rows="2"
                placeholder="请输入您的问题，我将为您提供专业的谈判建议..."
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                @keydown.enter.exact.prevent="sendMessage"
              ></textarea>
            </div>
            <div class="flex space-x-2">
              <button 
                @click="clearHistory"
                class="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <i class="fas fa-trash text-gray-500"></i>
              </button>
              <button 
                @click="sendMessage"
                :disabled="!inputMessage.trim() || isThinking"
                class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center"
              >
                <i class="fas fa-paper-plane mr-2"></i>
                发送
              </button>
            </div>
          </div>
          <div class="mt-2 flex items-center justify-between text-xs text-gray-500">
            <span>提示：按 Enter 键发送消息</span>
            <span>已提问 {{ questionCount }} / 5 次</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'

const analysis = ref(null)
const chatHistory = ref([])
const inputMessage = ref('')
const isThinking = ref(false)
const thinkingSteps = ref([])
const questionCount = ref(0)
const isFirstMessage = ref(false)
const chatContainer = ref(null)

const aiResponses = [
  {
    trigger: ['痛点', '问题', '难点'],
    response: (companyName) => `根据对${companyName}的分析，当前主要痛点包括：\n\n1. **获客成本上升** - 建议通过权益合作降低获客成本\n2. **用户留存不足** - 建议建立会员体系增强粘性\n3. **品牌曝光有限** - 建议开展联合营销活动\n\n您想深入了解哪一个痛点的解决方案？`
  },
  {
    trigger: ['话术', '谈判', '沟通'],
    response: (companyName) => `针对${companyName}的谈判话术建议：\n\n**开场介绍**：您好，我是XX公司的商务代表，很高兴能与您交流。\n\n**需求探询**：请问贵公司目前在会员运营方面有哪些规划？\n\n**方案推介**：基于我们的分析，我们可以通过会员权益合作来提升用户粘性。\n\n您需要我针对特定环节提供更详细的话术吗？`
  },
  {
    trigger: ['会员', '用户', '活跃'],
    response: (companyName) => `${companyName}的会员现状分析：\n\n• 当前会员规模：${analysis.value?.membershipStatus?.membershipScale}\n• 会员活跃率：${analysis.value?.membershipStatus?.memberActivityRate}\n• 会员权益：${analysis.value?.membershipStatus?.membershipBenefits?.join('、') || '暂无'}\n\n建议提升方向：优化会员权益体系，增加互动活动提升活跃度。`
  },
  {
    trigger: ['竞品', '合作', '对手'],
    response: (companyName) => `${companyName}的竞品合作情况：\n\n${analysis.value?.competitorPartners?.length > 0 ? analysis.value.competitorPartners.join('、') : '暂无公开合作信息'}\n\n建议关注竞品动态，寻找差异化合作机会。`
  },
  {
    trigger: ['营销', '活动', '推广'],
    response: (companyName) => `${companyName}近期营销活动：\n\n${analysis.value?.marketingActivities?.join('、') || '暂无公开活动'}\n\n建议结合会员体系开展联合营销，提升品牌曝光和用户参与度。`
  }
]

const defaultResponse = (companyName) => {
  const questions = [
    `您想了解${companyName}的痛点分析详情吗？`,
    `需要我针对当前业务阶段提供更具体的谈判话术吗？`,
    `您想深入了解会员体系优化方案吗？`,
    `需要我分析竞品合作策略吗？`,
    `您对营销活动策划有什么疑问吗？`
  ]
  
  if (questionCount.value >= 5) {
    return `已完成5次提问。如需进一步分析，请保存当前方案后重新生成。\n\n如需修改特定模块，您可以返回方案页面点击对应模块进行单独修改。`
  }
  
  return questions[questionCount.value % questions.length]
}

const formatTime = (timestamp) => {
  const date = new Date(timestamp)
  return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
}

const scrollToBottom = async () => {
  await nextTick()
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

const scrollToMessage = (index) => {
  const element = document.getElementById(`msg-${index}`)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    element.classList.add('bg-yellow-50')
    setTimeout(() => element.classList.remove('bg-yellow-50'), 2000)
  }
}

const simulateThinking = async () => {
  const steps = [
    '分析用户问题...',
    '检索相关数据...',
    '生成回答内容...',
    '整理输出格式...'
  ]
  
  thinkingSteps.value = []
  for (let i = 0; i < steps.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 400))
    thinkingSteps.value.push(steps[i])
  }
  
  await new Promise(resolve => setTimeout(resolve, 300))
}

const generateAIResponse = (message) => {
  const companyName = analysis.value?.brandProfile?.companyName || '该品牌'
  
  for (const item of aiResponses) {
    if (item.trigger.some(word => message.includes(word))) {
      return item.response(companyName)
    }
  }
  
  return defaultResponse(companyName)
}

const sendMessage = async () => {
  if (!inputMessage.value.trim() || isThinking.value) return
  
  const userMessage = inputMessage.value.trim()
  inputMessage.value = ''
  
  chatHistory.value.push({
    role: 'user',
    content: userMessage,
    timestamp: Date.now(),
    isThinking: false
  })
  
  await scrollToBottom()
  
  isThinking.value = true
  isFirstMessage.value = true
  
  await simulateThinking()
  
  const response = generateAIResponse(userMessage)
  
  if (!response.includes('已完成5次提问')) {
    questionCount.value++
  }
  
  chatHistory.value.push({
    role: 'assistant',
    content: response.replace(/\n/g, '<br>'),
    timestamp: Date.now(),
    isThinking: false
  })
  
  isThinking.value = false
  thinkingSteps.value = []
  
  await scrollToBottom()
}

const clearHistory = () => {
  if (confirm('确定要清空对话记录吗？')) {
    chatHistory.value = []
    questionCount.value = 0
    isFirstMessage.value = false
  }
}

onMounted(() => {
  const savedAnalysis = sessionStorage.getItem('currentAnalysis')
  if (savedAnalysis) {
    analysis.value = JSON.parse(savedAnalysis)
  }
  
  const editModule = sessionStorage.getItem('editModule')
  if (editModule) {
    inputMessage.value = `请帮我优化${editModule === 'painPoints' ? '痛点分析' : editModule}模块`
  }
})
</script>