export type Project = {
  slug: string;
  title: string;
  englishTitle: string;
  category: 'AI & Agents' | 'Research Tools' | 'Vision & Robotics' | 'Product Engineering';
  year: string;
  role: string;
  summary: string;
  description: string;
  tags: string[];
  highlights: string[];
  metrics: Array<{ value: string; label: string }>;
  featured?: boolean;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: 'turbomachinery-agent',
    title: '叶轮机械智能设计 Agent',
    englishTitle: 'Turbomachinery Design Agent',
    category: 'AI & Agents',
    year: '2025.09 — 至今',
    role: '独立开发者 · 硕士研究方向',
    summary: '将专业知识、工程工具和 Agent 规划能力组织成面向叶轮机械设计的智能工作台。',
    description:
      '基于 LangChain 与 LangGraph 构建垂类智能体系统，为叶轮机械设计工程师提供从需求分析、知识检索到方案生成的全流程支持。',
    tags: ['LangChain', 'LangGraph', 'RAG', 'MCP', 'Qdrant'],
    highlights: [
      '设计 Qdrant + Ollama 本地化 RAG 方案，处理 1401 页专业文档',
      '通过 langchain-mcp-adapters 接入 3 个 MCP Server',
      '开发流式交互前端，展示推理过程与工具调用',
      '使用 Docker 编排知识库、模型与应用服务',
    ],
    metrics: [
      { value: '1401', label: '专业文档页数' },
      { value: '80%+', label: 'Top-3 问答相关度' },
      { value: '3 min', label: '容器化启动' },
    ],
    featured: true,
    accent: 'indigo',
  },
  {
    slug: 'reviewgo',
    title: 'ReviewGo 智能文献综述系统',
    englishTitle: 'AI Literature Review Workspace',
    category: 'Product Engineering',
    year: '2025.12 — 至今',
    role: '项目负责人 · 全栈开发',
    summary: '面向科研工作者的一站式论文理解与综述生成产品。',
    description:
      '用户上传 PDF 论文后，系统经过解析、证据提取、主题组织与写作校验，生成结构化文献综述。',
    tags: ['React', 'TypeScript', 'Agent Workflow', 'SaaS'],
    highlights: [
      '完成首页、任务创建、进度监控、定价等 8 个核心页面',
      '设计并实现 6 步文献综述生成流水线',
      '负责产品规划、交互设计、技术选型与第一版前后端实现',
    ],
    metrics: [
      { value: '8', label: '核心产品页面' },
      { value: '6-step', label: '生成流水线' },
      { value: '0→1', label: '完整产品构建' },
    ],
    featured: true,
    accent: 'violet',
  },
  {
    slug: 'deepagents-crawler',
    title: 'DeepAgents 多智能体爬虫',
    englishTitle: 'Multi-Agent Web Research System',
    category: 'AI & Agents',
    year: '2025.12 — 至今',
    role: '独立开发者',
    summary: '用协调器和专业子 Agent 自动完成网站分析、采集、执行与数据清洗。',
    description:
      '采用 Orchestrator Pattern 设计 1+4 多智能体架构，在隔离沙箱中完成复杂网页研究任务。',
    tags: ['LangGraph', 'Multi-Agent', 'Docker', 'AsyncIO'],
    highlights: [
      '设计 1 个协调器 + 4 个专业子 Agent 的协作模式',
      '基于 LangChain @tool 开发 8 个领域工具',
      '使用闭包工厂创建 Docker 沙箱执行工具',
      '利用 asyncio + aiohttp 实现高并发网页获取',
    ],
    metrics: [
      { value: '1+4', label: 'Agent 架构' },
      { value: '8', label: '专业工具' },
      { value: 'Sandbox', label: '隔离执行' },
    ],
    featured: true,
    accent: 'cyan',
  },
  {
    slug: 'paper-finder',
    title: 'Paper Finder 多源论文检索',
    englishTitle: 'Multi-source Academic Search',
    category: 'Research Tools',
    year: '2026.01',
    role: '独立开发者',
    summary: '融合关键词扩展、浏览器自动化与报告生成的学术检索工具。',
    description:
      '支持知网 CNKI 与 arXiv 多源检索，通过 LLM 扩展关键词，并以浏览器自动化完成并发采集与结构化报告生成。',
    tags: ['Flask', 'Playwright', 'LLM', 'REST API'],
    highlights: [
      '设计 Flask REST API 与原生 JavaScript 前端',
      '使用 SearchOrchestrator 统一管理双数据源',
      '单浏览器多标签并发使检索速度提升 3—5 倍',
    ],
    metrics: [
      { value: '2', label: '论文数据源' },
      { value: '3—5×', label: '检索加速' },
      { value: 'Auto', label: '报告生成' },
    ],
    accent: 'blue',
  },
  {
    slug: 'paper-reading-automation',
    title: '论文解析自动化工作流',
    englishTitle: 'Paper Reading Automation',
    category: 'Research Tools',
    year: '2026.01 — 至今',
    role: '独立开发者',
    summary: '从 PDF 扫描、多模态理解到飞书/Notion 沉淀的一体化研究工作流。',
    description:
      '基于可复用 Agent Skill 构建论文处理流水线，自动完成扫描、去重、多模态解析、深度分析与知识库同步。',
    tags: ['Multimodal', 'PDF', 'Feishu API', 'Notion API'],
    highlights: [
      '定义 6 步可恢复自动化流程',
      '使用 PyMuPDF 与视觉模型逐页分析',
      '设计模型和服务降级策略',
      '支持飞书与 Notion 双平台同步',
    ],
    metrics: [
      { value: '6-step', label: '自动化流程' },
      { value: '2', label: '知识平台' },
      { value: 'Page-level', label: '多模态解析' },
    ],
    accent: 'emerald',
  },
  {
    slug: 'rehab-risk-perception',
    title: '康复危险感知系统',
    englishTitle: 'Rehabilitation Risk Perception',
    category: 'Vision & Robotics',
    year: '2024.01 — 2024.06',
    role: '第一负责人',
    summary: '使用计算机视觉实时识别康复训练中的危险姿态并触发辅助保护。',
    description:
      '基于 YOLOv5 构建患者危险姿态识别系统，结合训练器电机系统实现实时安全监护。',
    tags: ['YOLOv5', 'PyTorch', 'Computer Vision'],
    highlights: [
      '采集并标注 3000+ 张康复危险姿态图像',
      '完成 500+ epochs 模型训练与指标评估',
      '优化实时视频流推理流程',
    ],
    metrics: [
      { value: '3000+', label: '标注图像' },
      { value: '500+', label: '训练轮次' },
      { value: '80%+', label: '识别精度' },
    ],
    accent: 'orange',
  },
  {
    slug: 'rehab-walking-trainer',
    title: '康复行走训练器',
    englishTitle: 'Rehabilitation Walking Trainer',
    category: 'Vision & Robotics',
    year: '2022.09 — 2024.06',
    role: '第一负责人',
    summary: '面向脑卒中及行动障碍患者的自主、安全康复训练设备。',
    description:
      '从需求调研、机械设计、电控协同到竞赛路演，完成多轮产品迭代与企业合作对接。',
    tags: ['Product Design', 'Healthcare', 'Team Leadership'],
    highlights: [
      '带领 12 人团队，组织 200+ 次协作会议',
      '绘制 300+ 零件并完成多轮实物搭建',
      '建立 5 项康复量化指标',
      '推动企业合作与专利申请',
    ],
    metrics: [
      { value: '12', label: '团队成员' },
      { value: '300+', label: '设计零件' },
      { value: '2', label: '相关专利' },
    ],
    accent: 'rose',
  },
  {
    slug: 'metro-tunnel-cleaner',
    title: '地铁隧道清洁车',
    englishTitle: 'Metro Tunnel Cleaning Vehicle',
    category: 'Product Engineering',
    year: '2023.09 — 2024.06',
    role: '主要成员',
    summary: '面向城市轨道交通的轻量化、智能化清洁设备迭代。',
    description:
      '参与清洁车从第三代向第四代的轻量化迭代，并在上海地铁场景完成运行测试。',
    tags: ['Smart City', 'Mechanical Design', 'Field Test'],
    highlights: [
      '参与产品轻量化和智能化设计迭代',
      '参与上海地铁实际场景测试',
      '支持项目展示与方案汇报',
    ],
    metrics: [
      { value: '3→4', label: '产品代际迭代' },
      { value: 'Metro', label: '真实场景测试' },
      { value: 'Smart', label: '设备升级' },
    ],
    accent: 'amber',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
