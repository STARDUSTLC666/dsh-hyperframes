[中文](README.md)

![npm](https://img.shields.io/npm/v/dsh-hyperframes) ![downloads](https://img.shields.io/npm/dm/dsh-hyperframes) ![license](https://img.shields.io/github/license/STARDUSTLC666/dsh-hyperframes) ![stars](https://img.shields.io/github/stars/STARDUSTLC666/dsh-hyperframes?style=social)

# dsh-hyperframes

[![Awesome DSH Plugin](https://awesome-dsh-plugin.com/badge.svg)](https://awesome-dsh-plugin.com)

DSH (DeepSeek Harness) video-creation skill plugin: installing it registers the twenty official HyperFrames by HeyGen skills into DSH (video from HTML: core workflow, animation, audio, captions, keyframes, creative templates, CLI, registry, website-to-video; synced with official v0.8.20).

## Compatibility

Verified against `@deepseek-ai/dsh@0.1.2-alpha.2` on 2026-08-31. Built for the cordis patch-bundle plugin model (`cordis.patch.yml` + `dsh.bundle.patch`). No runtime imports of `@deepseek-ai/*` internals.

## Installation

```bash
dsh plugin --profile web add dsh-hyperframes
```

After restarting, say "turn this website into a HyperFrames video" to trigger it.

## Uninstall

```bash
dsh plugin --profile web remove dsh-hyperframes
```

Then restart the web service. To clean up fully, also remove the plugin entry from your profile `cordis.patch.yml` if you overrode it.


## Skills

| Skill | Purpose |
| :-- | :-- |
| `hyperframes` | Router: HTML video compositions (styles/palettes/captions/audio-reactive/transitions) |
| `hyperframes-core` | Core concepts and component model |
| `hyperframes-animation` | Animation: GSAP/Anime.js/Lottie/Three.js/WAAPI adapters |
| `hyperframes-audio` | Audio: voiceovers, audio-reactive visuals |
| `hyperframes-keyframes` | Keyframe animation |
| `hyperframes-creative` | Creative templates and styles |
| `hyperframes-cli` | `npx hyperframes` CLI (init/lint/inspect/preview/render/transcribe/tts/doctor) |
| `hyperframes-registry` | `hyperframes add` registry block installation and wiring |
| `embedded-captions` | Embedded captions |
| `faceless-explainer` | Faceless explainer videos |
| `figma` | Figma asset integration |
| `general-video` | General video production |
| `media-use` | Media usage guidelines |
| `motion-graphics` | Motion graphics |
| `music-to-video` | Music-driven video |
| `pr-to-video` | PR-to-video |
| `product-launch-video` | Product launch videos |
| `remotion-to-hyperframes` | Remotion project migration |
| `slideshow` | Slideshow videos |
| `talking-head-recut` | Talking-head recuts |

## Requirements

Node.js ≥ 22 + FFmpeg (`npx hyperframes`).

## Porting notes

Ported from the official OpenAI Codex HyperFrames by HeyGen plugin cache: frontmatter converted to the DSH format, Codex-only `agents/` stripped, and all internal references verified.

## Multi-harness

Skills use the open Agent Skills (SKILL.md) format — **not just DSH**. Copy the directories under `skills/` into another agent's skills directory:

| Agent | Skills directory |
| :-- | :-- |
| Claude Code | `~/.claude/skills/` |
| Cursor | `.cursor/skills/` (or project-local `skills/`) |
| Gemini CLI | `~/.gemini/skills/` |
| OpenAI Codex | `~/.codex/skills/` |

Port once, use everywhere.


## License

MIT for the porting arrangement; skill content copyright remains with HeyGen.
