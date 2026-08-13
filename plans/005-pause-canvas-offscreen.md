# 005 - 暂停隐藏页面中的 Canvas 动画

- **Status**: DONE
- **Commit**: 5855487
- **Severity**: MEDIUM
- **Category**: Performance / Accessibility
- **Estimated scope**: 2 files

## Problem

`DotCanvas.astro` 和 `PageAmbient.astro` 只在初始化读取 reduced-motion，并持续调度 rAF；没有显式处理 `document.hidden` 和偏好变化。

## Target

两组件使用同一生命周期模式：

1. `visibilitychange` 时隐藏则取消帧，显示则重绘并按需继续。
2. `MediaQueryList change` 时更新 reduced 状态并重启；reduce 模式只绘一帧静态背景。
3. resize 后重新设置画布并重绘。
4. pagehide 清理 rAF 和监听器。

## Boundaries

- 不改变点阵密度、颜色、位置、振幅和页面视觉主题。
- 不抽取新运行时依赖。

## Verification

- 正常模式下 Canvas 继续运动。
- `document.hidden` 时无新 rAF；恢复后继续。
- reduced-motion 下只绘制静态帧。
