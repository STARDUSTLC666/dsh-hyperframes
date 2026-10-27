# dsh-hyperframes usage guide

[Overview](../README.en.md) · [Changelog](../CHANGELOG.md) · [Validation](VALIDATION.md)

## Current improvements

Save, choose Archive this project and confirm. Restore from Archived projects. Resolve unsaved edits and stop preview/render jobs first. Archives retain files and disk usage; they free active list slots rather than disk space.

## Installation

```bash
dsh plugin --profile web add dsh-hyperframes
```

After restarting, say "turn this website into a HyperFrames video" to trigger it.

### Marketplace error `spawn … ENOENT`

The `spawn … DSH Desktop.exe ENOENT` reported in [#2](https://github.com/STARDUSTLC666/dsh-hyperframes/issues/2) occurs while the installer launches the host CLI. A missing executable and a missing child working directory can both produce this error; that line alone does not distinguish them.

Hub 1.6.5 uses the target profile directory as the working directory even when it does not exist. [Hub 1.6.12](https://github.com/dshplugin/dsh-plugin-hub/blob/v1.6.12/src/server/services/install/task-queue.ts) adds a directory fallback and a separate host launch failure hint. See the matching upstream report, [Hub #212](https://github.com/dshplugin/dsh-plugin-hub/issues/212).

1. Fully exit DSH, including the tray application, then launch it from its actual installation location. Repair or reinstall Desktop if it was moved or executable files are missing after an update; retain your existing user data.
2. Update Plugin Hub to **1.6.12 or newer**, preferably through the Plugins panel. Alternatively, run the following in DSH's built-in terminal. This example preserves the `web` profile from #2; manage a `desktop` profile through Desktop's own terminal or Plugins panel.

   ```bash
   dsh plugin --profile web add dsh-plugin@latest
   dsh plugin --profile web add dsh-hyperframes
   ```

3. Restart DSH and check Settings → HyperFrames. Use the same `DSH_HOME`; a regular terminal's default `~/.dsh` may differ from Desktop's user directory. Compare it with `DSH Home` in the Hub report.

The published npm package is **`dsh-hyperframes`**; `@stardustlc/dsh-hyperframes` is not published. Installing through `dsh plugin` also registers the plugin bundle, which a plain `pnpm add` does not replace. If it still fails, include the current Hub version, full `hub.log` and the command actually executed.

## Uninstall

```bash
dsh plugin --profile web remove dsh-hyperframes
```

Then restart the web service. To clean up fully, also remove the plugin entry from your profile `cordis.patch.yml` if you overrode it.

## Video workbench

Open Settings → HyperFrames in DSH Web or Desktop.

1. Create a video. Select title card, product card or slideshow; set the title/body, canvas and an integer duration of 3–30 seconds, then save.
2. Upload local copies of PNG/JPEG images, one MP3/WAV background audio and one muted MP4 background video. Limits: 20 MB per asset, 40 MB total. Slideshows follow upload order and need at least two seconds per image.
3. Explicitly prepare the environment on first use. It downloads official CLI 0.8.207; Windows uses its managed rendering browser, while other platforms reuse installed Chrome when available. Project editing remains available. FFmpeg must be installed and in PATH; restart DSH after changing PATH.
4. Start official Studio and inspect the picture. Stop this preview before editing or exporting. No window is opened automatically.
5. Export, play and download MP4. Later edits preserve earlier MP4s and display a revision warning. Export again for a new final output.

The editable ZIP includes source, data and media. Extract it, run npm install, then npm run preview / render as explained by its README. Original template code is MIT; engines retain their own licenses. ZIP import is not yet available in settings.

Projects and caches stay in DSH_HOME/data/dsh-hyperframes; Web and Desktop profiles sharing the same DSH_HOME share saved projects; original assets and existing user projects are untouched. Closing settings preserves staged input within this page. Saved projects survive restart, but active jobs stop with DSH. Jobs can be cancelled. Tools: hyperframes_project (list/create/get/update), hyperframes_render (prepare/preview/render/job/cancel). Updates and rendering require id/revision; job/cancel require job id.

The workbench supports template edits rather than a full timeline, transcription, TTS or cloud rendering. Default: 24 FPS and 200 MB maximum MP4. Official preview listens on 127.0.0.1 only; other users on the same machine may still reach this local service.

## Skills

| Skill | Purpose |
| :-- | :-- |
| `hyperframes` | Router: HTML video compositions (styles/palettes/captions/audio-reactive/transitions) |
| `hyperframes-core` | Core concepts and component model |
| `hyperframes-animation` | Animation: GSAP/Anime.js/Lottie/Three.js/WAAPI adapters |
| `hyperframes-audio` | Audio: voiceovers, audio-reactive visuals |
| `hyperframes-keyframes` | Keyframe animation |
| `hyperframes-creative` | Creative templates and styles |
| `hyperframes-cli` | `npx hyperframes` CLI (init/check/preview/render/timeline/publish/cloud/transcribe/tts/doctor, ...) |
| `hyperframes-registry` | `hyperframes add` registry block installation and wiring |
| `hyperframes-studio` | Studio timeline conventions: track layering, caption track, safe zones |
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

Node.js 22.19+ (22.x) / 24+ + FFmpeg (`npx hyperframes`).

## Porting notes

Synced from official HyperFrames 0.8.207 release commit `619b8bc4d7fee406246529a8e214e60424807eda` (2026-10-27). All seven current official skills retain their upstream files. Fourteen previous names remain as compatibility entries that load current workflows. The upstream plugin launcher pins the CLI and blocks standalone skill replacement. Source hashes and the Apache-2.0 license are recorded under `skills/UPSTREAM.json` and `skills/UPSTREAM-LICENSE.txt`.

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
