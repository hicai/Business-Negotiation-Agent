export const industries = [
  { id: 'retail', name: '零售' },
  { id: 'food', name: '餐饮' },
  { id: 'hotel', name: '酒店' },
  { id: 'tech', name: '科技' },
  { id: 'finance', name: '金融' },
  { id: 'healthcare', name: '医疗健康' },
  { id: 'education', name: '教育' },
  { id: 'entertainment', name: '娱乐' }
]

export const companySizes = [
  { id: 'small', name: '小型企业 (<100人)' },
  { id: 'medium', name: '中型企业 (100-500人)' },
  { id: 'large', name: '大型企业 (500-1000人)' },
  { id: 'enterprise', name: '集团企业 (>1000人)' }
]

export const supplyChainProducts = [
  { id: 1, name: '会员权益', category: '文娱会员', icon: '🎬', description: '视频、音乐等各类会员权益' },
  { id: 2, name: '购物卡券', category: '本地生活', icon: '🛒', description: '各类购物卡、代金券' },
  { id: 3, name: '餐饮权益', category: '本地生活', icon: '🍔', description: '餐饮折扣、套餐权益' },
  { id: 4, name: '出行服务', category: '出行交通', icon: '🚗', description: '打车、租车等出行服务' },
  { id: 5, name: '生活服务', category: '本地生活', icon: '💆', description: '美容、健身等生活服务' },
  { id: 6, name: '酒店住宿', category: '生活卡券', icon: '🏨', description: '酒店预订优惠权益' },
  { id: 7, name: '旅游度假', category: '生活卡券', icon: '✈️', description: '旅游套餐、景点门票' },
  { id: 8, name: '数字内容', category: '文娱会员', icon: '📚', description: '电子书、在线课程' }
]

export const brandDatabase = [
  {
    id: 'blue-moon',
    name: '蓝月亮',
    industry: '零售',
    scale: 'large',
    founded: '1992年',
    region: '全国',
    developmentStage: '稳定发展',
    cooperationPlan: '有计划',
    demandLevel: '高需求',
    advantages: '品牌知名度高',
    serviceObject: '家庭用户',
    description: '蓝月亮创立于1992年，经营历史超30年，业务覆盖全国范围。作为日化领军品牌，产品以深层清洁和温和配方为核心特点。'
  },
  {
    id: 'pu-pu-supermarket',
    name: '朴朴超市',
    industry: '零售',
    scale: 'medium',
    founded: '2016年',
    region: '华东',
    developmentStage: '快速扩张',
    cooperationPlan: '有计划',
    demandLevel: '高需求',
    advantages: '即时配送能力强',
    serviceObject: '都市白领',
    description: '朴朴超市以前置仓模式为核心，提供生鲜及日用品线上购买服务，配送时效快，服务品质高。'
  },
  {
    id: 'green-mountain',
    name: '青山集团',
    industry: '科技',
    scale: 'enterprise',
    founded: '2008年',
    region: '全国',
    developmentStage: '稳定发展',
    cooperationPlan: '暂无计划',
    demandLevel: '中等需求',
    advantages: '技术研发实力强',
    serviceObject: '企业客户',
    description: '青山集团是一家综合性科技企业，专注于人工智能和大数据领域，服务于金融、医疗等多个行业。'
  }
]

export const referenceCases = [
  {
    id: 1,
    brandName: '蓝月亮',
    industry: '零售',
    painPoints: ['品牌曝光不足', '用户粘性低'],
    solutions: ['会员权益合作', '积分商城接入'],
    results: '品牌曝光提升40%，用户复购率提升25%',
    implementationSteps: [
      '1. 接入会员权益体系',
      '2. 搭建积分兑换商城',
      '3. 开展联合营销活动',
      '4. 数据跟踪与优化'
    ]
  },
  {
    id: 2,
    brandName: '朴朴超市',
    industry: '零售',
    painPoints: ['获客成本高', '用户留存难'],
    solutions: ['优惠券投放', '新客专享权益'],
    results: '新客转化率提升35%，7日留存提升20%',
    implementationSteps: [
      '1. 设计新客礼包',
      '2. 渠道投放优化',
      '3. 个性化推荐策略',
      '4. 定期活动运营'
    ]
  },
  {
    id: 3,
    brandName: '雅迪电动车',
    industry: '零售',
    painPoints: ['线下体验不足', '促销活动形式单一'],
    solutions: ['到店体验权益', '试驾礼包'],
    results: '到店转化率提升50%，试驾完成率提升30%',
    implementationSteps: [
      '1. 设计试驾权益包',
      '2. 门店培训与支持',
      '3. 线上线下联动',
      '4. 销售数据追踪'
    ]
  }
]

export const businessStages = [
  { id: 'contact', name: '建联' },
  { id: 'appointment', name: '预约' },
  { id: 'communication', name: '现场沟通' }
]

// 品牌画像标签库（动态标签库元数据Schema）
export const brandTagLibrary = {
  basic: {
    name: '基础属性',
    dimensions: [
      { code: 'jcsx-xyfl', name: '行业分类', options: ['专业领域', '异业', '快消品', '日用品', '家居用品', '餐饮连锁'] },
      { code: 'jcsx-clnx', name: '成立年限', options: ['初创品牌(<5年)', '新兴品牌(5-10年)', '老牌(>10年)'] },
      { code: 'jcsx-ppdw', name: '品牌定位', options: ['区域龙头', '大众市场', '中高端', '奢侈品'] },
      { code: 'jcsx-fzqj', name: '发展阶段', options: ['快速成长期', '稳定期', '转型升级期'] },
      { code: 'jcsx-kzjh', name: '拓展计划', options: ['稳健经营', '快速扩张', '战略收缩'] },
      { code: 'jcsx-zyzy', name: '主营业务', options: ['专注主业', '多元化', '跨界发展'] },
      { code: 'jcsx-qtws', name: '渠道优势', options: ['品牌知名度高', '渠道覆盖强', '线上运营能力'] },
      { code: 'jcsx-fwfx', name: '服务对象', options: ['企业客户', '个人消费者', '政企客户'] },
      { code: 'jcsx-smqx', name: '生命周期', options: ['稳定期', '衰退期', '增长期'] },
      { code: 'jcsx-zlqd', name: '质量程度', options: ['高', '中', '低'] },
      { code: 'jcsx-ztzt', name: '运作状态', options: ['正常运作', '暂停跟进', '转型中'] },
      { code: 'jcsx-cslx', name: '业务方式', options: ['系统集成', '平台服务', '解决方案'] },
      { code: 'jcsx-scfq', name: '市场竞争', options: ['市场份额领先', '竞争激烈', '差异化竞争'] },
      { code: 'jcsx-wxpl', name: '舆情声誉', options: ['一般', '良好', '优秀'] },
      { code: 'jcsx-kpjz', name: '客户口碑', options: ['性价比高', '口碑良好', '有待提升'] }
    ]
  },
  ecology: {
    name: '生态关系',
    dimensions: []
  },
  business: {
    name: '业务特征',
    dimensions: []
  }
}

