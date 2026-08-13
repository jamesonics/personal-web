# 002 - 将 Dock 收敛为单一状态源

- **Status**: DONE
- **Commit**: 5855487
- **Severity**: HIGH
- **Category**: Cohesion / Interruptibility
- **Estimated scope**: 2 files

## Problem

`website/public/scripts/site.js:31-42` 在 Pointer/Focus 时写入内联 transform，同时 `global.css` 用 `:hover`、`:focus-visible`、`.is-hovered` 再次设置 transform。内联样式覆盖样式表，造成状态和值不同步。

## Target

- 删除 Dock Hover/Focus JavaScript。
- 删除 `.is-hovered` 规则。
- 鼠标 Hover 由精细指针媒体查询控制，Dock 项目最大 `translateY(-4px) scale(1.04)`，图标 `scale(1.08)`。
- Tooltip 使用 125-160ms `--ease-out`。
- 键盘 `:focus-visible` 不做位置动画，立即显示 Tooltip 和清晰 Outline。

## Repo conventions to follow

保留现有 `Dock.astro` DOM 和全局 Dock；不得新增第二套导航或 Tooltip 组件。

## Steps

1. 从 `site.js` 删除 Hover/Focus 事件循环。
2. 清理已废弃的伪元素 Tooltip 和 `.is-hovered` CSS。
3. 分离鼠标 Hover 与键盘 Focus 行为。
4. 保留滚动隐藏，但改用共享 Token。

## Boundaries

- 不改变 Dock 链接、图标、尺寸和页面可见规则。
- 不改变移动端隐藏行为。

## Verification

- Dock 链接不再产生 `style="transform: ..."`。
- 鼠标 Hover、键盘 Tab、滚动隐藏分别正常。
- Tooltip 不被裁切且不覆盖 Dock 点击区域。
