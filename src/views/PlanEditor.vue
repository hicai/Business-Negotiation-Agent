<template>
  <div class="fade-in h-screen flex flex-col bg-gray-100">
    <!-- 顶部导航 -->
    <div class="bg-white border-b border-gray-200 px-6 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <button @click="$router.push('/create')" class="mr-4 text-gray-500 hover:text-gray-700 transition-colors">
            <i class="fas fa-arrow-left text-lg"></i>
          </button>
          <div>
            <h1 class="text-lg font-bold text-gray-900">{{ analysis?.brandProfile?.companyName || '雅诗特' }} 访谈与谈判策略</h1>
            <div class="flex items-center mt-1 text-xs text-gray-500">
              <span>行业：{{ analysis?.brandProfile?.industry || '互联网/电商' }}</span>
              <span class="mx-2">|</span>
              <span>阶段：{{ getStageLabel(form?.businessStage) }}</span>
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <button 
            @click="downloadCompanyMaterials"
            class="flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            <i class="fas fa-file-pdf mr-2"></i> 下载资料包
          </button>
          <button 
            @click="showSaveVersionModal = true"
            class="flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
          >
            <i class="fas fa-save mr-2"></i> 保存版本
          </button>
          <button 
            @click="exportPlan"
            :disabled="isExporting"
            class="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <i v-if="isExporting" class="fas fa-spinner spin mr-2"></i>
            <i v-else class="fas fa-download mr-2"></i> {{ isExporting ? '导出中...' : '导出方案' }}
          </button>
        </div>
      </div>
    </div>

    <!-- 左右分栏主体内容 -->
    <div class="flex flex-1 overflow-hidden">
      <!-- 左侧：方案内容展示 -->
      <div class="flex-1 bg-white border-r border-gray-200 flex flex-col">
        <!-- 方案内容区域 -->
        <div class="flex-1 overflow-y-auto">
          <!-- 品牌画像标签模块 -->
          <div 
            class="border-b border-gray-100 p-6 cursor-pointer transition-all"
            :class="getBlockClass('brand-tags')"
            @click="selectBlock('brand-tags', '品牌画像标签')"
          >
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <span class="text-sm font-semibold text-gray-500">客户画像</span>
                <span 
                  :class="getBlockStatusClass('brand-tags')"
                  class="ml-2 px-2 py-0.5 text-xs rounded-full"
                >
                  {{ getBlockStatusText('brand-tags') }}
                </span>
              </div>
              <button 
                @click.stop="syncBrandTags"
                class="flex items-center px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors"
              >
                <i class="fas fa-sync-alt mr-1"></i> 保存至知识库
              </button>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div 
                v-for="(tag, index) in (analysis?.brandTags || [])" 
                :key="index"
                class="bg-gray-50 rounded-lg p-3"
              >
                <div class="text-xs text-gray-500 mb-1">{{ tag.dimension }}</div>
                <div class="text-sm font-medium text-gray-900">{{ tag.tag }}</div>
                <div class="text-xs text-gray-400 mt-1 line-clamp-2">{{ tag.description }}</div>
              </div>
            </div>
          </div>

          <!-- 客户信息模块 -->
          <div 
            class="border-b border-gray-100 p-6 cursor-pointer transition-all"
            :class="getBlockClass('customer-info')"
            @click="selectBlock('customer-info', '客户信息')"
          >
            <div class="flex items-center mb-4">
              <span class="text-sm font-semibold text-gray-500">客户信息</span>
              <span 
                :class="getBlockStatusClass('customer-info')"
                class="ml-2 px-2 py-0.5 text-xs rounded-full"
              >
                {{ getBlockStatusText('customer-info') }}
              </span>
            </div>
            <div class="space-y-6">
              <div v-for="(section, key) in (analysis?.customerInfo || {})" :key="key">
                <div class="flex items-start">
                  <span class="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">*</span>
                  <div class="flex-1">
                    <h4 class="text-sm font-medium text-gray-900 mb-2">{{ section.name }}</h4>
                    <p class="text-sm text-gray-600 leading-relaxed">{{ section.content }}</p>
                    <!-- 数据来源标注 -->
                    <div v-if="section.sources && section.sources.length > 0" class="mt-2 flex items-center">
                      <span class="text-xs text-gray-400 mr-2">数据来源：</span>
                      <div class="flex flex-wrap gap-1">
                        <template v-for="(source, sIndex) in section.sources" :key="sIndex">
                          <!-- web类型来源 - 可点击跳转 -->
                          <a 
                            v-if="source.type === 'web' || (!source.type && source.url)"
                            :href="source.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center px-2 py-0.5 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 text-xs rounded transition-colors"
                          >
                            <i class="fas fa-external-link-alt mr-1 text-xs"></i>
                            {{ source.name }}
                          </a>
                          <!-- file类型来源 - 显示文件格式标签 -->
                          <div 
                            v-else
                            class="inline-flex items-center px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded"
                          >
                            <i class="fas fa-file mr-1 text-xs"></i>
                            {{ source.name }}
                            <span class="ml-1 px-1.5 py-0.5 bg-orange-200 text-orange-800 text-xs rounded">
                              {{ source.fileType }}
                            </span>
                          </div>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 痛点分析模块 -->
          <div 
            class="border-b border-gray-100 p-6 cursor-pointer transition-all"
            :class="getBlockClass('pain-points')"
            @click="selectBlock('pain-points', '痛点分析')"
          >
            <div class="flex items-center mb-4">
              <span class="text-sm font-semibold text-gray-500">痛点分析</span>
              <span 
                :class="getBlockStatusClass('pain-points')"
                class="ml-2 px-2 py-0.5 text-xs rounded-full"
              >
                {{ getBlockStatusText('pain-points') }}
              </span>
            </div>
            <div class="space-y-4">
              <div 
                v-for="(pain, index) in (analysis?.painPoints || [])" 
                :key="index"
                class="bg-gray-50 rounded-lg p-4"
              >
                <div class="flex items-start justify-between mb-2">
                  <h4 class="font-medium text-gray-900 text-sm">{{ pain.name }}</h4>
                  <span 
                    :class="{
                      'bg-red-100 text-red-600': pain.level === '高',
                      'bg-yellow-100 text-yellow-600': pain.level === '中',
                      'bg-green-100 text-green-600': pain.level === '低'
                    }"
                    class="px-2 py-0.5 text-xs rounded-full"
                  >
                    优先级：{{ pain.level }}
                  </span>
                </div>
                <p class="text-sm text-gray-600 mb-3">{{ pain.impact }}</p>
                <div class="flex items-start">
                  <span class="text-xs text-blue-600 font-medium mr-2">● 建议解决方案：</span>
                  <p class="text-sm text-gray-600">{{ pain.suggestion }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 谈判话术指导模块 -->
          <div 
            class="border-b border-gray-100 p-6 cursor-pointer transition-all"
            :class="getBlockClass('negotiation-scripts')"
            @click="selectBlock('negotiation-scripts', '谈判话术指导')"
          >
            <div class="flex items-center mb-4">
              <span class="text-sm font-semibold text-gray-500">谈判话术指导</span>
              <span 
                :class="getBlockStatusClass('negotiation-scripts')"
                class="ml-2 px-2 py-0.5 text-xs rounded-full"
              >
                {{ getBlockStatusText('negotiation-scripts') }}
              </span>
            </div>
            <div class="space-y-3">
              <div 
                v-for="(script, index) in (stageScripts[form?.businessStage]?.content || [])" 
                :key="index"
                class="bg-gray-50 rounded-lg p-3"
              >
                <p class="text-sm text-gray-700">{{ script }}</p>
              </div>
            </div>
          </div>

          <!-- 我方反问话术模块 -->
          <div 
            class="border-b border-gray-100 p-6 cursor-pointer transition-all"
            :class="getBlockClass('reverse-questions')"
            @click="selectBlock('reverse-questions', '我方反问话术')"
          >
            <div class="flex items-center mb-4">
              <span class="text-sm font-semibold text-gray-500">我方反问话术</span>
              <span 
                :class="getBlockStatusClass('reverse-questions')"
                class="ml-2 px-2 py-0.5 text-xs rounded-full"
              >
                {{ getBlockStatusText('reverse-questions') }}
              </span>
            </div>
            <div class="space-y-4">
              <div 
                v-for="(item, index) in (reverseQuestions || [])" 
                :key="index"
                class="bg-gray-50 rounded-lg p-4"
              >
                <h4 class="font-medium text-gray-900 text-sm mb-3">{{ item.category }}</h4>
                <ul class="space-y-3">
                  <li 
                    v-for="(q, qIndex) in item.questions" 
                    :key="qIndex"
                    class="flex items-start"
                  >
                    <span class="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                    <div class="flex-1">
                      <p class="text-sm text-gray-600">{{ q.question }}</p>
                      <span class="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {{ q.purpose }}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 客户常问问题及标准应答模块（固定内容） -->
          <div 
            class="p-6 cursor-pointer transition-all"
            :class="getBlockClass('faqs')"
            @click="selectBlock('faqs', '客户常问问题及标准应答')"
          >
            <div class="flex items-center mb-4">
              <span class="text-sm font-semibold text-gray-500">客户常问问题及标准应答</span>
              <span 
                :class="getBlockStatusClass('faqs')"
                class="ml-2 px-2 py-0.5 text-xs rounded-full"
              >
                {{ getBlockStatusText('faqs') }}
              </span>
            </div>
            <div class="space-y-4">
              <div 
                v-for="(faq, index) in customerFAQs" 
                :key="index"
                class="bg-gray-50 rounded-lg p-4"
              >
                <div class="flex items-start">
                  <span class="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">?</span>
                  <div class="flex-1">
                    <p class="font-medium text-gray-900 text-sm mb-1">{{ faq.question }}</p>
                    <p class="text-sm text-gray-600">{{ faq.answer }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 底部信息 -->
        <div class="border-t border-gray-100 px-6 py-3 bg-gray-50">
          <div class="flex items-center justify-between text-xs text-gray-500">
            <span>数据更新时间：刚刚</span>
            <span>方案版本：v1.0</span>
          </div>
        </div>
      </div>

      <!-- 右侧：AI对话框 -->
      <div class="w-96 bg-gray-50 flex flex-col">
        <!-- AI对话头部 -->
        <div class="bg-white border-b border-gray-200 px-4 py-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <span class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-2">AI</span>
              <span class="font-semibold text-gray-900 text-sm">方案策划助手</span>
            </div>
            <button 
              @click="clearChat"
              class="text-gray-400 hover:text-gray-600 text-xs"
            >
              清空对话
            </button>
          </div>
        </div>

        <!-- 对话历史 -->
        <div class="flex-1 overflow-y-auto p-4 space-y-4" ref="chatContainer">
          <!-- AI欢迎消息 -->
          <div v-if="chatHistory.length === 0" class="space-y-3">
            <div class="flex items-start">
              <span class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-2 flex-shrink-0">AI</span>
              <div class="bg-white rounded-lg p-3 shadow-sm">
                <p class="text-sm text-gray-700">
                  我已经为您生成了关于【{{ analysis?.brandProfile?.companyName || '雅诗特' }}】的初步方案大纲。根据外部公开信息和内部知识库，我已经梳理了{{ analysis?.painPoints?.length || 4 }}个核心痛点和相应的切入思路，请您进行详细修改。
                </p>
              </div>
            </div>
          </div>

          <!-- 对话消息列表 -->
          <div 
            v-for="(msg, index) in chatHistory" 
            :key="index"
            class="flex items-start"
          >
            <!-- 用户消息 -->
            <template v-if="msg.role === 'user'">
              <div class="flex-1 flex justify-end">
                <div class="max-w-[85%]">
                  <div class="flex items-center justify-end mb-1">
                    <span class="text-xs text-gray-400">{{ formatTime(msg.timestamp) }}</span>
                    <span class="text-xs text-gray-600 ml-2">我</span>
                    <span 
                      v-if="msg.reference"
                      class="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      引用：{{ msg.reference }}
                    </span>
                  </div>
                  <div 
                    class="bg-blue-600 text-white rounded-2xl rounded-br-md p-3 text-sm"
                  >
                    {{ msg.content }}
                  </div>
                </div>
              </div>
            </template>

            <!-- AI消息 -->
            <template v-else>
              <span class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-2 flex-shrink-0">AI</span>
              <div class="max-w-[85%]">
                <div class="flex items-center mb-1">
                  <span class="text-xs text-gray-600">方案策划助手</span>
                  <span class="text-xs text-gray-400 ml-2">{{ formatTime(msg.timestamp) }}</span>
                </div>
                <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-3">
                  <!-- 思考中 -->
                  <div v-if="msg.isThinking" class="flex items-center">
                    <div class="flex space-x-1">
                      <div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                      <div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                      <div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
                    </div>
                    <span class="ml-2 text-sm text-gray-600">正在分析...</span>
                  </div>
                  
                  <!-- 思考过程 -->
                  <div v-if="msg.thinkingSteps?.length > 0" class="mb-3 p-2 bg-blue-50 rounded-lg">
                    <div class="text-xs text-blue-600 mb-1 flex items-center">
                      <i class="fas fa-lightbulb mr-1"></i>
                      思考中...
                    </div>
                    <div class="text-xs text-blue-800">
                      {{ msg.thinkingSteps[msg.thinkingSteps.length - 1] }}
                    </div>
                  </div>
                  
                  <!-- 消息内容 -->
                  <div v-if="!msg.isThinking" class="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {{ msg.content }}
                  </div>

                  <!-- 更新确认 -->
                  <div v-if="msg.updatedBlocks?.length > 0 && !msg.isThinking" class="mt-3 p-3 bg-green-50 rounded-lg">
                    <div class="text-sm font-semibold text-green-900 mb-2 flex items-center">
                      <i class="fas fa-check-circle text-green-600 mr-1"></i>
                      以下模块已更新：
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <span 
                        v-for="block in msg.updatedBlocks" 
                        :key="block"
                        class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded"
                      >
                        {{ getBlockName(block) }}
                      </span>
                    </div>
                  </div>

                  <!-- 更新失败 -->
                  <div v-if="msg.updateError && !msg.isThinking" class="mt-3 p-3 bg-red-50 rounded-lg">
                    <div class="text-sm font-semibold text-red-900 flex items-center">
                      <i class="fas fa-exclamation-circle text-red-600 mr-1"></i>
                      更新失败：{{ msg.updateError }}
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- 引用提示 -->
        <div v-if="currentReference" class="bg-blue-50 border-t border-blue-100 px-4 py-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center text-sm text-blue-700">
              <i class="fas fa-link mr-2 text-blue-500"></i>
              已引用：{{ currentReference.name }}
            </div>
            <button 
              @click="clearReference"
              class="text-xs text-blue-600 hover:text-blue-800"
            >
              清除
            </button>
          </div>
        </div>

        <!-- 输入区域 -->
        <div class="bg-white border-t border-gray-200 px-4 py-3">
          <div class="flex items-center">
            <div class="flex-1 relative">
              <textarea 
                v-model="inputMessage"
                rows="2"
                :placeholder="currentReference ? `针对【${currentReference.name}】的修改需求...` : '输入对话，补充线索或指挥AI生成方案'"
                class="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                @keydown.enter.exact.prevent="sendMessage"
              ></textarea>
            </div>
            <button 
              @click="sendMessage"
              :disabled="!inputMessage.trim() || isThinking"
              class="ml-3 w-10 h-10 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <i class="fas fa-paper-plane text-sm"></i>
            </button>
          </div>
          <div class="flex items-center justify-between mt-2">
            <span class="text-xs text-gray-400">按 Enter 发送</span>
            <button class="text-xs text-gray-400 hover:text-gray-600 flex items-center">
              <i class="fas fa-paperclip mr-1"></i> 本地上传
            </button>
          </div>
        </div>

        <!-- 底部按钮 -->
        <div class="bg-gray-100 px-4 py-2">
          <button class="w-full py-2 bg-gray-100 text-gray-600 text-xs font-medium hover:bg-gray-200 transition-colors flex items-center justify-center">
            <i class="fas w-4 h-4 mr-2" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i>
            试用 Gemini Canvas
          </button>
        </div>
      </div>
    </div>

    <!-- 更新通知 -->
    <Transition name="slide">
      <div 
        v-if="showNotification"
        class="fixed top-20 right-6 px-6 py-4 rounded-lg shadow-lg z-50 flex items-center"
        :class="notificationType === 'success' ? 'bg-green-500' : 'bg-red-500'"
      >
        <i :class="notificationType === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'" class="text-2xl mr-3"></i>
        <div>
          <div class="font-semibold text-white">{{ notificationTitle }}</div>
          <div class="text-sm text-white opacity-90">{{ notificationMessage }}</div>
        </div>
      </div>
    </Transition>

    <!-- 保存版本弹窗 -->
    <Transition name="fade">
      <div 
        v-if="showSaveVersionModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        @click.self="showSaveVersionModal = false"
      >
        <div class="bg-white rounded-2xl shadow-xl w-full max-w-md">
          <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h3 class="font-semibold text-gray-900">保存版本</h3>
            <button 
              @click="showSaveVersionModal = false"
              class="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <i class="fas fa-times text-lg"></i>
            </button>
          </div>

          <div class="px-6 py-4">
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1">版本标题</label>
              <input 
                v-model="versionTitle"
                type="text"
                placeholder="例如：品牌画像优化"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1">版本描述</label>
              <textarea 
                v-model="versionDescription"
                rows="3"
                placeholder="描述本次修改的内容..."
                class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              ></textarea>
            </div>
            <div class="text-sm text-gray-500">
              当前方案：{{ analysis?.brandProfile?.companyName }}
            </div>
          </div>

          <div class="px-6 py-4 border-t border-gray-200 flex justify-end">
            <button 
              @click="showSaveVersionModal = false"
              class="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              取消
            </button>
            <button 
              @click="saveVersion"
              :disabled="!versionTitle.trim()"
              class="ml-2 px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <i class="fas fa-save mr-1"></i> 保存版本
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { stageScripts, customerFAQs, reverseQuestions, generateBrandTags, generateCustomerInfo, generatePainPoints } from '../data/mockData'

const router = useRouter()

// 分析数据
const analysis = ref({
  brandProfile: {
    companyName: '',
    industry: '',
    brandPosition: '',
    marketShare: ''
  },
  brandTags: [],
  painPoints: [],
  membershipStatus: {}
})

// 表单数据
const form = ref({
  businessStage: ''
})

// 当前引用的模块
const currentReference = ref(null)

// 模块状态管理
const blockStatuses = ref({
  'brand-tags': 'unreferenced',
  'customer-info': 'unreferenced',
  'pain-points': 'unreferenced',
  'negotiation-scripts': 'unreferenced',
  'faqs': 'unreferenced',
  'reverse-questions': 'unreferenced'
})

// 对话历史
const chatHistory = ref([])
const inputMessage = ref('')
const isThinking = ref(false)

// 通知状态
const showNotification = ref(false)
const notificationType = ref('success')
const notificationTitle = ref('')
const notificationMessage = ref('')

// 版本保存
const showSaveVersionModal = ref(false)
const versionTitle = ref('')
const versionDescription = ref('')

// 导出状态
const isExporting = ref(false)

// DOM引用
const chatContainer = ref(null)

// 工具函数
const formatTime = (timestamp) => {
  const date = new Date(timestamp)
  return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
}

const getStageLabel = (stage) => {
  const stages = {
    'contact': '客户建联阶段',
    'appointment': '预约拜访阶段',
    'communication': '现场沟通阶段'
  }
  return stages[stage] || '当前阶段'
}

const getBlockName = (blockId) => {
  const names = {
    'brand-tags': '品牌画像标签',
    'customer-info': '客户信息',
    'pain-points': '痛点分析',
    'negotiation-scripts': '谈判话术指导',
    'faqs': '客户常问问题及标准应答',
    'reverse-questions': '我方反问话术'
  }
  return names[blockId] || blockId
}

// 模块状态相关方法
const getBlockClass = (blockId) => {
  const status = blockStatuses.value[blockId]
  const isReferenced = currentReference.value?.id === blockId
  
  if (isReferenced && status === 'updating') {
    return 'bg-yellow-50 cursor-wait'
  }
  if (isReferenced && status === 'updated') {
    return 'bg-green-50'
  }
  if (isReferenced) {
    return 'bg-blue-50'
  }
  if (status === 'updated') {
    return 'hover:bg-gray-50 bg-green-50'
  }
  return 'hover:bg-gray-50'
}

const getBlockStatusClass = (blockId) => {
  const status = blockStatuses.value[blockId]
  switch(status) {
    case 'referenced':
    case 'updating':
      return currentReference.value?.id === blockId ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
    case 'updated':
      return 'bg-green-100 text-green-700'
    case 'error':
      return 'bg-red-100 text-red-700'
    default:
      return currentReference.value?.id === blockId ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
  }
}

const getBlockStatusText = (blockId) => {
  const status = blockStatuses.value[blockId]
  if (currentReference.value?.id === blockId && status === 'updating') {
    return '更新中...'
  }
  if (status === 'updated') {
    return '已更新'
  }
  if (status === 'error') {
    return '更新失败'
  }
  if (currentReference.value?.id === blockId) {
    return '已引用'
  }
  return '未引用'
}

// 显示通知
const showNotify = (type, title, message) => {
  notificationType.value = type
  notificationTitle.value = title
  notificationMessage.value = message
  showNotification.value = true
  setTimeout(() => {
    showNotification.value = false
  }, 4000)
}

// 同步品牌画像标签到知识库
const syncBrandTags = async () => {
  showNotify('success', '同步中', '正在将品牌画像标签保存至知识库...')
  
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // 模拟保存到知识库
  const brandName = analysis.value?.brandProfile?.companyName || '未知品牌'
  const tags = analysis.value?.brandTags || []
  
  const knowledgeBaseData = {
    brandName,
    tags,
    syncTime: new Date().toLocaleString(),
    syncStatus: 'success'
  }
  
  // 保存到localStorage模拟知识库
  const existingBrands = JSON.parse(localStorage.getItem('brandKnowledgeBase') || '[]')
  const existingIndex = existingBrands.findIndex(b => b.brandName === brandName)
  
  if (existingIndex >= 0) {
    existingBrands[existingIndex] = knowledgeBaseData
  } else {
    existingBrands.push(knowledgeBaseData)
  }
  
  localStorage.setItem('brandKnowledgeBase', JSON.stringify(existingBrands))
  
  showNotify('success', '同步成功', `已成功将【${brandName}】的品牌画像标签保存至知识库`)
}

// 保存版本
const saveVersion = () => {
  if (!versionTitle.value.trim()) return
  
  const newVersion = {
    id: `v${Date.now()}`,
    version: `v1.${Date.now().toString().slice(-3)}`,
    title: versionTitle.value,
    description: versionDescription.value || '未添加描述',
    snapshot: { ...analysis.value },
    createdAt: new Date().toLocaleString()
  }
  
  const existingPlan = JSON.parse(sessionStorage.getItem('currentPlan') || '{}')
  if (existingPlan.versions) {
    existingPlan.versions.push(newVersion)
  } else {
    existingPlan.versions = [newVersion]
  }
  sessionStorage.setItem('currentPlan', JSON.stringify(existingPlan))
  
  showSaveVersionModal.value = false
  versionTitle.value = ''
  versionDescription.value = ''
  
  showNotify('success', '版本保存成功', `已保存新版本：${newVersion.title}`)
}

// 导出方案
const exportPlan = () => {
  router.push('/export-preview')
}

// 下载公司资料包
const downloadCompanyMaterials = () => {
  showNotify('success', '开始下载', '正在准备公司介绍资料包...')
  
  const materials = {
    companyName: '堂客科技',
    materials: [
      { name: '公司介绍.pdf', size: '2.3MB', type: 'pdf' },
      { name: '产品手册.pdf', size: '5.1MB', type: 'pdf' },
      { name: '成功案例集.pdf', size: '3.8MB', type: 'pdf' },
      { name: '合作协议模板.docx', size: '800KB', type: 'docx' }
    ]
  }
  
  setTimeout(() => {
    const blob = new Blob([JSON.stringify(materials, null, 2)], { type: 'application/json' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `堂客科技资料包_${new Date().toISOString().split('T')[0]}.zip`
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
    
    showNotify('success', '下载成功', '公司介绍资料包已下载到本地')
  }, 1500)
}

// 选择模块（引用区块）
const selectBlock = (blockId, blockName) => {
  // 清除之前的引用状态
  if (currentReference.value) {
    blockStatuses.value[currentReference.value.id] = 'unreferenced'
  }
  
  currentReference.value = {
    id: blockId,
    name: blockName
  }
  blockStatuses.value[blockId] = 'referenced'
}

// 清除引用
const clearReference = () => {
  if (currentReference.value) {
    blockStatuses.value[currentReference.value.id] = 'unreferenced'
    currentReference.value = null
  }
}

// 滚动到底部
const scrollToBottom = async () => {
  await nextTick()
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

// 模拟思考过程
const simulateThinking = async (reference) => {
  const steps = []
  
  if (reference) {
    steps.push(`分析【${reference.name}】模块...`)
    await new Promise(resolve => setTimeout(resolve, 400))
    steps.push(`理解修改需求...`)
    await new Promise(resolve => setTimeout(resolve, 300))
    steps.push(`生成优化方案...`)
    await new Promise(resolve => setTimeout(resolve, 400))
    steps.push(`整理输出...`)
    await new Promise(resolve => setTimeout(resolve, 300))
  } else {
    steps.push(`接收请求...`)
    await new Promise(resolve => setTimeout(resolve, 300))
    steps.push(`分析方案...`)
    await new Promise(resolve => setTimeout(resolve, 400))
    steps.push(`生成建议...`)
    await new Promise(resolve => setTimeout(resolve, 300))
  }
  
  return steps
}

// 更新模块数据（事件回调）
const updateModuleData = async (blockId) => {
  // 设置更新中状态
  blockStatuses.value[blockId] = 'updating'
  
  await new Promise(resolve => setTimeout(resolve, 800))
  
  try {
    // 模拟数据更新
    const mockUpdates = {
      'brand-tags': {
        dimension: 'AI优化',
        tag: `优化标签_${Date.now()}`,
        description: '通过AI分析新增的优化标签'
      },
      'customer-info': {
        name: 'AI补充信息',
        content: '通过AI分析补充的客户背景信息，包括市场动态、行业趋势等。'
      },
      'pain-points': {
        id: `pain-${Date.now()}`,
        name: 'AI优化痛点',
        level: '高',
        impact: '影响整体业务发展',
        suggestion: 'AI建议：通过数据分析优化业务流程'
      },
      'negotiation-scripts': null,
      'faqs': null,
      'reverse-questions': null
    }

    const updateData = mockUpdates[blockId]
    
    if (updateData) {
      switch(blockId) {
        case 'brand-tags':
          analysis.value.brandTags = [
            ...analysis.value.brandTags,
            updateData
          ]
          break
        case 'customer-info':
          analysis.value.customerInfo = {
            ...analysis.value.customerInfo,
            aiSupplement: updateData
          }
          break
        case 'pain-points':
          analysis.value.painPoints = [
            ...analysis.value.painPoints,
            updateData
          ]
          break
      }
    }
    
    // 设置更新成功状态
    blockStatuses.value[blockId] = 'updated'
    showNotify('success', '模块更新成功', `${getBlockName(blockId)}已成功更新`)
    
    // 3秒后清除引用状态，恢复为普通已更新状态
    setTimeout(() => {
      if (currentReference.value?.id === blockId) {
        blockStatuses.value[blockId] = 'updated'
      }
    }, 3000)
    
    return { success: true }
    
  } catch (error) {
    // 设置更新失败状态
    blockStatuses.value[blockId] = 'error'
    showNotify('error', '模块更新失败', `${getBlockName(blockId)}更新失败，请重试`)
    
    // 3秒后恢复未引用状态
    setTimeout(() => {
      if (currentReference.value?.id !== blockId) {
        blockStatuses.value[blockId] = 'unreferenced'
      }
    }, 3000)
    
    return { success: false, error: error.message }
  }
}

// 生成AI响应
const generateAIResponse = (message, reference) => {
  const companyName = analysis.value?.brandProfile?.companyName || '该品牌'
  
  if (reference) {
    const responses = {
      'brand-tags': `好的，我将帮您优化【${companyName}】的品牌画像标签。\n\n根据市场分析，我建议调整以下标签维度：\n\n• 行业分类：精准定位主营业务领域\n• 规模体量：结合注册资本和员工数量综合评估\n• 发展阶段：明确当前所处生命周期\n• 合作意向：评估合作潜力和优先级\n\n已为您添加了新的优化标签。`,

      'customer-info': `好的，我将帮您优化【${companyName}】的客户信息。\n\n我已经分析了该品牌的关键信息：\n\n• **企业基本信息**：公司背景、成立时间、核心业务\n• **企业规模**：门店数量、员工规模、营收状况\n• **主营业务**：核心业务模式、收入构成\n• **会员现状**：会员规模、活跃度、用户结构\n• **竞品合作**：竞争对手分析、市场动态\n• **营销活动**：历史营销案例、效果评估\n\n需要我针对某个方面提供更详细的分析吗？`,

      'pain-points': `好的，我将帮您优化【${companyName}】的痛点分析。\n\n经过深入分析，我对痛点进行了重新梳理：\n\n1. **获客成本上升**\n   建议通过异业合作和权益互换降低获取新客户的成本，同时提升客户质量。\n\n2. **用户留存不足**\n   建议完善会员体系，增加互动频率，提升用户粘性和生命周期价值。\n\n3. **品牌曝光有限**\n   建议开展联合营销活动，扩大品牌影响力和市场认知度。\n\n已为您添加了新的痛点分析。`,

      'negotiation-scripts': `好的，我将帮您优化【${companyName}】的谈判话术。\n\n针对当前业务阶段，我建议从以下几个方面优化：\n\n• **开场介绍**：突出合作价值，强调双赢理念\n• **需求探询**：通过开放式问题了解客户真实需求\n• **方案推介**：结合客户实际情况定制化推荐\n• **异议处理**：预判常见异议并准备应对话术\n• **结束促成**：明确下一步行动和具体时间点\n\n您想针对哪个环节进行细化？`,

      'faqs': `好的，我将帮您优化客户常问问题及标准应答。\n\n我已经整理了针对【${companyName}】的常见问题库，涵盖产品功能、合作模式、服务支持等方面。\n\n您想补充哪些问题类型，或者需要我针对某个具体问题提供更详细的应答方案？`,

      'reverse-questions': `好的，我将帮您优化我方反问话术。\n\n针对【${companyName}】的特点，我建议从以下维度设计反问问题：\n\n• **业务模式**：了解客户的核心业务模式和盈利方式\n• **需求痛点**：挖掘客户当前面临的主要挑战\n• **决策流程**：了解客户的采购决策链\n• **预算规划**：探询客户的预算范围和审批流程\n\n需要我提供更具体的反问话术示例吗？`
    }

    return responses[reference.id] || `好的，我将帮您优化【${reference.name}】部分。\n\n请告诉我您的具体修改需求，我会针对性地进行优化。`
  }

  return `好的，我将帮您优化【${companyName}】的整体方案。\n\n请问您想重点优化哪个方面？\n• 品牌画像标签\n• 客户信息\n• 痛点分析\n• 谈判话术指导\n• 客户常问问题及标准应答\n• 我方反问话术\n\n请告诉我，或者直接描述您的需求，我会针对性地进行优化。`
}

// 发送消息
const sendMessage = async () => {
  if (!inputMessage.value.trim() || isThinking.value) return

  const userMsg = inputMessage.value.trim()
  inputMessage.value = ''

  // 添加用户消息
  chatHistory.value.push({
    role: 'user',
    content: userMsg,
    timestamp: Date.now(),
    reference: currentReference.value?.name || null
  })

  await scrollToBottom()

  // 添加AI思考中消息
  const aiMsgIndex = chatHistory.value.length
  chatHistory.value.push({
    role: 'assistant',
    content: '',
    timestamp: Date.now(),
    isThinking: true,
    thinkingSteps: [],
    updatedBlocks: [],
    updateError: null
  })

  isThinking.value = true

  // 模拟思考过程
  const thinkingSteps = await simulateThinking(currentReference.value)
  
  // 更新思考过程
  for (let i = 0; i < thinkingSteps.length; i++) {
    chatHistory.value[aiMsgIndex].thinkingSteps = thinkingSteps.slice(0, i + 1)
    await new Promise(resolve => setTimeout(resolve, 200))
  }

  // 生成响应
  const response = generateAIResponse(userMsg, currentReference.value)

  // 更新AI消息
  chatHistory.value[aiMsgIndex].content = response
  chatHistory.value[aiMsgIndex].isThinking = false

  // 如果有引用模块，触发数据更新回调
  if (currentReference.value) {
    const updateResult = await updateModuleData(currentReference.value.id)
    
    if (updateResult.success) {
      chatHistory.value[aiMsgIndex].updatedBlocks = [currentReference.value.id]
    } else {
      chatHistory.value[aiMsgIndex].updateError = updateResult.error
    }
  }

  isThinking.value = false
  await scrollToBottom()
}

// 清空对话
const clearChat = () => {
  if (confirm('确定要清空所有对话记录吗？')) {
    chatHistory.value = []
    clearReference()
    blockStatuses.value = {
      'brand-tags': 'unreferenced',
      'pain-points': 'unreferenced',
      'negotiation-scripts': 'unreferenced',
      'faqs': 'unreferenced',
      'reverse-questions': 'unreferenced'
    }
  }
}

// 初始化
onMounted(() => {
  const savedAnalysis = sessionStorage.getItem('currentAnalysis')
  const savedForm = sessionStorage.getItem('currentForm')
  
  if (savedAnalysis) {
    analysis.value = JSON.parse(savedAnalysis)
  }
  
  if (savedForm) {
    form.value = JSON.parse(savedForm)
  }
  
  const companyName = analysis.value?.brandProfile?.companyName || '雅诗特'
  const industry = analysis.value?.brandProfile?.industry || '零售'
  
  if (!analysis.value.brandTags || analysis.value.brandTags.length === 0) {
    analysis.value.brandTags = generateBrandTags({ industry, companyName })
  }
  
  if (!analysis.value.customerInfo || Object.keys(analysis.value.customerInfo).length === 0) {
    analysis.value.customerInfo = generateCustomerInfo(companyName)
  }
  
  if (!analysis.value.painPoints || analysis.value.painPoints.length === 0) {
    analysis.value.painPoints = generatePainPoints(companyName)
  }
  
  const savedPlan = sessionStorage.getItem('currentPlan')
  if (savedPlan) {
    const plan = JSON.parse(savedPlan)
    if (plan.chatHistory && plan.chatHistory.length > 0) {
      chatHistory.value = [...plan.chatHistory]
    }
    sessionStorage.removeItem('currentPlan')
  }
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(400px);
  opacity: 0;
}

.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