// 生成客户信息
export const generateCustomerInfo = (companyName) => {
  const infoMappings = {
    '蓝月亮': {
      companyProfile: {
        name: '企业基本信息',
        content: '根据企业官网与企查查公开数据，蓝月亮作为全国知名的连锁日用品品牌，核心业务深度聚焦于中高档商超新住家服务、以及本地高端会议与宴会服务。在下沉市场与区域内拥有较高的品牌护城河与稳固的大众消费基础，品牌认知度深厚。',
        sources: [
          { name: '企查查', url: 'https://www.qcc.com', type: 'web' },
          { name: '蓝月亮官网', url: 'https://www.bluemoon.com.cn', type: 'web' },
          { name: '客户企业介绍.docx', url: '', type: 'file', fileType: 'DOCX' }
        ]
      },
      companyScale: {
        name: '企业规模',
        content: '从工商信息及公开财报数据来看，该品牌目前在全国范围内的门店数量已服务突破1500家，覆盖全国300多个城市。近年来，其年营收规模稳步维持在50亿以上，员工总数超过万人，展现出极强的资产规模与抗风险能力。',
        sources: [
          { name: '企查查', url: 'https://www.qcc.com', type: 'web' },
          { name: '客户财报数据.pdf', url: '', type: 'file', fileType: 'PDF' }
        ]
      },
      mainBusiness: {
        name: '主营业务',
        content: '品牌管理与特许经营：90%以上门店通过特许经营或联营合同运营，降低重资产风险，加速市场渗透。多元化收入来源：除客房收入外，餐饮贡献约40%营收（2024年数据），并通过会议活动、会员积分兑换等拓展非房收入。',
        sources: [
          { name: '蓝月亮官网', url: 'https://www.bluemoon.com.cn', type: 'web' },
          { name: '微信公众号', url: 'https://mp.weixin.qq.com', type: 'web' }
        ]
      },
      membershipStatus: {
        name: '会员现状',
        content: '结合行业指标与公众号数据监控分析，目前该品牌累计注册会员总数已达1200万的庞大体量。然而，由于缺乏持续的高频权益激励机制，当前月活跃用户（MAU）占比仅约15%。用户结构呈现老化趋势，95后、00后等年轻客群的流失率居高不下，现有传统会员体系难以有效驱动年轻一代的复购与留存。',
        sources: [
          { name: '微信公众号', url: 'https://mp.weixin.qq.com', type: 'web' },
          { name: '客户会员体系说明.xlsx', url: '', type: 'file', fileType: 'Excel' }
        ]
      },
      competitorCooperation: {
        name: '竞品合作',
        content: '通过交叉分析小红书、微博等社媒舆情，我们发现其主要竞品（如亚朵、全季）近期已全面发力跨界资源整合，他们不仅与网易严选、腾讯视频、腾讯视频等头部平台开展深度联名，更将其API权益无缝植入自身App内，成功抢占年轻用户心智，实现了从单一住宿到生活方式品牌的跨越。',
        sources: [
          { name: '小红书', url: 'https://www.xiaohongshu.com', type: 'web' },
          { name: '竞品分析报告.pdf', url: '', type: 'file', fileType: 'PDF' }
        ]
      },
      marketingActivities: {
        name: '营销活动',
        content: '反观该品牌的历史营销动作，整体策略相对保守。例如2025年Q3主推的"注册送免费早餐"活动，因权益吸引力不足导致转化率较低，且缺乏社交裂变效应；2026年春节期间线下大转盘抽奖虽有一定参与度，但形式老旧且客单率高。整体而言，传统营销手段的边际效用正在递减，亟需补充轻量化、高感知的数字营销权益进行破局。',
        sources: [
          { name: '微信公众号', url: 'https://mp.weixin.qq.com', type: 'web' },
          { name: '客户营销方案.docx', url: '', type: 'file', fileType: 'DOCX' }
        ]
      }
    },
    '雅诗特': {
      companyProfile: {
        name: '企业基本信息',
        content: '雅诗特是一家专注于酒店行业的新兴品牌，致力于为商务人士提供高品质的住宿体验。公司秉承"以人为本"的服务理念，注重客户体验和服务品质的持续提升。',
        sources: [
          { name: '企查查', url: 'https://www.qcc.com', type: 'web' },
          { name: '雅斯特官网', url: 'https://www.yeste.com', type: 'web' },
          { name: '客户企业介绍.docx', url: '', type: 'file', fileType: 'DOCX' }
        ]
      },
      companyScale: {
        name: '企业规模',
        content: '雅诗特目前在全国主要城市拥有超过50家门店，员工总数超过2000人。公司业务覆盖华北、华东、华南等核心区域，年营收规模稳步增长。',
        sources: [
          { name: '企查查', url: 'https://www.qcc.com', type: 'web' },
          { name: '东方财富', url: 'http://www.eastmoney.com', type: 'web' }
        ]
      },
      mainBusiness: {
        name: '主营业务',
        content: '雅诗特专注于中高端商务酒店运营，提供住宿、餐饮、会议等一站式服务。公司采用直营与加盟相结合的模式，快速拓展市场份额。',
        sources: [
          { name: '雅斯特官网', url: 'https://www.yeste.com', type: 'web' },
          { name: '微信公众号', url: 'https://mp.weixin.qq.com', type: 'web' }
        ]
      },
      membershipStatus: {
        name: '会员现状',
        content: '雅诗特拥有完善的会员体系，注册会员超过50万。会员权益包括积分兑换、免费升级、专属优惠等，旨在提升客户粘性和忠诚度。',
        sources: [
          { name: '微信公众号', url: 'https://mp.weixin.qq.com', type: 'web' },
          { name: '客户会员体系说明.xlsx', url: '', type: 'file', fileType: 'Excel' }
        ]
      },
      competitorCooperation: {
        name: '竞品合作',
        content: '雅诗特积极寻求与行业伙伴的合作机会，与多家OTA平台建立战略合作关系，拓展销售渠道，提升品牌曝光度。',
        sources: [
          { name: '小红书', url: 'https://www.xiaohongshu.com', type: 'web' },
          { name: '竞品分析报告.pdf', url: '', type: 'file', fileType: 'PDF' }
        ]
      },
      marketingActivities: {
        name: '营销活动',
        content: '雅诗特定期举办各类营销活动，包括会员日优惠、节假日促销、联名活动等，有效提升品牌知名度和客户参与度。',
        sources: [
          { name: '微信公众号', url: 'https://mp.weixin.qq.com', type: 'web' },
          { name: '客户营销方案.docx', url: '', type: 'file', fileType: 'DOCX' }
        ]
      }
    },
    '朴朴超市': {
      companyProfile: {
        name: '企业基本信息',
        content: '朴朴超市是一家专注于即时配送的新零售品牌，采用"前置仓+即时配送"模式，为消费者提供便捷的购物体验。',
        sources: [
          { name: '企查查', url: 'https://www.qcc.com', type: 'web' },
          { name: '朴朴官网', url: 'https://www.pupu.com', type: 'web' }
        ]
      },
      companyScale: {
        name: '企业规模',
        content: '朴朴超市已在多个城市建立了完善的配送网络，拥有超过100个前置仓，日均订单量超过10万单。',
        sources: [
          { name: '企查查', url: 'https://www.qcc.com', type: 'web' },
          { name: '东方财富', url: 'http://www.eastmoney.com', type: 'web' }
        ]
      },
      mainBusiness: {
        name: '主营业务',
        content: '朴朴超市提供生鲜、日用品、零食等品类的即时配送服务，配送时效最快可达30分钟。',
        sources: [
          { name: '朴朴官网', url: 'https://www.pupu.com', type: 'web' },
          { name: '微信公众号', url: 'https://mp.weixin.qq.com', type: 'web' }
        ]
      },
      membershipStatus: {
        name: '会员现状',
        content: '朴朴超市推出了会员订阅服务，会员可享受免配送费、专属折扣等权益，有效提升用户粘性。',
        sources: [
          { name: '微信公众号', url: 'https://mp.weixin.qq.com', type: 'web' },
          { name: '客户会员体系说明.xlsx', url: '', type: 'file', fileType: 'Excel' }
        ]
      },
      competitorCooperation: {
        name: '竞品合作',
        content: '朴朴超市与多家供应商建立深度合作关系，确保商品品质和供应稳定性。',
        sources: [
          { name: '小红书', url: 'https://www.xiaohongshu.com', type: 'web' },
          { name: '竞品分析报告.pdf', url: '', type: 'file', fileType: 'PDF' }
        ]
      },
      marketingActivities: {
        name: '营销活动',
        content: '朴朴超市通过新人专享优惠、限时折扣、会员日活动等多种营销手段吸引新用户，提升用户活跃度。',
        sources: [
          { name: '微信公众号', url: 'https://mp.weixin.qq.com', type: 'web' },
          { name: '客户营销方案.docx', url: '', type: 'file', fileType: 'DOCX' }
        ]
      }
    }
  }

  return infoMappings[companyName] || infoMappings['雅诗特']
}

