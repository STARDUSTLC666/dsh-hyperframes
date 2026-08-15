[中文](README.md)

# dsh-hyperframes

[![Awesome DSH Plugin](https://awesome-dsh-plugin.com/badge.svg)](https://awesome-dsh-plugin.com)

DSH (DeepSeek Harness) video-creation skill plugin: installing it registers the five official HyperFrames by HeyGen skills into DSH (video from HTML: compositions, GSAP animation, captions, voiceovers, audio-reactive visuals, website-to-video).

## Installation

```bash
dsh plugin --profile web add dsh-hyperframes
```

After restarting, say "turn this website into a HyperFrames video" to trigger it.

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

