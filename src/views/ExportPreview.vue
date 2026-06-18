<template>
  <div class="min-h-screen bg-gray-200 py-8">
    <div class="max-w-4xl mx-auto">
      <!-- 顶部导航 -->
      <div class="flex items-center justify-between mb-6">
        <button 
          @click="$router.back()"
          class="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <i class="fas fa-arrow-left mr-2"></i> 返回
        </button>
        <div class="flex items-center space-x-3">
          <button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
            <i class="fas fa-print mr-2"></i> 打印
          </button>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <i class="fas fa-download mr-2"></i> 下载PDF
          </button>
        </div>
      </div>

      <!-- PDF预览区域 -->
      <div class="bg-white rounded-xl shadow-xl overflow-hidden">
        <!-- PDF工具栏 -->
        <div class="flex items-center justify-between px-6 py-3 bg-gray-50 border-b border-gray-100">
          <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-600">谈判方案_雅迪常州_20260615.pdf</span>
          </div>
          <div class="flex items-center space-x-2">
            <button class="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded transition-colors">
              <i class="fas fa-search-minus"></i>
            </button>
            <span class="text-sm text-gray-500">100%</span>
            <button class="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded transition-colors">
              <i class="fas fa-search-plus"></i>
            </button>
          </div>
        </div>

        <!-- 封面页 -->
        <div class="relative bg-blue-700 min-h-[600px]">
          <!-- 水印层 -->
          <div class="watermark-overlay"></div>
          
          <div class="relative z-10 h-full flex flex-col items-center justify-center p-12">
            <div class="text-center">
              <h2 class="text-white text-lg font-medium mb-12">AI智能知识库</h2>
              <h1 class="text-white text-4xl font-bold mb-4">雅迪（常州）</h1>
              <p class="text-blue-200 text-sm">知识库ID：12</p>
            </div>
            
            <div class="absolute bottom-0 left-0 right-0 bg-blue-800 px-8 py-4 flex items-center justify-between" style="margin-bottom: 20px;">
              <span class="text-blue-200 text-xs">数据来源：飞书文档、AI分析</span>
              <span class="text-blue-200 text-xs">版本号：V1.0.0</span>
              <span class="text-blue-200 text-xs">生成时间：2026-06-15 18:14:17</span>
            </div>
          </div>
        </div>

        <!-- 内容页 -->
        <div class="relative">
          <!-- 水印层 -->
          <div class="watermark-overlay-content"></div>
          
          <!-- 页面内容 -->
          <div class="bg-white min-h-[800px] p-12 relative z-10">
            <!-- 客户画像 -->
            <div class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-4">客户画像</h2>
              <div class="grid grid-cols-4 gap-3">
                <div class="bg-gray-50 rounded-lg p-3">
                  <div class="text-xs text-gray-500 mb-1">行业分类</div>
                  <div class="text-sm font-medium text-gray-800">专业领域</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                  <div class="text-xs text-gray-500 mb-1">成立年限</div>
                  <div class="text-sm font-medium text-gray-800">初创品牌(&lt;5年)</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                  <div class="text-xs text-gray-500 mb-1">区域分布</div>
                  <div class="text-sm font-medium text-gray-800">区域龙头</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                  <div class="text-xs text-gray-500 mb-1">发展阶段</div>
                  <div class="text-sm font-medium text-gray-800">快速成长期</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                  <div class="text-xs text-gray-500 mb-1">拓展计划</div>
                  <div class="text-sm font-medium text-gray-800">有拓展需求</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                  <div class="text-xs text-gray-500 mb-1">业务属性</div>
                  <div class="text-sm font-medium text-gray-800">专注主业</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                  <div class="text-xs text-gray-500 mb-1">品牌价值</div>
                  <div class="text-sm font-medium text-gray-800">品牌知名度高</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                  <div class="text-xs text-gray-500 mb-1">服务对象</div>
                  <div class="text-sm font-medium text-gray-800">企业客户</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                  <div class="text-xs text-gray-500 mb-1">生命周期类型</div>
                  <div class="text-sm font-medium text-gray-800">衰退期</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                  <div class="text-xs text-gray-500 mb-1">质量程度</div>
                  <div class="text-sm font-medium text-gray-800">高</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                  <div class="text-xs text-gray-500 mb-1">融资状态</div>
                  <div class="text-sm font-medium text-gray-800">前期融资中</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                  <div class="text-xs text-gray-500 mb-1">回款对方式</div>
                  <div class="text-sm font-medium text-gray-800">系统集成</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                  <div class="text-xs text-gray-500 mb-1">品牌市场竞争</div>
                  <div class="text-sm font-medium text-gray-800">市场份额领先</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                  <div class="text-xs text-gray-500 mb-1">社交资产质量</div>
                  <div class="text-sm font-medium text-gray-800">一般</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                  <div class="text-xs text-gray-500 mb-1">价格区间</div>
                  <div class="text-sm font-medium text-gray-800">性价比高</div>
                </div>
              </div>
              <button class="mt-4 float-right px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                保存至知识库
              </button>
            </div>

            <!-- 客户信息 -->
            <div class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-4">客户信息</h2>
              
              <div class="space-y-6">
                <!-- 企业基本信息 -->
                <div class="bg-gray-50 rounded-lg p-4">
                  <div class="flex items-start">
                    <i class="fas fa-building text-blue-500 mt-1 mr-3"></i>
                    <div>
                      <h3 class="font-medium text-gray-800 mb-2">企业基本信息</h3>
                      <p class="text-sm text-gray-600 leading-relaxed">
                        根据企业官网与企查查公开数据，作为全国知名的连锁日用品品牌，核心业务深度聚焦于中高档商超新住家服务、以及本地高端会议与宴会服务。在下沉市场与区域内拥有较高的品牌护城河与稳固的大众消费基础，品牌认知度深厚。
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 企业规模 -->
                <div class="bg-gray-50 rounded-lg p-4">
                  <div class="flex items-start">
                    <i class="fas fa-chart-bar text-blue-500 mt-1 mr-3"></i>
                    <div>
                      <h3 class="font-medium text-gray-800 mb-2">企业规模</h3>
                      <p class="text-sm text-gray-600 leading-relaxed">
                        从工商信息及公开财报数据来看，该品牌目前在全国范围内的门店数量已服务突破1500家，覆盖全国300多个城市。近年来，其年营收规模稳步维持在50亿以上，员工总数超过万人，展现出极强的资产规模与抗风险能力。
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 主营业务 -->
                <div class="bg-gray-50 rounded-lg p-4">
                  <div class="flex items-start">
                    <i class="fas fa-briefcase text-blue-500 mt-1 mr-3"></i>
                    <div>
                      <h3 class="font-medium text-gray-800 mb-2">主营业务</h3>
                      <p class="text-sm text-gray-600 leading-relaxed">
                        品牌管理与特许经营：90%以上酒店通过特许经营或管理合同运营，降低重资产风险，加速市场渗透。多元化收入来源：除客房收入外，餐饮贡献约40%营收（2024年数据），并通过会议活动、会员积分兑换等拓展非房收入。
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 会员现状 -->
                <div class="bg-gray-50 rounded-lg p-4">
                  <div class="flex items-start">
                    <i class="fas fa-users text-blue-500 mt-1 mr-3"></i>
                    <div>
                      <h3 class="font-medium text-gray-800 mb-2">会员现状</h3>
                      <p class="text-sm text-gray-600 leading-relaxed">
                        综合行业调研与公众号数据监控分析，目前该品牌累计注册会员总数已达1200万的庞大体量。然而，由于缺乏持续的高频权益激励机制，当前月活跃用户（MAU）占比仅约15%。用户结构呈现老龄化趋势，95后、00后等年轻客群的流失率居高不下，现有会员体系难以有效驱动年轻一代的复购与留存。
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 竞品合作 -->
                <div class="bg-gray-50 rounded-lg p-4">
                  <div class="flex items-start">
                    <i class="fas fa-handshake text-blue-500 mt-1 mr-3"></i>
                    <div>
                      <h3 class="font-medium text-gray-800 mb-2">竞品合作</h3>
                      <p class="text-sm text-gray-600 leading-relaxed">
                        通过交叉分析小红书、微博等社媒舆情，我们发现其主要竞品（如亚朵、全季）近期已全面发力跨界资源整合。他们不仅与网易严选、腾讯视频、腾讯视频等头部平台开展深度联名，更将其API权益无缝植入自身App内，成功抢占年轻用户心智，实现了从单一住宿到生活方式品牌的跨越。
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 营销活动 -->
                <div class="bg-gray-50 rounded-lg p-4">
                  <div class="flex items-start">
                    <i class="fas fa-bullhorn text-blue-500 mt-1 mr-3"></i>
                    <div>
                      <h3 class="font-medium text-gray-800 mb-2">营销活动</h3>
                      <p class="text-sm text-gray-600 leading-relaxed">
                        反观该品牌的历史营销动作，整体策略相对保守。例如2025年Q3主推的"注册送免费早餐"活动，因权益吸引力不足导致转化率较低，且缺乏社交裂变效应；2026年春节期间线下大转盘抽奖虽有一定参与度，但形式老旧且客单价偏高。整体而言，传统营销手段的边际效用正在递减，亟需补充轻量级、高频次的数字营销权益进行破局。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 痛点分析 -->
            <div class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-4">痛点分析</h2>
              
              <div class="space-y-4">
                <div class="border border-gray-200 rounded-lg p-4">
                  <div class="flex items-start justify-between mb-3">
                    <div>
                      <h3 class="font-medium text-gray-800">年轻化战略落地受阻</h3>
                      <p class="text-sm text-gray-500 mt-1">品牌老化导致在年轻客群中的心智缺失，缺乏有力的反击抓手，长期存在年轻市场份额被蚕食的风险。</p>
                    </div>
                    <span class="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">优先级：高</span>
                  </div>
                  <div class="pl-0">
                    <p class="text-sm text-blue-600"><span class="font-medium">建议解决方案：</span>引入头部互联网平台（如爱奇艺、网综等）的高频数字权益，重塑年轻化品牌形象，建立差异化会员价值。</p>
                  </div>
                </div>

                <div class="border border-gray-200 rounded-lg p-4">
                  <div class="flex items-start justify-between mb-3">
                    <div>
                      <h3 class="font-medium text-gray-800">营销预算紧缩，单客获客成本承压</h3>
                      <p class="text-sm text-gray-500 mt-1">在降本增效的大背景下，直接采购实物礼品面临巨大的资金压力，且物流、库存等隐形成本难以控制。</p>
                    </div>
                    <span class="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">优先级：高</span>
                  </div>
                  <div class="pl-0">
                    <p class="text-sm text-blue-600"><span class="font-medium">建议解决方案：</span>引入数字化权益（视频会员、音乐会员、外卖红包等）替代传统实物礼品，降低采购成本与库存压力。</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 我方反问话术 -->
            <div>
              <h2 class="text-xl font-bold text-gray-900 mb-4">我方反问（收集关键信息）</h2>
              
              <!-- 用户信息 -->
              <div class="bg-gray-50 rounded-lg p-4 mb-4">
                <h3 class="font-medium text-gray-800 mb-3">用户信息</h3>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <span class="text-gray-800 text-sm">• 存量用户数大概有多少？</span>
                    <span class="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">了解用户规模</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-800 text-sm">• 用户画像主要是哪些群体？</span>
                    <span class="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">了解用户特征</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-800 text-sm">• 用户画像主要是哪些群体？</span>
                    <span class="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">了解用户特征</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-800 text-sm">• 付费会员占比大概是多少？</span>
                    <span class="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">了解付费转化率</span>
                  </li>
                </ul>
              </div>

              <!-- 运营目标 -->
              <div class="bg-gray-50 rounded-lg p-4 mb-4">
                <h3 class="font-medium text-gray-800 mb-3">运营目标</h3>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <span class="text-gray-800 text-sm">• 当前会员运营中最大的痛点是什么？</span>
                    <span class="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">了解核心痛点</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-800 text-sm">• 今年的核心运营目标有哪些？</span>
                    <span class="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">了解业务目标</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-800 text-sm">• 您希望通过会员权益解决什么问题？</span>
                    <span class="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">了解权益需求</span>
                  </li>
                </ul>
              </div>

              <!-- 合作背景 -->
              <div class="bg-gray-50 rounded-lg p-4 mb-4">
                <h3 class="font-medium text-gray-800 mb-3">合作背景</h3>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <span class="text-gray-800 text-sm">• 过往有合作过哪些服务商？</span>
                    <span class="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">了解合作经验</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-800 text-sm">• 本次预算区间大概是多少？</span>
                    <span class="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">了解预算范围</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-800 text-sm">• 您对供应商有哪些核心要求？</span>
                    <span class="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">了解合作期望</span>
                  </li>
                </ul>
              </div>

              <!-- 决策信息 -->
              <div class="bg-gray-50 rounded-lg p-4">
                <h3 class="font-medium text-gray-800 mb-3">决策信息</h3>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <span class="text-gray-800 text-sm">• 本次合作的决策人是谁？</span>
                    <span class="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">了解决策链</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-800 text-sm">• 预期的合作周期是多久？</span>
                    <span class="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">了解预算范围</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-800 text-sm">• 您的采购流程是怎样的？</span>
                    <span class="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">了解流程节点</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 页码 -->
        <div class="flex items-center justify-center py-3 bg-gray-50 border-t border-gray-100">
          <span class="text-sm text-gray-500">第 2 页 / 共 2 页</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped>