// 生成痛点分析
export const generatePainPoints = (companyName) => {
  const painMappings = {
    '蓝月亮': [
      {
        id: 1,
        name: '年轻化战略落地受阻',
        level: '高',
        impact: '品牌老化导致在年轻客群中的心智缺失，缺乏有力的反击抓手，长期存在年轻市场份额被蚕食的风险。',
        suggestion: '引入头部互联网平台（如爱奇艺、网综等）的高频数字权益，重塑年轻化品牌形象，建立差异化会员价值。'
      },
      {
        id: 2,
        name: '营销预算紧缩，单客获取成本承压',
        level: '高',
        impact: '在降本增效的大背景下，直接采购实物礼品面临巨大的资金压力，且物流、库存等隐形成本难以控制。',
        suggestion: '引入数字化权益（视频会员、音乐会员、外卖红包等）替代传统实物礼品，降低采购成本与库存压力。'
      },
      {
        id: 3,
        name: '会员活跃度偏低',
        level: '中',
        impact: '现有会员体系缺乏持续的权益激励，导致用户活跃度低，会员价值未得到充分挖掘。',
        suggestion: '构建多元化的权益体系，提供个性化的会员服务，增加用户互动和粘性。'
      }
    ],
    '雅诗特': [
      {
        id: 1,
        name: '品牌知名度提升',
        level: '高',
        impact: '作为新兴品牌，在市场竞争中面临较大的品牌认知压力。',
        suggestion: '加强品牌营销推广，提升品牌曝光度和市场认知度。'
      },
      {
        id: 2,
        name: '会员体系优化',
        level: '中',
        impact: '现有会员体系需要进一步优化，提升会员活跃度和忠诚度。',
        suggestion: '引入多样化的会员权益，增加会员互动活动。'
      },
      {
        id: 3,
        name: '成本控制',
        level: '中',
        impact: '运营成本上升，需要有效控制成本支出。',
        suggestion: '优化运营流程，引入智能化管理系统，降低人力成本。'
      }
    ],
    '朴朴超市': [
      {
        id: 1,
        name: '配送效率提升',
        level: '高',
        impact: '配送时效是核心竞争力，需要持续优化配送效率。',
        suggestion: '优化前置仓布局，引入智能配送系统。'
      },
      {
        id: 2,
        name: '商品品类扩展',
        level: '中',
        impact: '需要不断丰富商品品类，满足消费者多样化需求。',
        suggestion: '根据用户需求分析，逐步扩展商品品类。'
      }
    ]
  }

  return painMappings[companyName] || painMappings['雅诗特']
}

export const stageScripts = {
  contact: {
    title: '客户建联阶段话术',
    content: [
      '【公司定位】我们专注于会员生态优化、权益供应链和会员增收领域，致力于为企业提供一站式会员运营解决方案。',
      '【合作模式】我们采用无前置成本、按效果结算的合作模式，最大程度降低您的合作风险。',
      '【核心价值】通过我们的服务，可以帮助您提升会员收入、促进用户活跃复购、实现用户资产沉淀。',
      '【开场示例】您好，我是XX公司的商务代表XXX。我们专注于会员生态优化服务，想与您探讨如何提升会员价值。',
      '【价值传递】我们已服务超过1亿会员，落地10万+门店，帮助众多企业实现会员收入显著增长。'
    ]
  },
  appointment: {
    title: '预约拜访阶段话术',
    content: [
      '【就近拜访】正好在您附近，想约30分钟当面沟通案例和方案，您看今天下午方便吗？',
      '【案例吸引】我们有同行业成功案例，想当面分享给您，相信对贵公司会有很大启发。',
      '【时间确认】考虑到您的时间宝贵，我们可以先电话简单沟通5分钟，确认是否有进一步面谈的价值。',
      '【价值铺垫】本次拜访主要想和您分享我们如何帮助XX行业客户提升会员活跃度和复购率。',
      '【灵活安排】如果您近期比较忙，我们也可以安排线上会议，方便您随时参与。'
    ]
  },
  communication: {
    title: '现场沟通阶段话术',
    content: [
      '【公司实力】我们公司具备完善的资质和规模，拥有丰富的会员服务经验，已服务超过1亿会员。',
      '【服务能力】我们提供权益供应链、会员体系搭建和运营陪跑的全流程服务。',
      '【行业案例】这是我们在XX行业的成功案例，通过我们的方案实现了会员收入XX%的增长。',
      '【痛点解决】针对您提到的会员活跃度问题，我们建议通过XX方案来提升用户粘性。',
      '【合作模式】我们采用无前置费、按月结算的合作方式，技术对接由我方负责。'
    ]
  }
}

