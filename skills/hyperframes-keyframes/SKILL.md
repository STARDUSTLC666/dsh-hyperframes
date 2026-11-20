---
name: "hyperframes-keyframes"
description: "Compatibility entry for the retired hyperframes-keyframes skill; routes to the current official hyperframes skill."
version: "0.9.72"
---

## DSH package context

Apply this DSH section only when an ancestor package.json identifies the installed dsh-hyperframes package. A standalone copy without that DSH package follows the official standalone instructions below. In DSH, plugin management owns updates: do not run standalone skills add/update, remotion skills, or hyperframes skills to replace this bundle. Treat the installed plugin as read-only, preserve existing projects and lockfiles, and upgrade a user project only when requested. These DSH rules override standalone setup and launcher examples for this installed package.

For DSH-managed template videos use hyperframes_project (list/create/get/update) and hyperframes_render (prepare/preview/render/job/cancel). Check readiness; explicitly prepare on first use and poll the job until done before preview/export. Use the saved project id and current revision; query/cancel with the job id. Dependency installation alone is not readiness. Never fabricate ready.json or edit the managed runtime. The workbench pins hyperframes 0.9.72; its local templates do not implement every advanced upstream workflow.

Preparation needs Node.js 22.19+ or 24+ with npm visible to the desktop app. Homebrew commonly uses /opt/homebrew/bin (Apple Silicon) or /usr/local/bin (Intel), with npm in prefix/lib/node_modules. Linux symlinks and Windows paths with spaces are supported. A terminal PATH can differ from an already running desktop app: restart DSH after changing its launch environment and retry the saved job. Do not reinstall over this plugin, execute shell wrappers as JavaScript, or copy secrets/whole environment dumps into diagnostics.

For an advanced user-owned project, replace every upstream npx/bare hyperframes or plugin-cli.mjs example with `node "<PLUGIN_ROOT>/scripts/dsh-hyperframes-cli.mjs" <command> <args...>`. Resolve <PLUGIN_ROOT> from this installed bundle, never a source checkout. Run bundled helpers through the same wrapper using `--script <absolute-path-to-the-helper-in-this-installed-bundle> ...`; nested helpers keep this pinned CLI and the official safe npm working directory. Run from the user project, not the plugin directory; do not fall back to a project-local CLI. FFmpeg and FFprobe are required; HYPERFRAMES_BROWSER_PATH selects an explicitly validated rendering browser.

## Compatibility entry

The current official release merged this workflow into the `hyperframes` skill. Load `hyperframes` from the DSH skill registry and follow its bundled instructions. Preserve existing projects and dependencies. This entry retains the previous DSH skill name; do not recreate the retired workflow or download a standalone skill.
