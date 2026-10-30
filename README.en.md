[简体中文](README.md) · **English**

# HyperFrames

**Create and export HTML-based videos from DSH.**

[![npm](https://img.shields.io/npm/v/dsh-hyperframes)](https://www.npmjs.com/package/dsh-hyperframes) [![downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-hyperframes-downloads.svg)](https://www.npmjs.com/package/dsh-hyperframes) [![total downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-hyperframes-total-downloads.svg)](https://www.npmjs.com/package/dsh-hyperframes)

**[Install](#install) · [Workflow](#start-using-it) · [Full guide](https://github.com/STARDUSTLC666/dsh-hyperframes/blob/master/docs/REFERENCE.en.md)**

<picture>
  <source media="(prefers-color-scheme: dark) and (max-width: 640px)" srcset="https://raw.githubusercontent.com/STARDUSTLC666/dsh-hyperframes/master/docs/assets/intro/workflow-en-mobile-dark.svg">
  <source media="(max-width: 640px)" srcset="https://raw.githubusercontent.com/STARDUSTLC666/dsh-hyperframes/master/docs/assets/intro/workflow-en-mobile-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/STARDUSTLC666/dsh-hyperframes/master/docs/assets/intro/workflow-en-dark.svg">
  <img src="https://raw.githubusercontent.com/STARDUSTLC666/dsh-hyperframes/master/docs/assets/intro/workflow-en-light.svg" alt="Create and export HTML-based videos from DSH. · workflow illustration" width="100%">
</picture>

## Features

- Start from title, product or slideshow templates.
- Edit content, upload media and reorder images.
- Use the official preview and local renderer, keeping editable source.

## Install

Open **Plugins** in the DSH desktop app and install `dsh-hyperframes`. If the CLI is available:

```bash
dsh plugin --profile desktop add dsh-hyperframes
```

For the web profile, replace `desktop` with `web`. Restart that DSH profile after installation. The package’s DSH requirement is `>=0.2.1-rc.3`.

## Start using it

1. Open HyperFrames in the sidebar, choose New video, select a template and enter content.
2. Save the project before uploading media; reorder it in Media while preserving original files.
3. Prepare the renderer in Environment on first use and wait for it to finish.
4. Start the preview, inspect it, then stop it before editing or exporting MP4.
5. Play and download the result and keep an editable backup. Search or sort the library later, or restore an archive.

Example request：

> Create an HTML product video. Confirm the script and structure before previewing and exporting MP4.

## Before you start

Prepare the official rendering environment on first use. Export again after changing a project.

Configuration, detailed tools and troubleshooting: [full reference](https://github.com/STARDUSTLC666/dsh-hyperframes/blob/master/docs/REFERENCE.en.md).

## Plugin updates

Check updates at the bottom of the workbench or native plugin details. Automatic checks are on by default; **automatic installation is off**. You choose whether to install and when to restart. Suite-managed components update with their bundle. [Update behavior](https://github.com/STARDUSTLC666/dsh-hyperframes/blob/master/docs/REFERENCE.en.md).

## Documentation

- [Full usage, configuration and limits](https://github.com/STARDUSTLC666/dsh-hyperframes/blob/master/docs/REFERENCE.en.md)
- [Release notes](https://github.com/STARDUSTLC666/dsh-hyperframes/blob/master/CHANGELOG.md)
- [Validation scope and history](https://github.com/STARDUSTLC666/dsh-hyperframes/blob/master/docs/VALIDATION.md)

## Feedback and contributions

If the plugin helps, a Star makes it easier for others to discover. Report problems or suggest improvements in [Issues](https://github.com/STARDUSTLC666/dsh-hyperframes/issues); code and documentation [PRs](https://github.com/STARDUSTLC666/dsh-hyperframes/pulls) are welcome. Include versions and reproduction steps, and remove credentials from reports.

## License

[MIT](https://github.com/STARDUSTLC666/dsh-hyperframes/blob/master/LICENSE)

<a id="what-it-does"></a>
<a id="requirements-and-configuration"></a>
