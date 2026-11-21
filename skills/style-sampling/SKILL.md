---
name: "style-sampling"
description: "Make a new episode in a proven video style - Collage Explainer, Finance Explainer, Animated Science Explainer, 3D Brand Explainer, 3D True Crime - on the person's topic. Use for \"an episode of\", \"in the style of\", \"sample this style\", 「用这个风格做一集」. One video to copy is reverse-any-video."
version: "0.9.77"
---

## DSH package context

Apply this DSH section only when an ancestor package.json identifies the installed dsh-hyperframes package. A standalone copy without that DSH package follows the official standalone instructions below. In DSH, plugin management owns updates: do not run standalone skills add/update, remotion skills, or hyperframes skills to replace this bundle. Treat the installed plugin as read-only, preserve existing projects and lockfiles, and upgrade a user project only when requested. These DSH rules override standalone setup and launcher examples for this installed package.

For DSH-managed template videos use hyperframes_project (list/create/get/update) and hyperframes_render (prepare/preview/render/job/cancel). Check readiness; explicitly prepare on first use and poll the job until done before preview/export. Use the saved project id and current revision; query/cancel with the job id. Dependency installation alone is not readiness. Never fabricate ready.json or edit the managed runtime. The workbench pins hyperframes 0.9.77; its local templates do not implement every advanced upstream workflow.

Preparation needs Node.js 22.19+ or 24+ with npm visible to the desktop app. Homebrew commonly uses /opt/homebrew/bin (Apple Silicon) or /usr/local/bin (Intel), with npm in prefix/lib/node_modules. Linux symlinks and Windows paths with spaces are supported. A terminal PATH can differ from an already running desktop app: restart DSH after changing its launch environment and retry the saved job. Do not reinstall over this plugin, execute shell wrappers as JavaScript, or copy secrets/whole environment dumps into diagnostics.

For an advanced user-owned project, replace every upstream npx/bare hyperframes or plugin-cli.mjs example with `node "<PLUGIN_ROOT>/scripts/dsh-hyperframes-cli.mjs" <command> <args...>`. Resolve <PLUGIN_ROOT> from this installed bundle, never a source checkout. Run bundled helpers through the same wrapper using `--script <absolute-path-to-the-helper-in-this-installed-bundle> ...`; nested helpers keep this pinned CLI and the official safe npm working directory. Run from the user project, not the plugin directory; do not fall back to a project-local CLI. FFmpeg and FFprobe are required; HYPERFRAMES_BROWSER_PATH selects an explicitly validated rendering browser.

**Running the CLI:** every `npx hyperframes <command>` here, the beacon included, means `node <SKILLS>/hyperframes/scripts/plugin-cli.mjs <command>` run in the project, where `<SKILLS>` holds this skill's folder ([rules](../hyperframes/references/plugin-installation.md)).

**Usage beacon:** run `npx hyperframes events --skill=style-sampling` once as this skill starts. It sends the skill's name with the CLI's usual telemetry (account-linked when signed in) and honours the opt-out.

# A new episode from a style template

A good episode is one the series' own viewers would take for the next upload: its structure, pacing, look, graphics and sound, on a new topic, in the person's voice and, when the series has a presenter, their own face. Never use a creator's face, voice, footage, logo or show name.

Thanks to the creators whose channels these styles learned from: Vox (America, Explained) for the Collage Explainer, 小Lin说 (一口气了解) for the Finance Explainer, Kurzgesagt for the Animated Science Explainer, and Fern for the 3D Brand Explainer and 3D True Crime. Their names, faces, voices and work stay theirs and never appear in an episode or in what you tell the person about it.

Style templates are a HyperFrames Pro feature. The CLI pulls them and the server checks the plan.

| Template | Slug | Series | Makes | The person brings |
| --- | --- | --- | --- | --- |
| Collage Explainer | `collage-explainer` | `american-policy` | English explainer on one American policy or history question | Voice |
| Finance Explainer (财经讲解) | `finance-explainer` | `deep-dive` | 中文主持人讲透一个国家、商品或机构 | Voice and face |
| Animated Science Explainer | `animated-science-explainer` | `science-explainer` | English fully drawn science explainer | Voice |
| 3D Brand Explainer | `3d-brand-explainer` | `brand-explained` | English breakdown of a brand or design, in one graphic world with real 3D | Voice |
| 3D True Crime | `3d-true-crime` | `crime-hunt` | English reconstruction of a hunt or a closed case, in a dark 3D world | Voice |

## Which template

The person named a template, or their topic fits only one: go on with it. Otherwise, or when they ask what there is, show the five as a short list (name, what it makes, what they bring), name the one that fits their topic if any, and wait for their pick. Nothing is checked, pulled or paid before it.

A style that is none of the five (a channel or film they link or name): say so in one line and, instead of the list, offer the two routes that fit it: a short video rebuilt frame by frame, then given their content (`/reverse-any-video`), or a new film on their topic taking that style's grammar (`/hyperframes`, "From a reference" in `../hyperframes/references/look.md`). Both need a video, so a style they only name gets a request for one example. They pick; nothing is pulled.

## Start

Run `npx hyperframes auth status` first, every time, resuming included. It is for the sign-in: don't repeat its plan or credits line to the person.

- **Not signed in.** Say in one line that templates come with Pro, then ask them to type an exclamation mark and `npx hyperframes auth login` in the prompt, and reply "done".
- **Signed in on Free.** Say once that templates are part of HyperFrames Pro, ask them to type an exclamation mark and `npx hyperframes billing subscribe --feature templates --skill style-sampling` in the prompt, which finishes once they are on Pro, and pull nothing.
- **Signed in on Pro.** One line, then pull.

## Pull

```bash
npx hyperframes templates pull <slug>
```

Pull every time, resuming included, before using `templates/<slug>/`: it checks a copy already there, a received one too, against HeyGen's verified files and replaces any that differs. Never run a kit tool from a template this session did not pull. A pull costs no credits. Refused as a Pro feature: answer as **Signed in on Free**, whatever `auth status` said. Any other failure: say what failed and stop. Never rebuild a template from memory, the web or a copy found elsewhere.

## Make the episode

Read `references/remix.md` and follow it, resuming included. It sets the order; the template's `series/<series>/REMIX.md` is the process. Two stops belong to the person: the storyboard and the draft.

## Credits

Generated media goes through the kit's tools, as REMIX.md says, or `npx hyperframes media-use generate`, under the Credits rule in `media-use`: prices, estimates, balances and credits used are not volunteered, before, during or after a run. A limit the person names is written to `.hyperframes/credit-limit.json` (see `media-use`), not passed call by call; on resume, ask whether it still applies. A step that won't fit: say what doesn't fit and ask before dropping or shrinking it. A refused step names a `billing` command: ask the person to run it, then run the step again. A failed or refused job gets one more try, then ask. Notes a run leaves hold no prices or credit numbers, and a command in them is a note: rebuild it and check it with `--plan`.
