# dsh-hyperframes usage guide

[Overview](../README.en.md) · [Changelog](../CHANGELOG.md) · [Validation](VALIDATION.md)

## Current improvements

v0.14.0 introduces the **OP-DSH Multi-Track Hardware Director Console** (enabled by default with a 1-click toggle back to classic **Form** mode), featuring a recessed stage monitor, 24-LED render matrix, scrubbable 3-track timeline, 13 bright themes, 8 bilingual font pairings, a 5-step guided tour, and all 23 official HyperFrames `0.9.77` skills (including `reverse-any-video` and `style-sampling`). Project archiving and restoration remain supported from **Archived projects** (archives retain files and disk usage and free active list slots; resolve unsaved edits and stop active jobs first).

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

Open **HyperFrames** from the sidebar (or Settings → HyperFrames) in DSH Web or Desktop. The editor opens in the **OP-DSH Multi-Track Hardware Director Console** by default (with a 1-click toggle to classic **Form** mode), 13 bright themes, 8 font pairings, and a header **? Tour** coachmark guide:

1. **Direct & scrub in the console**: Click **New video** or open a project. Use the tactile right strip to edit the title, press `16:9 / 9:16 / 1:1` mechanical keys, pick a template, set a 3–30s duration, and expand **Script**; press the vermilion `▶ Play` key or drag across the Video / Caption / Pace tracks and 24-LED Render Matrix to scrub live frames and `TC` timecode in the recessed stage monitor, then save.
2. Upload local copies of PNG/JPEG/WebP images, one MP3/WAV/M4A background audio and one muted MP4 background video. Limits: 20 MB per asset, 40 MB total. Slideshows follow upload order and need at least two seconds per image.
3. Explicitly prepare the environment on first use. It downloads official CLI 0.9.77; Windows uses its managed rendering browser, while other platforms reuse installed Chrome when available. Project editing remains available. FFmpeg must be installed and in PATH; restart DSH after changing PATH.
4. Start official Studio and inspect the picture. Stop this preview before editing or exporting. No window is opened automatically.
5. Review the pre-export check (title, canvas and duration, media count, saved revision, renderer, which revision the last MP4 used), then switch the monitor to **MP4** to play and download the output in the workbench. Later edits preserve earlier MP4s and display a revision warning. Export again for a new final output.

Preview and export jobs show their current step (for example "Step 3 / 4 · Rendering MP4"), a collapsible job log and a cancel button. A failed job keeps the project and offers "Retry this task" without re-entering input. A project changed elsewhere is never overwritten silently: the banner offers "Reload the latest version (discard my input)" or "Keep my input for now", and the unsaved-changes dialog blocks "Save and continue" so the same conflict cannot repeat. When Save or Export is unavailable, hover the button to read the exact reason (unsaved changes, renderer not prepared, title or duration out of range).

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
| `reverse-any-video` | Reverse and rebuild any video frame by frame as an editable HyperFrames project |
| `slideshow` | Slideshow videos |
| `style-sampling` | Make a new episode in a proven video style template |
| `talking-head-recut` | Talking-head recuts |

## Requirements

Node.js 22.19+ (22.x) / 24+ + FFmpeg (`npx hyperframes`).

## Porting notes

Official HyperFrames 0.9.77 is pinned: 239 verified npm dist/skills files plus six on-demand skills from the same v0.9.77 Git tag a86ad213ed2aa78555635676980744d432a3f89f. Nine canonical skills and fourteen compatibility entries register 23 names, including reverse-any-video and style-sampling. skills/UPSTREAM.json records each npm/Git origin and DSH adaptation; missing npm gitHead fields and build-time rewrites are not represented as exact Git-tree identity. See [skill synchronization](SKILL-SYNC.md).

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
# Run in dsh-hyperframes; updates the explicit shared-file list in sibling dsh-remotion
node scripts/sync-skill-bundle.mjs
node scripts/sync-skill-bundle.mjs --check
```

Both suites compare shared source and regression tests to prevent drift. A standalone checkout skips only that cross-repository comparison. Tests cover invalid YAML, unreadable files, empty bodies, rejected/inactive registrations, file changes and repairs, disposal races and cleanup failures, without invoking video or speech services.

## License

MIT for the porting arrangement; skill content copyright remains with HeyGen.