export const customerFAQs = [
  { question: '价格为什么比别家贵？', answer: '我们提供策略+权益+落地+售后全流程服务；无前置费、按效果结算，综合成本更低。' },
  { question: '你们和竞品的优势？', answer: '自有供应链+系统+运营团队；1亿+会员服务案例、10万+门店落地；零前置投入、按月结算、风险共担。' },
  { question: '效果能不能保证？成功率？', answer: '效果受双方配合、市场环境影响，不承诺绝对效果；但有大量成功案例，按标准流程执行可显著提升会员数据。' },
  { question: '合作周期多久？多久见效？', answer: '常规年框合作。通常在方案落地后1-2个月即可看到明显效果。' },
  { question: '能不能先试用？', answer: '可做小规模试点；合作本身无前置费，按月结算，低风险验证效果。' },
  { question: '售后对接如何？', answer: '专属运营+技术对接；定期数据复盘、活动陪跑、售后问题快速响应。' },
  { question: '有没有同行业案例？', answer: '底层会员运营逻辑通用；我们会进行行业调研+定制方案+陪跑落地，复制跨行业成功经验。' },
  { question: '合作流程 & 客户配合事项？', answer: '需求确认→方案报价→签约→接口对接→礼包配置→上线测试→运营复盘。客户需提供接口文档和相关资源支持。' }
]

export const reverseQuestions = [
  { 
    category: '用户信息', 
    questions: [
      { question: '存量用户数大概有多少？', purpose: '了解用户规模' },
      { question: '用户画像主要是哪些群体？', purpose: '了解用户特征' },
      { question: '付费会员占比大概是多少？', purpose: '了解付费转化率' }
    ] 
  },
  { 
    category: '运营目标', 
    questions: [
      { question: '当前会员运营中最大的痛点是什么？', purpose: '了解核心痛点' },
      { question: '今年的核心运营目标有哪些？', purpose: '了解业务目标' },
      { question: '您希望通过会员权益解决什么问题？', purpose: '了解权益需求' }
    ] 
  },
  { 
    category: '合作背景', 
    questions: [
      { question: '过往有合作过哪些服务商？', purpose: '了解合作经验' },
      { question: '本次预算区间大概是多少？', purpose: '了解预算范围' },
      { question: '您对供应商有哪些核心要求？', purpose: '了解合作期望' }
    ] 
  },
  { 
    category: '决策信息', 
    questions: [
      { question: '本次合作的决策人是谁？', purpose: '了解决策链' },
      { question: '预期的合作周期是多久？', purpose: '了解时间预期' },
      { question: '您的采购流程是怎样的？', purpose: '了解流程节点' }
    ] 
  }
]

export const negotiationScripts = {
  opening: [
    '您好，我是XX公司的商务代表XXX。非常感谢您今天抽出时间与我们交流。',
    '您好，很高兴见到您！我们一直在关注贵公司的发展，对贵公司在XX领域的成就非常钦佩。',
    '您好，感谢您的接待！今天想和您探讨一下如何通过我们的平台为贵公司带来更多价值。'
  ],
  probing: [
    '请问贵公司目前在XX方面的业务发展情况如何？',
    '您认为当前业务中最大的挑战是什么？',
    '对于客户运营和用户增长，贵公司有哪些规划？',
    '您对现有合作模式是否满意？有哪些方面希望改进？'
  ],
  presenting: [
    '基于我们的分析，我们认为可以通过以下几个方面为贵公司提供支持：首先是...其次是...最后是...',
    '针对您提到的痛点，我们有成熟的解决方案。比如在XX方面，我们可以提供...',
    '我们已经成功服务过多家同行业客户，比如XX公司，通过我们的方案实现了XX%的提升。'
  ],
  handlingObjections: [
    '关于您提到的成本问题，我们可以提供灵活的合作模式，根据实际效果进行付费。',
    '关于技术对接的顾虑，我们有专业的技术团队提供全程支持，确保顺利接入。',
    '对于数据安全方面的担忧，我们有完善的数据保护措施和合规体系，可以提供相关资质证明。'
  ],
  closing: [
    '综合来看，我们的方案能够有效解决您提到的问题，您看我们什么时候可以启动合作？',
    '如果您对方案没有疑问，我们可以先签署框架协议，尽快推进实施。',
    '感谢您今天的交流，我会尽快整理方案细节发送给您，期待进一步合作！'
  ]
}

