[English](README.en.md)

# dsh-hyperframes

> **在 20+ 个 agent 里写视频**：HyperFrames by HeyGen 官方 20 技能，HTML 即视频。

![npm version](https://img.shields.io/npm/v/dsh-hyperframes?label=npm&color=blue) ![npm downloads](https://img.shields.io/npm/dm/dsh-hyperframes) ![license](https://img.shields.io/npm/l/dsh-hyperframes) ![stars](https://img.shields.io/github/stars/STARDUSTLC666/dsh-hyperframes?style=social)

[![Awesome DSH Plugin](https://awesome-dsh-plugin.com/badge.svg)](https://awesome-dsh-plugin.com)


DSH（DeepSeek Harness）视频创作技能插件：**安装即把 HyperFrames by HeyGen 官方 20 个技能注册进 DSH**（HTML 写视频：核心工作流、动画、音频、字幕、关键帧、创意模板、CLI、注册表、网站转视频等，同步官方 v0.8.20）。

## 兼容性

在 `@deepseek-ai/dsh@0.1.2-alpha.2` 上验证（2026-08-31）。遵循 cordis 组合包补丁模型（`cordis.patch.yml` + `dsh.bundle.patch`），运行时不 import 任何 `@deepseek-ai/*` 内部模块。

## 安装

```bash
dsh plugin --profile web add dsh-hyperframes
```

重启后说「把这个网址做成 HyperFrames 视频」即可触发。

## 卸载

```bash
dsh plugin --profile web remove dsh-hyperframes
```

卸载后重启 Web 服务。如需彻底清理，可再手动删除自己 profile `cordis.patch.yml` 中覆盖的插件行。


## 技能清单

| 技能 | 用途 |
| :-- | :-- |
| `hyperframes` | 总纲：HTML 视频合成（视觉风格/调色板/字幕/音频响应/转场）|
| `hyperframes-core` | 核心概念与组件模型 |
| `hyperframes-animation` | 动画：GSAP/Anime.js/Lottie/Three.js/WAAPI 适配 |
| `hyperframes-audio` | 音频：配音、音频响应视觉 |
| `hyperframes-keyframes` | 关键帧动画 |
| `hyperframes-creative` | 创意模板与风格 |
| `hyperframes-cli` | `npx hyperframes` 命令行（init/lint/inspect/preview/render/transcribe/tts/doctor）|
| `hyperframes-registry` | `hyperframes add` 注册表组件安装与接线 |
| `embedded-captions` | 内嵌字幕 |
| `faceless-explainer` | 无脸讲解视频 |
| `figma` | Figma 素材接入 |
| `general-video` | 通用视频制作 |
| `media-use` | 媒体素材使用规范 |
| `motion-graphics` | 动态图形 |
| `music-to-video` | 音乐驱动视频 |
| `pr-to-video` | PR 转视频 |
| `product-launch-video` | 产品发布视频 |
| `remotion-to-hyperframes` | Remotion 项目迁移 |
| `slideshow` | 幻灯片视频 |
| `talking-head-recut` | 口播重剪 |

## 依赖

Node.js ≥ 22 + FFmpeg（`npx hyperframes`）。

## 移植说明

技能同步自官方仓库 `heygen-com/hyperframes` v0.8.20（2026-08-31）：官方 codex 插件打包的完整 `skills/` 目录；旧版五件套中的 `gsap`、`website-to-hyperframes` 已被上游合并进新技能体系。

## 跨平台使用

技能采用开放的 Agent Skills（SKILL.md）格式，**不止 DSH 能用**——把 `skills/` 下的目录复制到其他 agent 的技能目录即可：

| Agent | 技能目录 |
| :-- | :-- |
| Claude Code | `~/.claude/skills/` |
| Cursor | `.cursor/skills/`（或项目内 `skills/`）|
| Gemini CLI | `~/.gemini/skills/` |
| OpenAI Codex | `~/.codex/skills/` |

一次移植，处处可用。


## License

MIT（移植编排）；技能内容版权归 HeyGen。
