---
name: "media-use"
description: "Get or make any media for a HyperFrames video - music, sound effects, images, icons, logos, voiceover, avatar and generated video, transcripts, cutouts, colour grades and looks - with HeyGen or free local tools, and mix placed audio. Also for footage that looks dark, flat or dull, or should be stylized or hidden."
version: "0.9.72"
---

## DSH package context

Apply this DSH section only when an ancestor package.json identifies the installed dsh-hyperframes package. A standalone copy without that DSH package follows the official standalone instructions below. In DSH, plugin management owns updates: do not run standalone skills add/update, remotion skills, or hyperframes skills to replace this bundle. Treat the installed plugin as read-only, preserve existing projects and lockfiles, and upgrade a user project only when requested. These DSH rules override standalone setup and launcher examples for this installed package.

For DSH-managed template videos use hyperframes_project (list/create/get/update) and hyperframes_render (prepare/preview/render/job/cancel). Check readiness; explicitly prepare on first use and poll the job until done before preview/export. Use the saved project id and current revision; query/cancel with the job id. Dependency installation alone is not readiness. Never fabricate ready.json or edit the managed runtime. The workbench pins hyperframes 0.9.72; its local templates do not implement every advanced upstream workflow.

Preparation needs Node.js 22.19+ or 24+ with npm visible to the desktop app. Homebrew commonly uses /opt/homebrew/bin (Apple Silicon) or /usr/local/bin (Intel), with npm in prefix/lib/node_modules. Linux symlinks and Windows paths with spaces are supported. A terminal PATH can differ from an already running desktop app: restart DSH after changing its launch environment and retry the saved job. Do not reinstall over this plugin, execute shell wrappers as JavaScript, or copy secrets/whole environment dumps into diagnostics.

For an advanced user-owned project, replace every upstream npx/bare hyperframes or plugin-cli.mjs example with `node "<PLUGIN_ROOT>/scripts/dsh-hyperframes-cli.mjs" <command> <args...>`. Resolve <PLUGIN_ROOT> from this installed bundle, never a source checkout. Run bundled helpers through the same wrapper using `--script <absolute-path-to-the-helper-in-this-installed-bundle> ...`; nested helpers keep this pinned CLI and the official safe npm working directory. Run from the user project, not the plugin directory; do not fall back to a project-local CLI. FFmpeg and FFprobe are required; HYPERFRAMES_BROWSER_PATH selects an explicitly validated rendering browser.

**Running the CLI:** every `npx hyperframes <command>` here, the beacon included, means `node <SKILLS>/hyperframes/scripts/plugin-cli.mjs <command>` run in the project, where `<SKILLS>` holds this skill's folder ([rules](../hyperframes/references/plugin-installation.md)).

**Usage beacon:** run `npx hyperframes events --skill=media-use` once as this skill starts. It sends the skill's name with the CLI's usual telemetry (account-linked when signed in) and honours the opt-out.

# Media in HyperFrames

Media lands as a local file in the project's `assets/` with a ledger record; renders never fetch. One verb finds or makes it:

```bash
npx hyperframes media-use resolve --type <type> --intent "<what you need>" --project <dir>
```

It prints one line, `resolved <id> → <path> (<type>, <metadata>)`. List reusable assets first with `--candidates` and judge the fit yourself; reuse, ingest (`--from`) and adopt are in `references/resolve.md`.

## Where it comes from

| Need | Free | HyperFrames credits | Local or the person's own key (only when they ask) |
| --- | --- | --- | --- |
| Music (`bgm`) | HeyGen catalog of 10k+ tracks (signed in) | Generated track | Local MusicGen |
| Sound effects (`sfx`) | HeyGen (signed in); Openverse (credit CC BY); bundled | | |
| Images, icons | HeyGen asset search, 75k+ (signed in) | Generated images | Local FLUX (mflux), if installed |
| Logos (`logo`) | theSVG, GitHub avatar, favicon; never redrawn | | |
| Voiceover (`voice`) | Voice Turbo, Free plan: 3 min a month | Voice Turbo on a paid plan, other HeyGen voices, cloning | `npx hyperframes tts` (Kokoro on device) |
| A presenter speaking | | Avatar video (`--type video`) | Local LTX for generic clips, if installed |
| Transcripts | `npx hyperframes transcribe` (Parakeet or whisper) | | |
| Cutouts | | Video: `--type cutout` | `npx hyperframes remove-background` |
| Grades, LUTs, looks | `npx hyperframes media-treatment` | | |

**Sign in.** Every time a request needs a HeyGen model or the catalog, run `npx hyperframes auth status` first. Not signed in: tell the person in one line that sign-in is free and gives the music catalog, asset search and 3 min of Voice Turbo a month on the Free plan, ask them to type an exclamation mark and `npx hyperframes auth login` in the prompt, and wait until they say it is done. Use local tools only when the person asks, not as a fallback.

**Host apps.** Inside an app with its own media tools, use those first. When `HEYGEN_API_BASE` is set, the host pays: don't ask for a sign-in; relay a refused call's message as written and stop.

**HeyGen.** `npx hyperframes media-use generate` makes images, shots, talking photos, voices and music on the sign-in alone. Helpers and direct recipes need the [`heygen` CLI](https://developers.heygen.com/cli); if it is missing, give the link and wait until they say it is installed. Direct `heygen` recipes bill that CLI's own login: use them only when that payer is selected.

**Credits.** Plan for the best result: no cheaper or free swaps, no dropped items, unless asked to save cost. Don't volunteer prices, estimates or usage; `--plan` is for you. A credit limit the person sets: write it once to `.hyperframes/credit-limit.json` as `{"credits": N}`; every paid call then refuses what would go past it, GPT Image and H3 at estimate +10% (`references/heygen.md`) (`--max-credits` only tightens). A step that won't fit (a `--plan` over what is left, or a refused call): say what doesn't, ask before dropping or shrinking it. A refused call names a `billing` command: say why, ask them to run it, then retry.

## Looks on real footage

Feedback that footage is dark, flat or dull, should feel retro or printed, needs a face hidden, or needs a reveal is media intent. Inspect the real `<img>`/`<video>`, pick one intent, and follow `references/media-treatments.md`; persist with `npx hyperframes media-treatment`, never a CSS, SVG or `.cube` stand-in.

## Offer once, never add silently

Scan a piece you build or review once for concrete gaps (on-screen text with no voiceover, emoji standing in for icons, placeholder images, silent cuts, 10 s+ with no music, a colour cast) and offer the fixes in one ask. No signal, no suggestion; respect "leave it".

## Where to look

| Task | Read |
| --- | --- |
| Resolve, reuse, adopt, ingest, flags | `references/resolve.md` |
| Grading, LUTs, `grade-compare` | `references/grading.md` |
| Voiceover, music, sound effects, captions, transcription | `references/audio.md` |
| Cut, reframe or transform media; direct `heygen` recipes | `references/operations.md` |
| Treatments, realtime effects, overlays, reveals | `references/media-treatments.md` |
| Install, sign-in, credentials, `--provider`, `--local-only`, RAM ladders | `references/setup-providers.md` |
| `media-use generate`, HeyGen transcription, prices | `references/heygen.md` |
| Fades, gain, ducking, automation, effects, buses on placed tracks | `references/mixing.md` |
| Local commands: grade, cutout, loudness, beats | `references/local.md` |
| Remembered preferences | `references/memory.md` |
