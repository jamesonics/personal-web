export const site = {
  name: '刘子涵',
  englishName: 'James Liu',
  title: 'AI Agent Researcher & Builder',
  affiliation: '西安交通大学 · 能源与动力工程学院',
  email: 'JamesL@stu.xjtu.edu.cn',
  github: 'https://github.com/topjames666',
  description:
    '面向真实工程问题，研究并构建垂类智能体、RAG 系统与多智能体协作工作流。',
  base: '/personal-web',
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Research', href: '/research/' },
  { label: 'Writing', href: '/writing/' },
  { label: 'About', href: '/about/' },
  { label: 'CV', href: '/cv/' },
] as const;

export const stats = [
  { value: '8+', label: '跨学科项目' },
  { value: '2', label: '授权/申请专利' },
  { value: '12', label: '最大带队规模' },
  { value: '3000+', label: '视觉数据标注' },
] as const;
