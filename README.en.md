# dsh-hyperframes

[中文](README.md)

Bring HyperFrames HTML video creation skills into DSH.

[![npm](https://img.shields.io/npm/v/dsh-hyperframes)](https://www.npmjs.com/package/dsh-hyperframes) [![downloads](https://img.shields.io/npm/dm/dsh-hyperframes)](https://www.npmjs.com/package/dsh-hyperframes)

## What it does

- Cover animation, audio, captions, keyframes and timeline workflows.
- Create slideshows, launch videos, music-driven visuals and other formats.
- Include upstream CLI and Studio guidance plus skill health checks.

## Install

In DSH Desktop, install `dsh-hyperframes` from the Plugins panel. If the bundled dsh command is available:

```bash
dsh plugin --profile desktop add dsh-hyperframes
```

For the web version, replace `desktop` with `web`. Restart DSH after installation.

## Start using it

Ask: “Make a short video from this material with HyperFrames, preview it, then render MP4.” The assistant follows the skills to create a project and run the renderer.

## Requirements and configuration

The plugin installs skills. Creation and rendering also require Node / npx, the HyperFrames CLI and project media tools. See the guide for bundled upstream provenance.

Detailed configuration, tool arguments and troubleshooting are in the [usage guide](docs/USAGE.en.md). For standalone development, follow the Node requirement in [package.json](package.json).

## Documentation

- [Usage and troubleshooting](docs/USAGE.en.md)
- [Changelog](CHANGELOG.md)
- [Validation scope and history](docs/VALIDATION.md)
- [Report a problem or suggest a feature](https://github.com/STARDUSTLC666/dsh-hyperframes/issues)

## License

[MIT](LICENSE). Upstream skill licensing is documented in the usage guide.
