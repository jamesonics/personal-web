# 全站动效审计 - 2026-08-13

- **审计基线**: `5855487`
- **范围**: `website/src/`、`website/public/scripts/site.js`
- **技术栈**: Astro 7 静态站点、Vanilla CSS、原生 JavaScript、无动效库
- **产品性格**: 中文优先、清晰、平静、可信、轻度表达；动效应辅助信息理解而不是制造展示感
- **权威约束**: `/AGENTS.md`、`/docs/UI_DESIGN_SYSTEM.md`、`/website/AGENTS.md`

## Recon

当前动效面包括：滚动 reveal、按钮/卡片 Hover、Dock Hover/Tooltip/滚动隐藏、移动菜单、Hero Blob、页面 Ambient Canvas、项目 Radar、文章 TOC。已有 `prefers-reduced-motion`，但实现过于全局；动效时长和缓动没有共享 Token。

## 经复核的发现

| # | Severity | Category | Location | Finding | Fix summary |
|---|---|---|---|---|---|
| 1 | HIGH | Accessibility / Frequency | `website/src/styles/global.css:26-35,75-93,278-294,633-676,712-819` | 多处位移/缩放 Hover 未使用精细指针媒体查询；触屏可能产生粘滞 Hover，高频卡片和非交互 Skill 标签运动偏多。 | 仅在 `(hover: hover) and (pointer: fine)` 下启用位移；删除 Skill 标签与项目封面装饰运动；降低 Dock 幅度。 |
| 2 | HIGH | Cohesion / Interruptibility | `website/public/scripts/site.js:31-42`, `website/src/styles/global.css:346-386` | Dock 同时由 `:hover`、`.is-hovered` 和 JS 内联 `style.transform` 控制。内联样式覆盖 CSS 组合值，形成三套状态源。 | 删除 JS Hover/Focus 驱动和 `.is-hovered`；CSS 处理鼠标，`:focus-visible` 为键盘即时显示。 |
| 3 | MEDIUM | Accessibility | `website/src/styles/global.css:208`, `website/src/components/ArticleTOC.astro:77-112` | reduced-motion 将所有动画/过渡压到 `.01ms`，连颜色和可见性反馈也被清除；TOC 点击仍强制 `smooth`。 | 改成组件级规则，只删除位移和循环运动；TOC 根据媒体查询使用 `auto` 或 `smooth`。 |
| 4 | MEDIUM | Easing / State | `website/src/styles/global.css:215-216`, `website/public/scripts/site.js:7-14`, `website/src/components/Header.astro:18-24` | 移动菜单使用通用 `ease`，没有 `aria-expanded`、`aria-hidden`、Escape 关闭和焦点恢复。 | 使用 `--ease-drawer` 与 280ms；同步可访问状态、inert、Escape 与焦点。 |
| 5 | MEDIUM | Performance | `website/src/components/DotCanvas.astro:1-38`, `website/src/components/PageAmbient.astro:1-46` | 两套 Canvas 通过 rAF 持续重绘，只在首次读取 reduced-motion；没有显式响应页面隐藏或偏好运行时变化。 | 页面隐藏时取消帧；恢复时重绘；监听 motion preference change；静态模式只绘制一帧。 |
| 6 | LOW | Cohesion / Tokens | `website/src/styles/global.css` | `.18s/.2s/.25s/.3s/.5s` 与多种内建 easing 分散手写，难以维持全站节奏。 | 增加共享时长和曲线 Token，高频 UI 收敛到 160/200/280ms。 |

## 未采用的新增动效机会

本轮不新增 Stagger、页面转场或弹簧动画。站点已有足够动效，当前收益最高的是删除重复状态、降低高频运动并改善可访问性和性能。

## 选定实施顺序

1. 共享 Token 与 Hover/高频运动收敛。
2. Dock 单一状态源。
3. reduced-motion 与 TOC。
4. 移动菜单状态和曲线。
5. Canvas 生命周期。
