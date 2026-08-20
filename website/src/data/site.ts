export const site = {
  name: '刘子涵',
  englishName: 'James Liu',
  title: 'AI Agent 研究与开发',
  affiliation: '西安交通大学 · 能源与动力工程学院',
  email: 'JamesL@stu.xjtu.edu.cn',
  github: 'https://github.com/jamesonics',
  description:
    '面向真实工程问题，研究并构建垂类智能体、RAG 系统与多智能体协作工作流。',
  base: '/personal-web',
} as const;

export const navigation = [
  { label: '首页', href: '/' },
  { label: '项目', href: '/projects/' },
  { label: '研究', href: '/research/' },
  { label: 'Blog', href: '/blog/' },
  { label: '实习', href: '/internships/' },
  { label: '关于', href: '/about/' },
  { label: '简历', href: '/cv/' },
] as const;

export const stats = [
  { value: '8+', label: '跨学科项目' },
  { value: '2', label: '授权/申请专利' },
  { value: '12', label: '最大带队规模' },
  { value: '3000+', label: '视觉数据标注' },
] as const;
