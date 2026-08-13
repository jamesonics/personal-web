# Animation improvement plans

基线：`5855487`。所有计划受根目录 `AGENTS.md` 与 `docs/UI_DESIGN_SYSTEM.md` 约束。

| # | Plan | Severity | Status | Depends on |
|---|---|---|---|---|
| 001 | 统一动效节奏并限制 Hover 位移 | HIGH | DONE | - |
| 002 | 将 Dock 收敛为单一状态源 | HIGH | DONE | 001 |
| 003 | 组件级处理 reduced motion | MEDIUM | DONE | 001 |
| 004 | 改善移动菜单曲线与状态语义 | MEDIUM | DONE | 001, 003 |
| 005 | 暂停隐藏页面中的 Canvas 动画 | MEDIUM | DONE | 003 |

推荐按编号执行。完成后使用 `review-animations` 审查最终 Diff，再执行 Astro check/build 与 1440px/390px 浏览器验证。
