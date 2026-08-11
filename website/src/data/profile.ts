export const education = [
  {
    school: '西安交通大学',
    meta: 'C9 · 985 · 双一流',
    degree: '能源与动力工程学院 · 硕士研究生',
    period: '2025.09 — 2028.06',
    details: '研究方向：垂类智能体、RAG 知识增强与多智能体协作系统。',
  },
  {
    school: '华东理工大学',
    meta: '211 · 双一流',
    degree: '过程装备与控制工程 / 机械设计制造及其自动化（双学位）',
    period: '2021.09 — 2025.06',
    details: '专业排名 15/127，CET-6 507。',
  },
] as const;

export const experience = [
  {
    organization: '字节跳动 · Fornax',
    role: 'Agent Infra 实习生 · Harness 与 Agent 评测方向',
    period: '2026.06 — 至今',
    location: '上海 / 中国',
    accent: '#111111',
    logo: 'bytedance',
    draft: true,
    summary: '围绕 Agent Harness、评测 Runtime 与平台可靠性参与基础设施建设，推动异构 Agent 以统一、可复用的原子能力接入横向评测。',
    bullets: [
      '参与团队 Agent Harness 建设，围绕真实任务执行、工具与环境适配、调试和可观测链路持续沉淀通用能力。',
      '推进评测 Runtime 链路改造与平台能力原子化，面向降低不同 Agent 接入统一横评流程时的定制成本，提升评测的一致性与可扩展性。',
      '承担 On-call 与缺陷修复，定位并修复平台部分水平越权风险，补齐资源级权限校验与回归验证，降低平台安全与稳定性风险。',
    ],
  },
  {
    organization: '广东省电信规划设计院（长沙分院）',
    role: '集客线条业务实习生',
    period: '2022',
    location: '长沙 / 中国',
    accent: '#1aa260',
    logo: 'ctdi',
    draft: false,
    summary: '参与智慧城市建设推广与沿江渡口视频监控布置项目，完成前期研究、数据整理和方案支持。',
    bullets: [
      '参与长沙市开福区智慧城市建设推广，负责政策与案例研究、汇报材料制作。',
      '参与湖北省沿江渡口视频监控布置，完成点位信息收集、地图定位与成本评估。',
    ],
  },
] as const;

