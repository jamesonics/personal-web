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
    role: 'Agent Infra 实习生 · Agent 评测方向',
    period: '2026.06 — 2026.09',
    location: '北京 / 中国',
    accent: '#111111',
    logo: 'bytedance',
    draft: true,
    summary: '参与 Fornax 平台的 Agent 评测与基础设施建设，支持智能体实验、数据集管理与评测链路迭代。',
    bullets: [
      '参与 Agent 评测任务的流程设计与工程实现，关注评测目标、数据集和实验运行之间的可追溯性。',
      '协助完善评测平台的调用链路与结果分析能力，为 Agent 开发和迭代提供稳定的基础设施支持。',
      '参与真实业务场景中的问题定位、评测反馈与工具链优化。',
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
