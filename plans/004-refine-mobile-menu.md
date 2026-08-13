# 004 - 改善移动菜单曲线与状态语义

- **Status**: DONE
- **Commit**: 5855487
- **Severity**: MEDIUM
- **Category**: Easing / Accessibility / State
- **Estimated scope**: 3 files

## Problem

移动菜单使用 `transform .3s ease`，没有暴露 `aria-expanded`/`aria-hidden`，关闭后内容仍可被程序化聚焦；不支持 Escape，也不恢复焦点。

## Target

- 菜单 transition 使用 `280ms var(--ease-drawer)`。
- Toggle 增加 `aria-controls` 和 `aria-expanded`。
- Menu 有稳定 ID、`aria-hidden`，关闭时 `inert`。
- Escape 关闭，关闭后焦点回到打开按钮。
- 页面链接点击仍关闭菜单。

## Boundaries

- 不改变 Header 布局、菜单内容或移动断点。
- 不增加焦点陷阱依赖；菜单为全屏且关闭时 inert。

## Verification

- 390px：按钮打开/关闭、Escape、链接关闭都正常。
- aria 属性和 inert 与视觉状态同步。
- reduced-motion 下立即切换。
