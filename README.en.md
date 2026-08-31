[中文](README.md)

![npm](https://img.shields.io/npm/v/dsh-hyperframes) ![downloads](https://img.shields.io/npm/dm/dsh-hyperframes) ![license](https://img.shields.io/github/license/STARDUSTLC666/dsh-hyperframes) ![stars](https://img.shields.io/github/stars/STARDUSTLC666/dsh-hyperframes?style=social)

# dsh-hyperframes

[![Awesome DSH Plugin](https://awesome-dsh-plugin.com/badge.svg)](https://awesome-dsh-plugin.com)

DSH (DeepSeek Harness) video-creation skill plugin: installing it registers the five official HyperFrames by HeyGen skills into DSH (video from HTML: compositions, GSAP animation, captions, voiceovers, audio-reactive visuals, website-to-video).

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
| `hyperframes` | HTML video compositions: visual styles/palettes/captions/audio-reactive/transitions |
| `hyperframes-cli` | `npx hyperframes` CLI (init/lint/inspect/preview/render/transcribe/tts/doctor) |
| `hyperframes-registry` | `hyperframes add` registry block installation and wiring |
| `website-to-hyperframes` | Seven-step website-to-video pipeline |
| `gsap` | GSAP animation API reference (tweens/timelines/easing/performance) |

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
