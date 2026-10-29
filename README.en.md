# dsh-hyperframes

[中文](README.md)

![dsh-hyperframes whale girl plugin cover](https://raw.githubusercontent.com/STARDUSTLC666/dsh-hyperframes/master/assets/cover-whale-girl.png)

Create HTML videos in DSH with official HyperFrames skills, template projects, asset upload and ordering, archives, official preview and local MP4 export. Use AI-authored projects or start directly from a workbench template.

[![npm](https://img.shields.io/npm/v/dsh-hyperframes)](https://www.npmjs.com/package/dsh-hyperframes) [![downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-hyperframes-downloads.svg)](https://www.npmjs.com/package/dsh-hyperframes)

Feedback and contributions are welcome: report [issues](https://github.com/STARDUSTLC666/dsh-hyperframes/issues) or submit [pull requests](https://github.com/STARDUSTLC666/dsh-hyperframes/pulls).

Open the workbench from the native DSH sidebar. See the [workbench guide](docs/WORKBENCH.md) for configuration and operating boundaries.

Bundled skills: official HyperFrames 0.8.214, seven current skills with fourteen previous names retained as compatibility entries.

Move images up or down in the Media tab, including with the keyboard. The order saves immediately; export again to apply it to a new MP4.

## What it does

- Search projects and sort by update time or natural title; keep filters when returning to the library.
- A settings workbench for templates, editable content, media uploads, official Studio preview and local MP4 export.
- Title card, product card and slideshow templates in landscape, portrait or square format.
- Editable project backups, cancellable jobs and a warning when an MP4 uses an older revision.

- Cover animation, audio, captions, keyframes and timeline workflows.
- Create slideshows, launch videos, music-driven visuals and other formats.
- Include upstream CLI and Studio guidance plus skill health checks.

## Install

In DSH Desktop, install `dsh-hyperframes` from the Plugins panel. If the bundled dsh command is available:

```bash
dsh plugin --profile desktop add dsh-hyperframes
```

For the web version, replace `desktop` with `web`. Restart DSH after installation.

For a marketplace `spawn … ENOENT` error, follow the [installation troubleshooting](docs/USAGE.en.md#marketplace-error-spawn--enoent). The npm package name is `dsh-hyperframes`.

## Start using it

Open Settings → HyperFrames → New video. Save your content, then upload media. Prepare the render environment on first use, inspect the official Studio preview, stop it and export MP4.

Ask: “Make a short video from this material with HyperFrames, preview it, then render MP4.” The assistant follows the skills to create a project and run the renderer.

## Requirements and configuration

The plugin preserves upstream skills and adds a local workbench. First use needs Node.js 22.19+ / 24+ and npm; FFmpeg must also be in PATH. Dependencies are downloaded only when you explicitly prepare the environment.

Detailed configuration, tool arguments and troubleshooting are in the [usage guide](docs/USAGE.en.md). For standalone development, follow the Node requirement in [package.json](package.json).

## Documentation

- [Usage and troubleshooting](docs/USAGE.en.md)
- [Changelog](CHANGELOG.md)
- [Validation scope and history](docs/VALIDATION.md)
- [Report a problem or suggest a feature](https://github.com/STARDUSTLC666/dsh-hyperframes/issues)

## Plugin updates

Requires DSH 0.2.1-rc.3 or newer. Update controls sit at the bottom of the existing workbench, or native plugin details for plugins without a workbench. Checks, release notes and preferences expand in place, with no separate update page or settings menu. Automatic checks are on by default; **automatic installation is off by default**. Only explicit opt-in permits compatible stable patches while idle with no unsaved changes. Preferences are independent, with per-plugin disable, deferral and ignore controls. No forced DSH restart or upgrade, and local-source installations stay unchanged. Suite components explain and operate on the whole Suite in the same footer.

Older releases need one manual update in native plugin management to acquire these controls. Publishing to npm does not replace an existing user installation.

## License

[MIT](LICENSE). Upstream skill licensing is documented in the usage guide.