export const standardTagDimensions = {
  basic: [
    { code: 'jcsx-xyfl', name: '行业分类', type: '单选', options: ['异业', '快消品', '日用品', '家居用品', '餐饮连锁', '食品加工', '休闲食品', '软件服务', '硬件设备', '互联网平台'] },
    { code: 'jcsx-clnx', name: '成立年限', type: '单选', options: ['老牌(>10年)', '新兴品牌(5-10年)', '初创品牌(<5年)'] },
    { code: 'jcsx-qyfb', name: '区域分布', type: '单选', options: ['全国性', '区域龙头', '地方品牌', '地方特色', '全球化', '区域总部'] },
    { code: 'jcsx-fzjd', name: '发展阶段', type: '单选', options: ['稳定运营期', '快速成长期', '转型升级期', '快速扩张期', '精细化运营', '技术领先期', '转型突破期'] },
    { code: 'jcsx-tdjh', name: '拓店计划/合作计划', type: '单选', options: ['有拓展需求', '稳健经营', '战略调整中', '区域深耕', '技术研发', '生态布局'] },
    { code: 'jcsx-pltz', name: '品类拓展', type: '单选', options: ['有拓展需求', '专注主业', '专注特色', '专注技术'] },
    { code: 'jcsx-txsd', name: '特点优势', type: '文本', options: ['销量领先', '渠道优势', '品牌力强', '性价比高', '口味独特', '品质优异', '服务优质', '技术领先', '研发实力强', '创新能力', '人才优势', '品牌知名度高', '资源丰富'] },
    { code: 'jcsx-fwtx', name: '服务对象', type: '文本', options: ['个人用户', '家庭用户', '企业客户', '团体客户', '政府机构', '机构客户'] }
  ],
  ecology: [
    { code: 'stgx-hzqj', name: '合作层级', type: '单选', options: ['-'] },
    { code: 'stgx-hzjd', name: '合作阶段', type: '单选', options: ['-'] },
    { code: 'stgx-ymlx', name: '盈利模式', type: '单选', options: ['-'] },
    { code: 'stgx-sfxw', name: '是否双向合作', type: '单选', options: ['-'] },
    { code: 'stgx-smzq', name: '生命周期类型', type: '单选', options: ['上线期-风险', '稳定期', '衰退期'] },
    { code: 'stgx-zlcd', name: '质量程度', type: '单选', options: ['高', '中', '低'] },
    { code: 'stgx-gjzt', name: '跟进状态', type: '单选', options: ['定期回访中', '暂停跟进', '已终止'] }
  ],
  operation: [
    { code: 'yytx-yy', name: '运营能力', type: '单选', options: ['-'] },
    { code: 'yytx-bdj', name: 'B端对接方式', type: '单选', options: ['后台手动下发(自发)', 'API对接', '系统集成'] },
    { code: 'yytx-cdj', name: 'C端对接方式', type: '单选', options: ['-'] },
    { code: 'yytx-yhl', name: '已合作上线业务', type: '多选', options: ['会员卡', '营销活动礼包', '积分商城', '会员权益'] },
    { code: 'yytx-jhl', name: '计划合作上线业务', type: '单选', options: ['-'] }
  ],
  business: [
    { code: 'swhz-ys', name: '预算周期', type: '单选', options: ['-'] },
    { code: 'swhz-js', name: '结算周期', type: '单选', options: ['-'] },
    { code: 'swhz-kdj', name: '客单价', type: '单选', options: ['-'] }
  ],
  market: [
    { code: 'ppsc-jz', name: '品牌市场竞争', type: '多选', options: ['渠道覆盖强', '用户忠诚度高', '市场份额领先', '创新能力强'] },
    { code: 'ppsc-smt', name: '社交媒体声量', type: '单选', options: ['高', '一般', '低'] },
    { code: 'ppsc-kp', name: '市场口碑', type: '单选', options: ['质量可靠', '服务优质', '性价比高'] }
  ]
}

export const generateBrandTags = (customerInfo) => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  
  const industry = customerInfo.industry || '零售'
  
  const industryMap = {
    '零售': '零售',
    '餐饮': 'food',
    '酒店': 'hotel',
    '科技': 'tech',
    '金融': 'finance',
    '医疗健康': 'healthcare',
    '教育': 'education',
    '娱乐': 'entertainment'
  }
  
  const industryKey = industryMap[industry] || 'default'
  
  const industrySpecificOptions = {
    retail: {
      '行业分类': ['快消品', '日用品', '家居用品'],
      '成立年限': ['老牌(>10年)', '新兴品牌(5-10年)', '初创品牌(<5年)'],
      '区域分布': ['全国性', '区域龙头', '地方品牌'],
      '发展阶段': ['稳定运营期', '快速成长期', '转型升级期'],
      '拓店计划/合作计划': ['有拓展需求', '稳健经营', '战略调整中'],
      '品类拓展': ['有拓展需求', '专注主业'],
      '特点优势': ['销量领先', '渠道优势', '品牌力强', '性价比高'],
      '服务对象': ['个人用户', '家庭用户', '企业客户']
    },
    food: {
      '行业分类': ['餐饮连锁', '食品加工', '休闲食品'],
      '成立年限': ['老牌(>10年)', '新兴品牌(5-10年)', '初创品牌(<5年)'],
      '区域分布': ['全国性', '区域龙头', '地方特色'],
      '发展阶段': ['稳定运营期', '快速扩张期', '精细化运营'],
      '拓店计划/合作计划': ['有拓展需求', '稳健经营', '区域深耕'],
      '品类拓展': ['有拓展需求', '专注特色'],
      '特点优势': ['口味独特', '品质优异', '性价比高', '服务优质'],
      '服务对象': ['个人用户', '家庭用户', '团体客户']
    },
    tech: {
      '行业分类': ['软件服务', '硬件设备', '互联网平台'],
      '成立年限': ['老牌(>10年)', '新兴品牌(5-10年)', '初创品牌(<5年)'],
      '区域分布': ['全国性', '全球化', '区域总部'],
      '发展阶段': ['技术领先期', '快速成长期', '转型突破期'],
      '拓店计划/合作计划': ['有拓展需求', '技术研发', '生态布局'],
      '品类拓展': ['有拓展需求', '专注技术'],
      '特点优势': ['技术领先', '研发实力强', '创新能力', '人才优势'],
      '服务对象': ['企业客户', '政府机构', '个人用户']
    },
    default: {
      '行业分类': ['综合服务', '专业领域', '细分市场'],
      '成立年限': ['老牌(>10年)', '新兴品牌(5-10年)', '初创品牌(<5年)'],
      '区域分布': ['全国性', '区域龙头', '地方品牌'],
      '发展阶段': ['稳定运营期', '快速成长期', '转型升级期'],
      '拓店计划/合作计划': ['有拓展需求', '稳健经营', '战略调整中'],
      '品类拓展': ['有拓展需求', '专注主业'],
      '特点优势': ['品牌知名度高', '服务优质', '创新能力强', '资源丰富'],
      '服务对象': ['企业客户', '个人用户', '机构客户']
    }
  }
  
  const options = industrySpecificOptions[industryKey] || industrySpecificOptions.default
  
  const tags = []
  
  standardTagDimensions.basic.forEach(dim => {
    const dimOptions = options[dim.name] || dim.options
    const tagValue = dimOptions[random(0, dimOptions.length - 1)]
    tags.push({
      code: dim.code,
      dimension: dim.name,
      tag: tagValue,
      description: getTagDescription(dim.name, tagValue),
      type: dim.type
    })
  })
  
  tags.push({
    code: 'stgx-smzq',
    dimension: '生命周期类型',
    tag: ['上线期-风险', '稳定期', '衰退期'][random(0, 2)],
    description: '',
    type: '单选'
  })
  
  tags.push({
    code: 'stgx-zlcd',
    dimension: '质量程度',
    tag: ['高', '中', '低'][random(0, 2)],
    description: '',
    type: '单选'
  })
  
  tags.push({
    code: 'stgx-gjzt',
    dimension: '跟进状态',
    tag: ['定期回访中', '暂停跟进', '已终止'][random(0, 2)],
    description: '',
    type: '单选'
  })
  
  tags.push({
    code: 'yytx-bdj',
    dimension: 'B端对接方式',
    tag: ['后台手动下发(自发)', 'API对接', '系统集成'][random(0, 2)],
    description: '',
    type: '单选'
  })
  
  tags.push({
    code: 'ppsc-jz',
    dimension: '品牌市场竞争',
    tag: ['渠道覆盖强', '用户忠诚度高', '市场份额领先', '创新能力强'][random(0, 3)],
    description: '',
    type: '多选'
  })
  
  tags.push({
    code: 'ppsc-smt',
    dimension: '社交媒体声量',
    tag: ['高', '一般', '低'][random(0, 2)],
    description: '',
    type: '单选'
  })
  
  tags.push({
    code: 'ppsc-kp',
    dimension: '市场口碑',
    tag: ['质量可靠', '服务优质', '性价比高'][random(0, 2)],
    description: '',
    type: '单选'
  })
  
  return tags
}