.watermark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 5;
}

.watermark-overlay::before {
  content: '堂客科技 | 操作人：蔡海燕 | 2026/06/15 18:14';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.25);
  white-space: nowrap;
  font-family: sans-serif;
  font-weight: 500;
  letter-spacing: 3px;
  transform: rotate(-25deg);
  line-height: 50px;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 40px,
    currentColor 40px,
    currentColor 42px,
    transparent 42px,
    transparent 80px
  );
  background-size: 100% 80px;
}

.watermark-overlay::after {
  content: '堂客科技 | 操作人：蔡海燕 | 2026/06/15 18:14';
  position: absolute;
  top: -30%;
  left: -30%;
  width: 160%;
  height: 160%;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.25);
  white-space: nowrap;
  font-family: sans-serif;
  font-weight: 500;
  letter-spacing: 3px;
  transform: rotate(-25deg);
  line-height: 50px;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 20px,
    currentColor 20px,
    currentColor 22px,
    transparent 22px,
    transparent 60px
  );
  background-size: 100% 60px;
}

.watermark-overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 5;
}

.watermark-overlay-content::before {
  content: '堂客科技 | 操作人：蔡海燕 | 2026/06/15 18:14';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.12);
  white-space: nowrap;
  font-family: sans-serif;
  font-weight: 500;
  letter-spacing: 3px;
  transform: rotate(-25deg);
  line-height: 50px;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 40px,
    currentColor 40px,
    currentColor 42px,
    transparent 42px,
    transparent 80px
  );
  background-size: 100% 80px;
}

.watermark-overlay-content::after {
  content: '堂客科技 | 操作人：蔡海燕 | 2026/06/15 18:14';
  position: absolute;
  top: -30%;
  left: -30%;
  width: 160%;
  height: 160%;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.12);
  white-space: nowrap;
  font-family: sans-serif;
  font-weight: 500;
  letter-spacing: 3px;
  transform: rotate(-25deg);
  line-height: 50px;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 20px,
    currentColor 20px,
    currentColor 22px,
    transparent 22px,
    transparent 60px
  );
  background-size: 100% 60px;
}
</style>
