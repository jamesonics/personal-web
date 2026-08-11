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
    slug: 'fornax',
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
      '参与平台 On-call 与缺陷治理，完善资源访问校验、异常处理与回归验证，降低稳定性和权限边界风险。',
    ],
  },
  {
    slug: 'gpdi',
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
  workstreams: [
    {
      title: '团队 Harness 建设',
      description:
        '围绕真实任务执行、工具与环境适配、调试和可观测能力，参与团队 Agent Harness 的持续建设。',
      value: '让 Agent 更稳定地完成真实任务，降低问题定位与迭代成本。',
      contribution: '参与梳理真实任务执行所需的通用能力，并持续补齐工具、环境、调试与可观测链路。',
      evidence: '具体项目、能力覆盖范围与效果指标将在后续获得可公开证据后逐项补充。',
    },
    {
      title: '评测 Runtime 链路改造',
      description:
        '推进评测 Runtime 链路改造和能力原子化，支持不同 Agent 以更统一的方式接入横向评测。',
      value: '减少重复适配，提高评测的一致性、可比性与扩展效率。',
      contribution: '参与链路改造和能力边界拆分，使平台原子能力能够被不同 Agent 组合复用。',
      evidence: '后续重点补充 Agent 接入周期、定制适配量、运行成功率和任务覆盖范围。',
    },
    {
      title: '平台质量与问题治理',
      description:
        '参与平台 On-call 与缺陷治理，完善资源访问校验、异常处理和回归验证。',
      value: '降低稳定性和权限边界风险，保护评测资产与结论可信度。',
      contribution: '参与问题定位、修复方案落地和回归验证，将单点问题转化为更完整的质量防线。',
      evidence: '公开页面仅保留问题治理方法；具体安全发现、内部链路和业务数据不对外披露。',
    },
    {
      title: '工程支持与自驱探索',
      description:
        '承接跨模块工程支持，并围绕 Agent、Agentic RL、后训练与模型评测持续学习和实践。',
      value: '把即时问题沉淀为可复用的认知、文档和工具，降低后续重复成本。',
      contribution: '在完成即时支持的同时识别共性问题，并通过文档、工具或实验记录形成可复用沉淀。',
      evidence: '后续将把适合公开的探索整理为 Blog、项目复盘和面试表达材料。',
    },
  ],
  valueFramework: [
    {
      title: '问题价值',
      description: '明确工作解决了谁的什么瓶颈，以及不处理会产生的成本或风险。',
    },
    {
      title: '关键行动',
      description: '说明我改变了哪一段链路、能力边界或协作方式，以及其中的个人贡献。',
    },
    {
      title: '结果与指标',
      description: '通过成功率、覆盖范围、接入周期、稳定性或风险变化判断工作是否落地。',
    },
    {
      title: '因果证据',
      description: '使用链路测试、运行记录、使用反馈和改造前后对比约束结果归因。',
    },
  ],
} as const;

export const gpdiInternshipDetails = {
  positioning:
    '通过智慧城市与沿江渡口视频监控项目，参与从政策研究、点位信息整理到方案与成本支持的业务前期工作。',
  workstreams: [
    {
      title: '智慧城市建设推广',
      description: '围绕长沙市开福区智慧城市建设，收集政策、行业案例和建设思路，支持汇报材料整理。',
      contribution: '完成政策与案例研究，并将分散信息整理为便于沟通和决策的方案材料。',
      value: '帮助团队更高效地理解区域需求、行业实践与方案表达重点。',
    },
    {
      title: '沿江渡口视频监控布置',
      description: '参与湖北省沿江渡口视频监控项目，整理点位信息、地图位置与建设条件。',
      contribution: '完成基础数据收集、地图定位和成本评估支持。',
      value: '为后续设备布置和方案成本判断提供更完整的前置信息。',
    },
  ],
  reflection:
    '这段经历让我第一次在真实组织中理解：技术方案不仅取决于功能本身，还取决于现场条件、政策背景、成本约束和跨角色沟通。',
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