const getTagDescription = (dimension, tag) => {
  const descriptions = {
    '成立年限': {
      '老牌(>10年)': '品牌成立于多年前，经营历史悠久，决策流程规范但链条较长。',
      '新兴品牌(5-10年)': '品牌成立时间适中，处于快速发展期，决策相对灵活。',
      '初创品牌(<5年)': '品牌成立时间较短，充满活力，但可能存在不确定性。'
    },
    '区域分布': {
      '全国性': '业务覆盖全国多个省市自治区，需匹配全国统一权益配置。',
      '区域龙头': '在特定区域具有领先优势，深耕本地市场。',
      '地方品牌': '主要服务于本地市场，具有较强的区域特色。'
    },
    '发展阶段': {
      '稳定运营期': '业务规模趋于稳定，核心诉求聚焦存量用户活跃度与复购提升。',
      '快速成长期': '业务处于高速增长阶段，需要快速扩张和市场渗透。',
      '转型升级期': '正在进行战略调整，需要新的业务增长点。'
    },
    '特点优势': {
      '销量领先': '市场销量表现突出，具有较强的市场竞争力。',
      '渠道优势': '拥有完善的销售渠道网络，覆盖范围广。',
      '品牌力强': '品牌知名度高，消费者认知度和美誉度良好。',
      '性价比高': '产品或服务在价格和质量上具有竞争优势。'
    }
  }
  return descriptions[dimension]?.[tag] || ''
}

export const generateMockAnalysis = (customerInfo) => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  
  const mainBusinessOptions = [
    ['零售电商', '线下门店', '品牌授权'],
    ['餐饮服务', '食品加工', '供应链管理'],
    ['软件研发', '云计算服务', '数据解决方案'],
    ['金融科技', '财富管理', '支付服务'],
    ['医疗服务', '健康管理', '医疗器械']
  ]
  
  const marketingActivities = [
    ['618大促活动', '双11购物节', '会员专属折扣'],
    ['品牌联名活动', '线下快闪店', '直播带货'],
    ['新品发布会', '用户调研活动', '公益营销'],
    ['社群运营活动', '积分兑换活动', '节日营销']
  ]
  
  const competitorPartners = [
    ['与天猫超市合作', '京东旗舰店入驻'],
    ['与美团达成战略合作', '饿了么平台合作'],
    ['与阿里云深度合作', '腾讯云服务接入'],
    ['与招商银行联名', '平安保险合作']
  ]
  
  const industry = customerInfo.industry || '零售'
  const industryIndex = ['零售', '餐饮', '科技', '金融', '医疗健康'].indexOf(industry) >= 0 
    ? ['零售', '餐饮', '科技', '金融', '医疗健康'].indexOf(industry) 
    : 0
  
  return {
    brandProfile: {
      companyName: customerInfo.companyName,
      industry: customerInfo.industry,
      scale: customerInfo.companySize,
      brandPosition: ['高端定位', '大众市场', '细分领域'][random(0, 2)],
      marketShare: `${random(5, 30)}%`,
      competitiveAdvantages: [
        '品牌知名度高',
        '产品质量优秀',
        '渠道覆盖广',
        '客户服务完善'
      ].slice(0, random(2, 4)),
      developmentStage: ['快速成长', '稳定发展', '转型升级'][random(0, 2)],
      regionalLayout: ['区域深耕', '全国扩张', '国际化布局'][random(0, 2)],
      mainBusiness: mainBusinessOptions[industryIndex].slice(0, random(2, 3)),
      companyScale: {
        registeredCapital: ['1000万', '5000万', '1亿', '5亿'][random(0, 3)],
        employeeCount: ['100-500人', '500-1000人', '1000-5000人', '5000人以上'][random(0, 3)],
        annualRevenue: ['5000万', '1亿', '5亿', '10亿以上'][random(0, 3)]
      }
    },
    brandTags: generateBrandTags(customerInfo),
    membershipStatus: {
      hasMembershipSystem: Math.random() > 0.3,
      membershipScale: ['10万以下', '10-50万', '50-100万', '100万以上'][random(0, 3)],
      membershipBenefits: ['积分兑换', '专属折扣', '生日礼遇', '优先服务'].slice(0, random(2, 4)),
      memberActivityRate: `${random(15, 45)}%`
    },
    competitorPartners: competitorPartners[industryIndex].slice(0, random(1, 2)),
    marketingActivities: marketingActivities[random(0, 3)].slice(0, random(2, 3)),
    painPoints: [
      { id: 1, name: '获客成本上升', level: '高', impact: '影响利润率', suggestion: '建议通过权益合作降低获客成本' },
      { id: 2, name: '用户留存不足', level: '中', impact: '影响用户生命周期价值', suggestion: '建议建立会员体系增强粘性' },
      { id: 3, name: '品牌曝光有限', level: '中', impact: '影响市场份额', suggestion: '建议开展联合营销活动' },
      { id: 4, name: '运营效率待提升', level: '低', impact: '影响运营成本', suggestion: '建议引入数字化工具' },
      { id: 5, name: '会员活跃度低', level: '中', impact: '影响复购率', suggestion: '建议设计差异化会员权益' }
    ],
    externalInfo: {
      sources: ['企查查', '公司官网', '微信公众号', '小红书'][random(0, 3)],
      summary: `根据${['企查查', '公司官网', '微信公众号', '小红书'][random(0, 3)]}等渠道信息显示，${customerInfo.companyName}是${customerInfo.industry}领域的领先企业。公司${mainBusinessOptions[industryIndex][0]}业务发展迅速，近期${marketingActivities[random(0, 3)][0]}活动效果显著。行业分析报告指出，该公司在产品创新和市场拓展方面具有较强竞争力。`,
      updateTime: new Date().toLocaleDateString(),
      dataSources: [
        { name: '企查查', type: '企业信息', status: '已获取' },
        { name: '公司官网', type: '主营业务', status: '已获取' },
        { name: '微信公众号', type: '营销动态', status: '已获取' },
        { name: '小红书', type: '用户评价', status: Math.random() > 0.5 ? '已获取' : '未收录' }
      ]
    }
  }
}

