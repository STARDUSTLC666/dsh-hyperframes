[中文](README.md)

![npm](https://img.shields.io/npm/v/dsh-hyperframes) ![downloads](https://img.shields.io/npm/dm/dsh-hyperframes) ![license](https://img.shields.io/github/license/STARDUSTLC666/dsh-hyperframes) ![stars](https://img.shields.io/github/stars/STARDUSTLC666/dsh-hyperframes?style=social)

# dsh-hyperframes

[![Awesome DSH Plugin](https://awesome-dsh-plugin.com/badge.svg)](https://awesome-dsh-plugin.com)

DSH (DeepSeek Harness) video-creation skill plugin: installing it registers the twenty official HyperFrames by HeyGen skills into DSH (video from HTML: core workflow, animation, audio, captions, keyframes, creative templates, CLI, registry, website-to-video; synced with official v0.8.20).

## Compatibility

Aligned with the skill registration contract of `@deepseek-ai/dsh@0.1.3-alpha.1` (2026-09-05). Built for the cordis patch-bundle plugin model (`cordis.patch.yml` + `dsh.bundle.patch`). No runtime imports of `@deepseek-ai/*` internals.

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


## Health checks and reloads

`hyperframes_health` rereads every `SKILL.md`, verifies readable files, valid YAML frontmatter, names matching their directories, and nonempty descriptions/bodies, then queries the host's `skills.get`. The effective name, description, body and resource directory must match this plugin instance's loaded snapshot. Existing files alone do not prove successful or still-active registration.

Health checks do not mutate files or registrations. After changing a file or repairing one that failed initial loading, reload the plugin (or restart DSH). The result reports `changed`, `not_registered` or `registration_failed` until then. A previously loaded file that was temporarily missing becomes healthy again if its exact original content is restored and its registration remains active.

Each item retains `name / ok / detail` and adds `code / fileOk / registered / registryChecked / reloadRequired`. `registered` means the registry still matches the loaded version, so a changed file can have `registered: true` and `ok: false`. Missing or failed registry lookup produces `registry_unavailable`; a disposed plugin produces `disposed`. The public `checkBundledSkills()` is disk-only, while the original non-throwing `parseSkillFile()` helper remains available.

## Development and shared implementation

`src/index.ts` declares only package identity, skill names and the resource directory. Parsing, validation, registration and health logic live in `src/skill-bundle.ts`. The canonical source is in `dsh-hyperframes`; Remotion carries an identical version-controlled copy. Each package builds and ships its own `lib/skill-bundle.js`, with no cross-package runtime dependency and no sibling checkout required for building or installation.

With dependencies already installed:

```bash
node node_modules/typescript/bin/tsc -p tsconfig.json
node --test "test/*.test.mjs"
```

When developing the sibling repositories together, edit the shared module and regression tests in HyperFrames, then synchronize:

```bash
# Run in dsh-hyperframes; updates only three shared files in sibling dsh-remotion
node scripts/sync-skill-bundle.mjs
node scripts/sync-skill-bundle.mjs --check
```

Both suites compare shared source and regression tests to prevent drift. A standalone checkout skips only that cross-repository comparison. Tests cover invalid YAML, unreadable files, empty bodies, rejected/inactive registrations, file changes and repairs, disposal races and cleanup failures, without invoking video or speech services.

## License

MIT for the porting arrangement; skill content copyright remains with HeyGen.
