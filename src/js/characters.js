// 角色数据库
const characters = {
    // NT - 理性者
    'INTJ': {
        type: 'INTJ',
        code: 'RD-α',
        title: '谜语人 · 执棋者',
        characters: [
            { name: '凯尔希', wikiName: '凯尔希', imageName: '凯尔希', quote: '博士，你和你的罗德岛，毫无疑问，将成为这片大地风暴的中心。' },
            { name: '逻各斯', wikiName: 'Logos', imageName: '逻各斯', quote: '生者的声音，死者听不见。但这并不意味着我们应当停止呼喊。' }
        ]
    },
    'INTP': {
        type: 'INTP',
        code: 'RD-β',
        title: '疯狂科学家',
        characters: [
            { name: '多萝西', wikiName: '多萝西', imageName: '多萝西', quote: '拓荒者们，让我们一起建设那个没有悲伤的梦境吧！' },
            { name: '缪尔赛思', wikiName: '缪尔赛思', imageName: '缪尔赛思', quote: '水可是很聪明的哦~博士，你想见见哪一个我呢？' }
        ]
    },
    'ENTJ': {
        type: 'ENTJ',
        code: 'RD-γ',
        title: '霸道总裁 · 领袖',
        characters: [
            { name: '银灰', wikiName: '银灰', imageName: '银灰', quote: '既然他们不愿睁眼看这个世界，那就由我来打破这层虚伪的宁静。' },
            { name: '推进之王', wikiName: '推进之王', imageName: '推进之王', quote: '前方不论是什么，只要粉碎过去就行了。' }
        ]
    },
    'ENTP': {
        type: 'ENTP',
        code: 'RD-δ',
        title: '乐子人 · 战术大师',
        characters: [
            { name: '维什戴尔', wikiName: '维什戴尔', imageName: '维什戴尔', quote: '惊不惊喜，意不意外？砰——！' },
            { name: '阿', wikiName: '阿', imageName: '阿', quote: '来尝尝我新配的药吧！副作用？那也是药效的一部分嘛！' }
        ]
    },

    // NF - 理想主义者
    'INFJ': {
        type: 'INFJ',
        code: 'RD-ε',
        title: '圣者 · 引导者',
        characters: [
            { name: '闪灵', wikiName: '闪灵', imageName: '闪灵', quote: '我曾发誓不再拔出这把剑……但为了你们，我愿再次斩断罪孽。' },
            { name: '塑心', wikiName: '塑心', imageName: '塑心', quote: '听到了吗？那隐藏在你心底，最真实、最不受束缚的旋律。' }
        ]
    },
    'INFP': {
        type: 'INFP',
        code: 'RD-ζ',
        title: '纯真灵魂 · 治愈者',
        characters: [
            { name: '迷迭香', wikiName: '迷迭香', imageName: '迷迭香', quote: '博士……你会忘记我吗？我不想忘记大家。' },
            { name: '铃兰', wikiName: '铃兰', imageName: '铃兰', quote: '那个，博士，铃兰会努力帮上大家忙的！' }
        ]
    },
    'ENFJ': {
        type: 'ENFJ',
        code: 'RD-η',
        title: '理想之光 · 领袖',
        characters: [
            { name: '阿米娅', wikiName: '阿米娅', imageName: '阿米娅', quote: '博士，您还有许多事情需要处理，现在还不能休息哦。' },
            { name: '临光', wikiName: '临光', imageName: '临光', quote: '不要害怕黑暗，因为我们就是照亮前路的光！' }
        ]
    },
    'ENFP': {
        type: 'ENFP',
        code: 'RD-θ',
        title: '快乐源泉 · 探险家',
        characters: [
            { name: '刻俄柏', wikiName: '刻俄柏', imageName: '刻俄柏', quote: '博士，今天吃什么呀？有蜜饼吗！' },
            { name: '嵯峨', wikiName: '嵯峨', imageName: '嵯峨', quote: '小僧乃嵯峨！这就为您超度——！' }
        ]
    },

    // SJ - 守护者
    'ISTJ': {
        type: 'ISTJ',
        code: 'RD-ι',
        title: '规矩守护者',
        characters: [
            { name: '塞雷娅', wikiName: '塞雷娅', imageName: '塞雷娅', quote: '规则的存在是为了保护弱者，而不是为了束缚强者。' },
            { name: '送葬人', wikiName: '送葬人', imageName: '送葬人', quote: '目标确认，开始执行清除程序。我不需要感情，只需遵循法则。' }
        ]
    },
    'ISFJ': {
        type: 'ISFJ',
        code: 'RD-κ',
        title: '暖心后盾',
        characters: [
            { name: '古米', wikiName: '古米', imageName: '古米', quote: '古米的平底锅，不仅能做饭，还能保护大家！' }
        ]
    },
    'ESTJ': {
        type: 'ESTJ',
        code: 'RD-λ',
        title: '严厉长官',
        characters: [
            { name: '陈', wikiName: '陈', imageName: '陈', quote: '绝对不放过任何一个罪恶！哪怕前方是万丈深渊。' },
            { name: '号角', wikiName: '号角', imageName: '号角', quote: '为了维多利亚的荣耀！风暴司令部，绝不退缩！' }
        ]
    },
    'ESFJ': {
        type: 'ESFJ',
        code: 'RD-μ',
        title: '社交核心',
        characters: [
            { name: '星熊', wikiName: '星熊', imageName: '星熊', quote: '干一杯吧，博士！把烦恼都忘掉，般若会保护你们的！' },
            { name: '风笛', wikiName: '风笛', imageName: '风笛', quote: '维多利亚皇家近卫学院毕业生，风笛，前来报到！' }
        ]
    },

    // SP - 探险家
    'ISTP': {
        type: 'ISTP',
        code: 'RD-ν',
        title: '冷酷杀手 · 技艺者',
        characters: [
            { name: '德克萨斯', wikiName: '德克萨斯', imageName: '德克萨斯', quote: '闭嘴，然后按我说的做。' },
            { name: '夜刀', wikiName: '夜刀', imageName: '夜刀', quote: '我的剑，将为您斩断黑夜中的一切阻碍。' }
        ]
    },
    'ISFP': {
        type: 'ISFP',
        code: 'RD-ξ',
        title: '孤独行者 · 艺术家',
        characters: [
            { name: '塑心', wikiName: '塑心', imageName: '塑心', quote: '你，和我，不是同一种生物。靠近我，会给你带来灾难。' }
        ]
    },
    'ESTP': {
        type: 'ESTP',
        code: 'RD-ο',
        title: '战场先锋',
        characters: [
            { name: '煌', wikiName: '煌', imageName: '煌', quote: '热身结束，让我们开始大干一场吧！' },
            { name: '嘉维尔', wikiName: '嘉维尔', imageName: '嘉维尔', quote: '别乱动，我给你治病呢！再动打断你的腿！' }
        ]
    },
    'ESFP': {
        type: 'ESFP',
        code: 'RD-π',
        title: '舞台明星',
        characters: [
            { name: '能天使', wikiName: '能天使', imageName: '能天使', quote: '苹果派！老板，今天也是充满活力的一天呢！' },
            { name: '空', wikiName: '空', imageName: '空', quote: '大家，准备好听我的演唱会了吗？音乐，能带给大家笑容！' }
        ]
    }
};

// 维度说明 - 泰拉风格
const dimensionNames = {
    'E': '外向型 - 善于团队协作',
    'I': '内敛型 - 独立思考者',
    'S': '务实派 - 注重细节与现实',
    'N': '直觉派 - 洞察本质与未来',
    'T': '理性决策 - 逻辑优先',
    'F': '感性决策 - 情感共鸣',
    'J': '计划型 - 有序执行',
    'P': '灵活型 - 随机应变'
};

// 维度类别名称
const dimensionCategories = {
    'EI': '社交倾向',
    'SN': '信息处理',
    'TF': '决策模式',
    'JP': '行动风格'
};
