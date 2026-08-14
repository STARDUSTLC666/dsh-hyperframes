[English](README.en.md)

`# dsh-hyperframes

![npm version](https://img.shields.io/npm/v/dsh-hyperframes?label=npm&color=blue) ![npm downloads](https://img.shields.io/npm/dm/dsh-hyperframes) ![license](https://img.shields.io/npm/l/dsh-hyperframes) ![stars](https://img.shields.io/github/stars/STARDUSTLC666/dsh-hyperframes?style=social)


DSH（DeepSeek Harness）视频创作技能插件：**安装即把 HyperFrames by HeyGen 官方移植技能五件套注册进 DSH**（HTML 写视频：合成、GSAP 动画、字幕、配音、音频响应、网址转视频）。

## 安装

```bash
dsh plugin --profile web add dsh-hyperframes
```

重启后说「把这个网址做成 HyperFrames 视频」即可触发。

## 技能清单

| 技能 | 用途 |
| :-- | :-- |
| `hyperframes` | HTML 视频合成：视觉风格/调色板/字幕/音频响应/转场 |
| `hyperframes-cli` | `npx hyperframes` 命令行（init/lint/inspect/preview/render/transcribe/tts/doctor）|
| `hyperframes-registry` | `hyperframes add` 注册表组件安装与接线 |
| `website-to-hyperframes` | 网址转视频七步流水线 |
| `gsap` | GSAP 动画 API 参考（tween/timeline/缓动/性能）|

## 依赖

Node.js ≥ 22 + FFmpeg（`npx hyperframes`）。

## 移植说明

技能移植自 OpenAI Codex 官方 HyperFrames by HeyGen 插件缓存：frontmatter 已转换为 DSH 格式，codex 专属 `agents/` 已剔除，全部内部引用校验。

## License

MIT（移植编排）；技能内容版权归 HeyGen。

