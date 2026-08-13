# 最终动效审查 - 2026-08-13

审查范围：相对 `5855487` 的 UI 动效与交互 Diff。审查标准来自项目级 `review-animations` Skill，并受项目 `AGENTS.md` 与 `docs/UI_DESIGN_SYSTEM.md` 约束。

## Findings table

| Before | After | Why |
|---|---|---|
| Dock 由 `:hover`、`.is-hovered` 和 JS `style.transform` 三套状态驱动 | 删除 Hover JS 和 `.is-hovered`，仅保留 CSS 精细指针 Hover 与即时键盘 Focus | 单一状态源可中断、可预测，不再出现内联样式覆盖 CSS |
| 卡片、按钮、TOC、Dock 等位移 Hover 对所有指针环境生效 | 所有 Hover 状态集中到 `(hover: hover) and (pointer: fine)` | 避免触屏粘滞 Hover，保留鼠标/触控板的轻量反馈 |
| Dock `translateY(-8px) scale(1.15)`、图标 `scale(1.32)` | Dock `translateY(-4px) scale(1.04)`、图标 `scale(1.08)` | 高频导航应克制，降低视觉跳动和遮挡感 |
| 非交互 Skill 标签与项目封面装饰在 Hover 时移动 | 删除两类无功能目的的 Hover 动画 | 装饰运动不应暗示可点击性，减少无收益动效 |
| 全局 `.01ms` 清空所有 reduced-motion 反馈 | 组件级停用空间运动，保留颜色、背景和边框反馈 | Reduced motion 是减少运动，不是删除所有状态信息 |
| TOC 始终 smooth scroll，键盘触发展开图标也动画 | reduced-motion 与键盘触发使用即时行为，鼠标正常模式保留 smooth | 键盘高频操作不应等待动画 |
| 移动菜单 `.3s ease` 且缺少状态语义 | 280ms `--ease-drawer`，补充 aria、inert、Escape、焦点恢复和键盘即时切换 | 保持空间一致性，同时让输入与可访问状态同步 |
| Canvas 只在初始化读取 motion preference，页面隐藏仍可能持续 rAF | 响应偏好变化，`pagehide`/隐藏时停止，`pageshow`/显示时恢复 | 避免后台重绘，并兼容 BFCache 返回 |
| 分散的 `.18s/.2s/.25s/.3s` 和内建 easing | 引入 160/200/280ms 与 `--ease-out`/`--ease-in-out`/`--ease-drawer` | 全站节奏一致，后续维护不再产生平行动效系统 |

## Verdict

### Missed simplifications resolved

- 删除 Skill Pills 与项目封面装饰 Hover。
- 减弱 Dock、卡片和实习卡片的高频位移。
- 未新增 Stagger、页面转场、弹簧或动画依赖。

### Performance

- 交互动效只改变 `transform`、`opacity`、颜色、背景、边框和阴影；没有新增布局属性动画。
- Canvas 在 reduced-motion 和页面隐藏状态停止连续 rAF；BFCache 返回后恢复。

### Interruptibility and timing

- 所有快速交互使用 CSS transition，不使用快速触发的 keyframes。
- Tooltip 125ms、按钮反馈 160ms、普通 UI 200ms、移动菜单 280ms，均在对应预算内。
- 500ms Reveal 仅用于低频个人站叙事表面，属于允许的 marketing/explanatory motion。

### Origin, physicality and cohesion

- Tooltip 使用 `transform-origin: center bottom`，与下方 Dock 触发器保持空间关系。
- 没有 `scale(0)`，没有新视觉体系，桌面与移动截图均保持原有浅色个人站语言。

### Accessibility

- Hover 位移动效全部限制为精细指针。
- reduced-motion 停止空间位移和循环动画，但保留有意义的颜色状态。
- 移动菜单 aria、inert、Escape、焦点恢复通过浏览器行为验证。
- TOC 在 reduced-motion 和键盘触发时即时定位。

**Decision: APPROVE** — 没有 feel-breaking regression，没有应删除但仍保留的明显高频运动，没有非 GPU 空间动画，输入方式和 reduced-motion 边界已覆盖。