export const fornaxInternshipDetails = {
  updatedAt: '2026.08.11',
  expectedEnd: '预计持续至 2026.09',
  positioning:
    '以价值为取向、结果为导向，在 Agent 研发与评测链路中寻找影响团队效率、能力覆盖和结果可信度的关键瓶颈。',
  methodology: [
    {
      index: '01',
      title: '价值取向',
      description: '先判断问题对 Agent 能力、团队效率或业务交付的真实影响。',
    },
    {
      index: '02',
      title: '结果导向',
      description: '不把功能完成等同于成果，持续追踪能力是否落地、采用和复用。',
    },
    {
      index: '03',
      title: '指标目标',
      description: '围绕成功率、覆盖率、接入周期、稳定性与风险等指标验证结果。',
    },
    {
      index: '04',
      title: '因果索引',
      description: '记录目标、瓶颈、关键行动、作用机制、指标变化与归因证据。',
    },
  ],
  workstreams: [
    {
      index: '01',
      title: '团队 Harness 建设',
      englishTitle: 'Agent Harness',
      status: '持续建设',
      tone: 'orange',
      description:
        '参与团队 Agent Harness 建设。当前先建立统一成果框架，后续将按具体项目补齐任务背景、技术机制、实测结果和团队影响。',
      valuePath:
        '完善执行与调试基础设施 → 让 Agent 更稳定地完成真实任务 → 缩短研发定位与迭代链路',
      metrics: ['任务成功率', '工具调用成功率', '接入与调试时长', '轨迹完整率'],
    },
    {
      index: '02',
      title: '评测 Runtime 链路改造',
      englishTitle: 'Evaluation Runtime',
      status: '核心工作线',
      tone: 'blue',
      description:
        '改造平台评测 Runtime 链路，面向不同 Agent 的统一接入和横向评测；推动平台能力原子化，减少 Agent-specific 的重复适配。',
      valuePath:
        '统一链路与原子能力 → 异构 Agent 可横向比较 → 评测结果更一致可比 → 加快 Agent 选型与迭代',
      metrics: ['新 Agent 接入周期', '定制适配量', 'Runtime 成功率', '可评测任务覆盖率'],
    },
    {
      index: '03',
      title: 'On-call、Bug 与安全治理',
      englishTitle: 'Reliability & Security',
      status: '持续响应',
      tone: 'red',
      description:
        '承担平台问题响应和缺陷修复，已定位并推进修复部分水平越权问题，补齐资源级权限校验与回归验证。',
      valuePath:
        '快速定位与权限边界修复 → 降低越权、误操作和故障风险 → 保护评测资产与结果可信度',
      metrics: ['问题定位与恢复时间', '缺陷复发率', '权限校验覆盖', '回归验证通过率'],
    },
    {
      index: '04',
      title: '工程支持与自驱探索',
      englishTitle: 'Exploration & Leverage',
      status: '持续沉淀',
      tone: 'green',
      description:
        '承接跨模块工程支持，并围绕 Agent、Agentic RL、后训练与模型评测主动学习，尝试把零散问题沉淀为可复用的认知、文档和工具。',
      valuePath:
        '解决即时问题并识别共性 → 形成可复用沉淀 → 降低团队后续重复成本并拓展技术判断深度',
      metrics: ['文档与工具沉淀', '重复问题处理成本', '实验可复现性', '复用范围'],
    },
  ],
  causalIndex: [
    { label: '团队目标', value: '让不同 Agent 能够稳定接入、统一评测并形成可信比较' },
    { label: '关键瓶颈', value: '链路、协议和能力边界不统一，带来重复适配与结果不可比' },
    { label: '关键行动', value: '改造 Runtime 链路，拆分和沉淀可复用的原子化平台能力' },
    { label: '直接指标', value: '接入周期、运行成功率、任务覆盖率与定制适配量' },
    { label: '团队结果', value: '提升横评效率与可扩展性，为模型和 Agent 迭代提供更可信依据' },
    { label: '归因证据', value: '通过链路测试、运行记录、使用反馈与改造前后对比持续验证' },
  ],
  valueDimensions: [
    {
      title: 'Agent 能力释放',
      description: '关注 Harness 是否让模型能力能够在真实任务、工具和环境中稳定发挥。',
      metrics: '任务成功率 · 工具成功率 · 复杂任务覆盖',
    },
    {
      title: '评测规模与可信度',
      description: '关注不同 Agent 是否能在统一链路中被公平、可复现地横向比较。',
      metrics: 'Runtime 成功率 · 结果一致性 · 可复现率',
    },
    {
      title: '研发与组织提效',
      description: '关注原子能力复用是否降低新 Agent、新任务和新实验的边际接入成本。',
      metrics: '接入周期 · 人工步骤 · 定制代码与重复开发量',
    },
    {
      title: '可靠性与风险控制',
      description: '关注 On-call、缺陷治理和权限边界是否保护平台资产与评测结论。',
      metrics: 'MTTR · 缺陷复发率 · 权限校验覆盖 · 回归结果',
    },
  ],
} as const;

export const honors = [
  { year: '2024', title: '国家奖学金', type: 'Scholarship' },
  { year: '2024', title: '第十四届“挑战杯”上海市大学生创业计划竞赛银奖', type: 'Innovation' },
  { year: '2023', title: '中国国际“互联网+”大学生创新创业大赛上海赛区银奖', type: 'Innovation' },
  { year: '2023', title: '华东理工大学优秀奖学金', type: 'Scholarship' },
  { year: '2023', title: '“上图杯”上海市大学生先进成图技术与创新设计大赛团体一等奖', type: 'Competition' },
  { year: '2023', title: '“上图杯”个人二等奖', type: 'Competition' },
  { year: '2023', title: '上海市大学生创造杯大赛优胜奖', type: 'Innovation' },
] as const;

export const patents = [
  { title: '实用新型专利', role: '第一发明人', number: '2023231029392' },
  { title: '外观设计专利', role: '第二发明人', number: '2023307522854' },
] as const;

export const skillGroups = [
  {
    title: '智能体与大模型',
    skills: ['LangChain', 'LangGraph', 'DeepAgents', 'Prompt Engineering', 'MCP'],
  },
  {
    title: '检索与科研工具',
    skills: ['RAG', 'Qdrant', 'Ollama Embedding', 'Evaluation', 'Paper Automation'],
  },
  {
    title: '工程开发',
    skills: ['Python', 'AsyncIO', 'Docker', 'Flask', 'Playwright', 'Git'],
  },
  {
    title: '人工智能与视觉',
    skills: ['PyTorch', 'YOLOv5', 'Multimodal Models', 'Data Annotation'],
  },
] as const;
