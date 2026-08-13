# 001 - 统一动效节奏并限制 Hover 位移

- **Status**: DONE
- **Commit**: 5855487
- **Severity**: HIGH
- **Category**: Accessibility / Frequency / Cohesion
- **Estimated scope**: 1 file, `website/src/styles/global.css`

## Problem

`global.css` 中卡片、按钮、Dock、TOC、实习卡片等位移 Hover 直接应用到所有指针环境；`.skill-pill:hover` 让非交互信息标签移动，项目封面装饰也在每次 Hover 时漂移。时长和曲线分散手写。

## Target

在 `:root` 增加：

```css
--motion-fast: 160ms;
--motion-ui: 200ms;
--motion-panel: 280ms;
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
```

仅在 `@media (hover: hover) and (pointer: fine)` 中启用位移/缩放 Hover。删除 `.skill-pill` 和 `.project-cover` 装饰运动。按钮补充 `:active { transform: scale(.97) }`，持续时间 160ms。

## Repo conventions to follow

Token 放在 `website/src/styles/global.css` 的根 `:root`；不新增依赖、不改变色彩、字体、半径、布局和内容。

## Steps

1. 添加共享时长与曲线 Token。
2. 将核心 UI transition 改用 Token。
3. 将所有位移/缩放 Hover 归入精细指针媒体查询。
4. 删除非交互 Skill 标签和项目封面装饰运动。
5. 为按钮和图标按钮增加轻微按下反馈。

## Boundaries

- 不改变页面结构和响应式断点。
- 不增加动画库。
- 不增加新动效类型。

## Verification

- `rg` 确认所有 Hover 位移位于精细指针媒体查询。
- 触屏模拟下卡片无位移，点击按钮仍有即时按下反馈。
- 桌面 Hover 幅度克制，内容不发生布局变化。
