> Full usage reference. The landing page focuses on outcomes, installation and workflows; detailed parameters, limits, update rules and historical validation links remain here.

# dsh-hyperframes

[中文](./REFERENCE.zh.md)

![dsh-hyperframes whale girl plugin cover](https://raw.githubusercontent.com/STARDUSTLC666/dsh-hyperframes/master/assets/cover-whale-girl.png)

Create HTML videos in DSH with official HyperFrames skills, template projects, asset upload and ordering, archives, official preview and local MP4 export. Use AI-authored projects or start directly from a workbench template.

[![npm](https://img.shields.io/npm/v/dsh-hyperframes)](https://www.npmjs.com/package/dsh-hyperframes) [![downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-hyperframes-downloads.svg)](https://www.npmjs.com/package/dsh-hyperframes) [![total downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-hyperframes-total-downloads.svg)](https://www.npmjs.com/package/dsh-hyperframes)

[Download statistics](https://github.com/STARDUSTLC666/dsh-suite/blob/npm-downloads/README.md)

Feedback and contributions are welcome: report [issues](https://github.com/STARDUSTLC666/dsh-hyperframes/issues) or submit [pull requests](https://github.com/STARDUSTLC666/dsh-hyperframes/pulls).

Open the workbench from the native DSH sidebar. See the [workbench guide](WORKBENCH.md) for configuration and operating boundaries.

Bundled skills: official HyperFrames 0.9.77, nine current skills with fourteen previous names retained as compatibility entries.

Move images up or down in the Media tab, including with the keyboard. The order saves immediately; export again to apply it to a new MP4.

## What it does

- **OP-DSH Multi-Track Hardware Director Console** (v0.14.0 default editor with 1-click toggle to classic **Form** mode): recessed dark stage monitor (`TC` timecode + 24-LED render matrix), tactile right parameter strip, and scrubbable 3-track timeline (Video / Caption / Pace).
- **Unified themes & font pairings**: 13 bright themes and 8 bilingual font pairings (rounded mono default), synchronized across DSH plugins.
- Search projects, sort by update time or natural title, and archive/restore projects while keeping library filters.
- Local video workbench for templates, editable content, media uploads and ordering, official Studio preview and local MP4 export.
- Title card, product card and slideshow templates in landscape (16:9), portrait (9:16) or square (1:1) format.
- Editable project backups, cancellable jobs and a warning when an MP4 uses an older revision.
- All 23 official HyperFrames `0.9.77` skills (9 canonical skills + 14 compatibility entries, including `reverse-any-video` and `style-sampling`), covering animation, audio, captions, keyframes, CLI/Studio guidance and skill health checks.

## Install

In DSH Desktop, install `dsh-hyperframes` from the Plugins panel. If the bundled dsh command is available:

```bash
dsh plugin --profile desktop add dsh-hyperframes
```

For the web version, replace `desktop` with `web`. Restart DSH after installation.

For a marketplace `spawn … ENOENT` error, follow the [installation troubleshooting](USAGE.en.md#marketplace-error-spawn--enoent). The npm package name is `dsh-hyperframes`.

## Start using it

1. Open HyperFrames in the sidebar, choose New video, select a template and enter content.
2. Save the project before uploading media; reorder it in Media while preserving original files.
3. Prepare the renderer in Environment on first use and wait for it to finish.
4. Start the preview, inspect it, then stop it before editing or exporting MP4.
5. Play and download the result and keep an editable backup. Search or sort the library later, or restore an archive.

## Requirements and configuration

The plugin preserves upstream skills and adds a local workbench. First use needs Node.js 22.19+ / 24+ and npm; FFmpeg must also be in PATH. Dependencies are downloaded only when you explicitly prepare the environment.

Detailed configuration, tool arguments and troubleshooting are in the [usage guide](USAGE.en.md). For standalone development, follow the Node requirement in [package.json](../package.json).

## Documentation

- [Usage and troubleshooting](USAGE.en.md)
- [Changelog](../CHANGELOG.md)
- [Validation scope and history](VALIDATION.md)
- [Report a problem or suggest a feature](https://github.com/STARDUSTLC666/dsh-hyperframes/issues)

## Plugin updates

Requires DSH 0.2.2-rc.3 or newer. Update controls sit at the bottom of the existing workbench, or native plugin details for plugins without a workbench. Checks, release notes and preferences expand in place, with no separate update page or settings menu. Automatic checks are on by default; **automatic installation is off by default**. Only explicit opt-in permits compatible stable updates (minor and patch by default, with an optional patch-only scope) while idle with no unsaved changes. Preferences are independent, with per-plugin disable, deferral and ignore controls. No forced DSH restart or upgrade, and local-source installations stay unchanged. Suite components explain and operate on the whole Suite in the same footer.

Older releases need one manual update in native plugin management to acquire these controls. Publishing to npm does not replace an existing user installation.

## License

[MIT](../LICENSE). Upstream skill licensing is documented in the usage guide.