export const saveToKnowledgeBase = (analysis, saveOption) => {
  if (!saveOption) return false
  
  const knowledgeBaseEntry = {
    id: `kb-${Date.now()}`,
    companyName: analysis.brandProfile.companyName,
    industry: analysis.brandProfile.industry,
    brandTags: analysis.brandTags,
    summary: analysis.externalInfo.summary,
    createTime: new Date().toLocaleString(),
    updateTime: new Date().toLocaleString()
  }
  
  localStorage.setItem(`brand-knowledge-${knowledgeBaseEntry.id}`, JSON.stringify(knowledgeBaseEntry))
  
  const existingIds = JSON.parse(localStorage.getItem('brand-knowledge-ids') || '[]')
  existingIds.push(knowledgeBaseEntry.id)
  localStorage.setItem('brand-knowledge-ids', JSON.stringify(existingIds))
  
  return true
}

export const samplePlans = [
  {
    id: 'plan-001',
    companyName: '蓝月亮',
    industry: '零售',
    createTime: '2026-05-25 14:30',
    status: 'completed',
    lastModified: '2026-05-25 16:45',
    versions: [
      {
        id: 'v1',
        version: 'v1.0',
        title: '初始版本',
        description: 'AI首次生成的谈判方案',
        snapshot: {},
        createdAt: '2026-05-25 14:30'
      },
      {
        id: 'v2',
        version: 'v1.1',
        title: '品牌画像优化',
        description: '优化了品牌画像标签',
        snapshot: {},
        createdAt: '2026-05-25 15:10'
      },
      {
        id: 'v3',
        version: 'v1.2',
        title: '痛点分析更新',
        description: '增加了客户痛点建议',
        snapshot: {},
        createdAt: '2026-05-25 16:45'
      }
    ],
    chatHistory: [
      {
        role: 'user',
        content: '帮我优化品牌画像部分',
        timestamp: '2026-05-25 15:00'
      },
      {
        role: 'assistant',
        content: '好的，我将帮您优化【蓝月亮】的品牌画像部分。根据市场分析，蓝月亮作为日化领军品牌，建议从品牌定位、市场份额、发展阶段等维度进行优化...',
        timestamp: '2026-05-25 15:02'
      },
      {
        role: 'user',
        content: '修改痛点分析，增加更多建议',
        timestamp: '2026-05-25 15:30'
      },
      {
        role: 'assistant',
        content: '好的，我将帮您优化【蓝月亮】的客户痛点分析。经过深入分析，我对痛点进行了重新梳理...',
        timestamp: '2026-05-25 15:32'
      }
    ],
    brandTags: [
      { dimension: '行业分类', tag: '快消品', description: '快速消费品零售领域' },
      { dimension: '成立年限', tag: '老牌(>10年)', description: '品牌成立时间较长，经营历史超过20年' },
      { dimension: '品牌定位', tag: '大众市场', description: '面向普通家庭消费者，市场覆盖面广' },
      { dimension: '发展阶段', tag: '稳定期', description: '品牌发展成熟，市场地位稳固' },
      { dimension: '拓展计划', tag: '稳健经营', description: '采取稳健的市场拓展策略' },
      { dimension: '主营业务', tag: '专注主业', description: '专注于洗涤护理产品研发与销售' },
      { dimension: '渠道优势', tag: '品牌知名度高', description: '品牌认知度高，消费者口碑良好' },
      { dimension: '服务对象', tag: '个人消费者', description: '主要服务于家庭消费者' }
    ],
    customerInfo: {
      companyProfile: { name: '企业基本信息', content: '蓝月亮创立于1992年，是中国领先的家庭清洁护理品牌，产品涵盖衣物护理、家居清洁、个人护理等多个领域。' },
      companyScale: { name: '企业规模', content: '公司员工超过5000人，年销售额超过50亿元，产品覆盖全国各大商超渠道。' },
      mainBusiness: { name: '主营业务', content: '核心业务为洗衣液、洗手液、清洁剂等家庭清洁用品的研发、生产和销售。' },
      membershipStatus: { name: '会员现状', content: '拥有超过2000万会员，会员体系完善，活跃度较高。' },
      competitorCooperation: { name: '竞品合作', content: '主要竞品包括立白、奥妙等品牌，市场竞争激烈。' },
      marketingActivities: { name: '营销活动', content: '定期开展促销活动，与电商平台合作频繁，营销投入较大。' }
    },
    painPoints: [
      { id: 1, name: '年轻化战略落地受阻', level: '高', impact: '品牌老化导致在年轻客群中的心智缺失', suggestion: '引入头部互联网平台的高频数字权益，重塑年轻化品牌形象' },
      { id: 2, name: '营销预算紧缩', level: '高', impact: '直接采购实物礼品面临巨大的资金压力', suggestion: '引入数字化权益替代传统实物礼品，降低采购成本' },
      { id: 3, name: '会员活跃度偏低', level: '中', impact: '现有会员体系缺乏持续的权益激励', suggestion: '构建多元化的权益体系，提供个性化的会员服务' }
    ],
    reverseQuestions: [
      { 
        category: '用户信息', 
        questions: [
          { question: '存量用户数大概有多少？', purpose: '了解用户规模' },
          { question: '用户画像主要是哪些群体？', purpose: '了解用户特征' },
          { question: '付费会员占比大概是多少？', purpose: '了解付费转化率' }
        ] 
      },
      { 
        category: '运营目标', 
        questions: [
          { question: '当前会员运营中最大的痛点是什么？', purpose: '了解核心痛点' },
          { question: '今年的核心运营目标有哪些？', purpose: '了解业务目标' },
          { question: '您希望通过会员权益解决什么问题？', purpose: '了解权益需求' }
        ] 
      },
      { 
        category: '合作背景', 
        questions: [
          { question: '过往有合作过哪些服务商？', purpose: '了解合作经验' },
          { question: '本次预算区间大概是多少？', purpose: '了解预算范围' },
          { question: '您对供应商有哪些核心要求？', purpose: '了解合作期望' }
        ] 
      },
      { 
        category: '决策信息', 
        questions: [
          { question: '本次合作的决策人是谁？', purpose: '了解决策链' },
          { question: '预期的合作周期是多久？', purpose: '了解时间预期' },
          { question: '您的采购流程是怎样的？', purpose: '了解流程节点' }
        ] 
      }
    ]
  },
  {
    id: 'plan-002',
    companyName: '朴朴超市',
    industry: '零售',
    createTime: '2026-05-24 09:15',
    status: 'completed',
    lastModified: '2026-05-24 11:30',
    chatHistory: [
      {
        role: 'user',
        content: '请帮我优化谈判话术',
        timestamp: '2026-05-24 10:00'
      },
      {
        role: 'assistant',
        content: '好的，我将帮您优化【朴朴超市】的谈判话术。针对当前业务阶段，我建议从开场介绍、需求探询、方案推介等方面优化...',
        timestamp: '2026-05-24 10:02'
      }
    ],
    brandTags: [
      { dimension: '行业分类', tag: '快消品', description: '快速消费品零售领域' },
      { dimension: '成立年限', tag: '新兴品牌(5-10年)', description: '品牌成立5-10年，处于快速发展期' },
      { dimension: '品牌定位', tag: '大众市场', description: '面向大众消费者提供日常消费品' },
      { dimension: '发展阶段', tag: '快速成长期', description: '业务规模快速增长' },
      { dimension: '拓展计划', tag: '快速扩张', description: '积极开拓新市场' },
      { dimension: '主营业务', tag: '多元化', description: '提供多种品类商品' },
      { dimension: '渠道优势', tag: '线上运营能力', description: '强大的线上运营能力' },
      { dimension: '服务对象', tag: '个人消费者', description: '主要服务于个人消费者' }
    ],
    customerInfo: {
      companyProfile: { name: '企业基本信息', content: '朴朴超市是一家专注于即时配送的新零售品牌，采用前置仓模式，为消费者提供便捷的购物体验。' },
      companyScale: { name: '企业规模', content: '已在多个城市建立了完善的配送网络，拥有超过100个前置仓，日均订单量超过10万单。' },
      mainBusiness: { name: '主营业务', content: '提供生鲜、日用品、零食等品类的即时配送服务，配送时效最快可达30分钟。' },
      membershipStatus: { name: '会员现状', content: '推出了会员订阅服务，会员可享受免配送费、专属折扣等权益。' },
      competitorCooperation: { name: '竞品合作', content: '与多家供应商建立深度合作关系，确保商品品质和供应稳定性。' },
      marketingActivities: { name: '营销活动', content: '通过新人专享优惠、限时折扣、会员日活动等多种营销手段吸引新用户。' }
    },
    painPoints: [
      { id: 1, name: '配送效率提升', level: '高', impact: '配送时效是核心竞争力，需要持续优化', suggestion: '优化前置仓布局，引入智能配送系统' },
      { id: 2, name: '商品品类扩展', level: '中', impact: '需要不断丰富商品品类，满足消费者多样化需求', suggestion: '根据用户需求分析，逐步扩展商品品类' }
    ],
    reverseQuestions: [
      { 
        category: '用户信息', 
        questions: [
          { question: '日均订单量大概有多少？', purpose: '了解业务规模' },
          { question: '用户主要分布在哪些区域？', purpose: '了解用户分布' },
          { question: '会员订阅转化率是多少？', purpose: '了解会员转化' }
        ] 
      },
      { 
        category: '运营目标', 
        questions: [
          { question: '今年的配送时效目标是多少？', purpose: '了解效率目标' },
          { question: '希望通过权益合作提升哪些指标？', purpose: '了解合作目标' },
          { question: '对会员活跃度有什么预期？', purpose: '了解活跃度目标' }
        ] 
      },
      { 
        category: '合作背景', 
        questions: [
          { question: '之前是否有过权益合作经验？', purpose: '了解合作经验' },
          { question: '在会员营销上的预算大概是多少？', purpose: '了解预算范围' },
          { question: '希望合作的权益类型有哪些？', purpose: '了解权益偏好' }
        ] 
      },
      { 
        category: '决策信息', 
        questions: [
          { question: '本次合作的决策流程是怎样的？', purpose: '了解决策链' },
          { question: '预期什么时候能启动合作？', purpose: '了解时间预期' },
          { question: '对接需要哪些部门参与？', purpose: '了解对接需求' }
        ] 
      }
    ]
  },
  {
    id: 'plan-003',
    companyName: '青山集团',
    industry: '科技',
    createTime: '2026-05-23 15:00',
    status: 'draft',
    lastModified: '2026-05-23 17:20',
    chatHistory: [],
    brandTags: [
      { dimension: '行业分类', tag: '科技', description: '科技行业领域' },
      { dimension: '成立年限', tag: '新兴品牌(5-10年)', description: '品牌成立5-10年' },
      { dimension: '品牌定位', tag: '中高端', description: '面向企业客户提供高端技术服务' },
      { dimension: '发展阶段', tag: '快速成长期', description: '业务规模快速增长' },
      { dimension: '服务对象', tag: '企业客户', description: '主要服务于企业客户' }
    ],
    customerInfo: {
      companyProfile: { name: '企业基本信息', content: '青山集团是一家综合性科技企业，专注于人工智能和大数据领域。' },
      companyScale: { name: '企业规模', content: '员工超过2000人，业务覆盖全国多个城市。' },
      mainBusiness: { name: '主营业务', content: '提供AI解决方案、大数据分析、云计算服务等。' },
      membershipStatus: { name: '会员现状', content: '企业客户为主，无传统会员体系。' },
      competitorCooperation: { name: '竞品合作', content: '与多家科技巨头存在竞争关系。' },
      marketingActivities: { name: '营销活动', content: '主要通过行业展会和技术论坛进行品牌推广。' }
    },
    painPoints: [
      { id: 1, name: '获客成本高', level: '高', impact: 'B2B获客成本较高', suggestion: '通过行业合作降低获客成本' },
      { id: 2, name: '品牌知名度提升', level: '中', impact: '在行业内的品牌知名度需要提升', suggestion: '加强品牌营销和行业曝光' }
    ],
    reverseQuestions: [
      { 
        category: '用户信息', 
        questions: [
          { question: '目前服务的客户数量大概有多少？', purpose: '了解客户规模' },
          { question: '主要客户分布在哪些行业？', purpose: '了解客户行业分布' },
          { question: '客户续约率大概是多少？', purpose: '了解客户留存' }
        ] 
      },
      { 
        category: '运营目标', 
        questions: [
          { question: '今年的业务增长目标是多少？', purpose: '了解增长目标' },
          { question: '希望通过合作解决什么问题？', purpose: '了解合作需求' },
          { question: '对合作效果有什么预期？', purpose: '了解效果预期' }
        ] 
      },
      { 
        category: '合作背景', 
        questions: [
          { question: '过往有合作过哪些技术服务商？', purpose: '了解合作经验' },
          { question: '在技术服务上的预算大概是多少？', purpose: '了解预算范围' },
          { question: '选择供应商时最看重什么？', purpose: '了解选择标准' }
        ] 
      },
      { 
        category: '决策信息', 
        questions: [
          { question: '技术采购的决策流程是怎样的？', purpose: '了解决策链' },
          { question: '预期的合作周期是多久？', purpose: '了解时间预期' },
          { question: '需要哪些技术对接支持？', purpose: '了解技术需求' }
        ] 
      }
    ]
  }
]
