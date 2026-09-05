[English](README.en.md)

# dsh-hyperframes

> **在 20+ 个 agent 里写视频**：HyperFrames by HeyGen 官方 20 技能，HTML 即视频。

![npm version](https://img.shields.io/npm/v/dsh-hyperframes?label=npm&color=blue) ![npm downloads](https://img.shields.io/npm/dm/dsh-hyperframes) ![license](https://img.shields.io/npm/l/dsh-hyperframes) ![stars](https://img.shields.io/github/stars/STARDUSTLC666/dsh-hyperframes?style=social)

[![Awesome DSH Plugin](https://awesome-dsh-plugin.com/badge.svg)](https://awesome-dsh-plugin.com)


DSH（DeepSeek Harness）视频创作技能插件：**安装即把 HyperFrames by HeyGen 官方 20 个技能注册进 DSH**（HTML 写视频：核心工作流、动画、音频、字幕、关键帧、创意模板、CLI、注册表、网站转视频等，同步官方 v0.8.20）。

## 兼容性

对齐 `@deepseek-ai/dsh@0.1.3-alpha.1` 的技能注册契约（2026-09-05）。遵循 cordis 组合包补丁模型（`cordis.patch.yml` + `dsh.bundle.patch`），运行时不 import 任何 `@deepseek-ai/*` 内部模块。

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


## 技能自检与重载

运行 `hyperframes_health` 会重新读取每个 `SKILL.md`，验证文件可读、YAML frontmatter 合法、名称与目录一致、描述与正文非空，再通过宿主 `skills.get` 确认实际生效的名称、描述、正文和资源目录与本次加载内容相符。文件存在但未注册、注册失败或后来被移除时，自检都会失败。

自检不修改文件或注册表。修改技能文件，或修复加载时损坏的技能后，应重载插件（也可重启 DSH）。它会报告 `changed`、`not_registered` 或 `registration_failed`，不会把磁盘修复直接当成运行时修复。若原先已成功加载，只是文件暂时丢失，恢复与加载时完全相同的内容即可重新通过检查。

每项结果保留 `name / ok / detail`，并增加 `code / fileOk / registered / registryChecked / reloadRequired`：`registered` 表示注册表仍匹配加载时的版本，因此文件变更时它可以为 true 而 `ok` 为 false。缺少或无法查询宿主注册表时返回 `registry_unavailable`；插件卸载后返回 `disposed`。`checkBundledSkills()` 仅检查磁盘文件，不推断运行时状态；原有不抛错的 `parseSkillFile()` 解析入口保持可用。

## 开发与共享实现

`src/index.ts` 只声明包名、技能清单和目录，解析、校验、注册与自检集中在包内 `src/skill-bundle.ts`。规范源位于 `dsh-hyperframes/src/skill-bundle.ts`，Remotion 保存相同的受版本控制副本；两包都编译并分发自己的 `lib/skill-bundle.js`，没有跨包运行时依赖，也不需要另一个仓库即可构建或安装。

依赖预先安装后，可直接离线构建和测试：

```bash
node node_modules/typescript/bin/tsc -p tsconfig.json
node --test "test/*.test.mjs"
```

两个仓库并列开发时，在 HyperFrames 修改公共模块与公共回归测试，再同步：

```bash
# 在 dsh-hyperframes 中执行；只更新相邻 dsh-remotion 的三个公共文件
node scripts/sync-skill-bundle.mjs
node scripts/sync-skill-bundle.mjs --check
```

两包测试都会检查公共源码与回归测试是否一致，防止副本漂移；单独检出时只跳过跨仓库比对，其余测试正常运行。测试覆盖损坏 YAML、不可读文件、空正文、注册异常/失效、内容变更与修复、卸载及清理异常，全程不调用视频或语音服务。

## License

MIT（移植编排）；技能内容版权归 HeyGen。
