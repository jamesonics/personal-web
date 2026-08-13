# 003 - 组件级处理 reduced motion

- **Status**: DONE
- **Commit**: 5855487
- **Severity**: MEDIUM
- **Category**: Accessibility
- **Estimated scope**: 2 files

## Problem

`global.css:208` 使用全局通配符禁用动画并把所有 transition 设为 `.01ms`，连颜色、边框和可见性反馈也消失。`ArticleTOC.astro` 点击目录始终使用平滑滚动。

## Target

- reduced-motion 下保留颜色、背景、边框、opacity 等有意义反馈。
- `.reveal` 直接可见且不位移。
- Blob/Ambient/Radar 循环动画停止。
- 移动菜单和 Dock 等位置状态瞬时切换。
- TOC 使用 `matchMedia('(prefers-reduced-motion: reduce)')`，降低为 `behavior: 'instant'`。

## Boundaries

- 不改变 TOC 锚点、URL hash 和移动端双 rAF 定位顺序。
- 不移除正常模式下的平滑滚动。

## Verification

- Playwright `reducedMotion: 'reduce'` 下页面内容可见、无空间动画、TOC 定位成功。
- 正常模式仍保留颜色和状态反馈。
