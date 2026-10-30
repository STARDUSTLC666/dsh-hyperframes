**简体中文** · [English](README.en.md)

# HyperFrames

**在 DSH 里用 HTML 创作并导出视频。**

[![npm](https://img.shields.io/npm/v/dsh-hyperframes)](https://www.npmjs.com/package/dsh-hyperframes) [![downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-hyperframes-downloads.svg)](https://www.npmjs.com/package/dsh-hyperframes) [![total downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-hyperframes-total-downloads.svg)](https://www.npmjs.com/package/dsh-hyperframes)

**[安装使用](#安装) · [使用流程](#开始使用) · [完整说明](https://github.com/STARDUSTLC666/dsh-hyperframes/blob/master/docs/REFERENCE.zh.md)**

<picture>
  <source media="(prefers-color-scheme: dark) and (max-width: 640px)" srcset="https://raw.githubusercontent.com/STARDUSTLC666/dsh-hyperframes/master/docs/assets/intro/workflow-zh-mobile-dark.svg">
  <source media="(max-width: 640px)" srcset="https://raw.githubusercontent.com/STARDUSTLC666/dsh-hyperframes/master/docs/assets/intro/workflow-zh-mobile-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/STARDUSTLC666/dsh-hyperframes/master/docs/assets/intro/workflow-zh-dark.svg">
  <img src="https://raw.githubusercontent.com/STARDUSTLC666/dsh-hyperframes/master/docs/assets/intro/workflow-zh-light.svg" alt="在 DSH 里用 HTML 创作并导出视频。 · 流程示意" width="100%">
</picture>

## 功能

- 从标题卡、产品介绍和图文轮播模板开始。
- 编辑内容、上传素材并调整图片顺序。
- 使用官方预览与本机渲染，保留可编辑工程。

## 安装

在 DSH 桌面版「插件」面板安装 `dsh-hyperframes`。已配置命令行时也可使用：

```bash
dsh plugin --profile desktop add dsh-hyperframes
```

网页版把 `desktop` 改为 `web`；安装后重启对应的 DSH。宿主要求以包声明 `>=0.2.1-rc.3` 为准。

## 开始使用

1. 从左侧栏打开 HyperFrames，点击“新建视频”，选模板并填写内容。
2. 先保存工程，再上传素材；在“素材”页调整顺序，原始文件保持不变。
3. 首次使用在“环境”页准备渲染环境，等待实际准备完成。
4. 启动预览并检查画面，停止预览后再编辑或导出 MP4。
5. 播放并下载成品；保存可编辑工程备份。以后可在工程库搜索、排序，或从归档恢复。

可以这样说：

> 制作一个 HTML 产品介绍视频，先确认文案与结构，再预览和导出 MP4。

## 开始前要知道

首次使用需准备官方渲染环境；工程修改后需要重新导出。

配置、完整工具与排错见[详细使用说明](https://github.com/STARDUSTLC666/dsh-hyperframes/blob/master/docs/REFERENCE.zh.md)。

## 插件更新

在工作台或原生插件详情页底部检查更新。默认自动检查，**默认不自动安装**；是否安装、何时重启由你决定。Suite 管理的组件随整包更新。[查看更新规则](https://github.com/STARDUSTLC666/dsh-hyperframes/blob/master/docs/REFERENCE.zh.md)。

## 文档

- [详细使用、配置与边界](https://github.com/STARDUSTLC666/dsh-hyperframes/blob/master/docs/REFERENCE.zh.md)
- [更新记录](https://github.com/STARDUSTLC666/dsh-hyperframes/blob/master/CHANGELOG.md)
- [验证范围与历史](https://github.com/STARDUSTLC666/dsh-hyperframes/blob/master/docs/VALIDATION.md)

## 反馈与贡献

如果插件帮到了你，欢迎 Star，让更多人发现它。问题和建议请提交 [Issues](https://github.com/STARDUSTLC666/dsh-hyperframes/issues)，也欢迎代码与文档 [PR](https://github.com/STARDUSTLC666/dsh-hyperframes/pulls)。反馈时附上版本与复现步骤，并移除凭据。

## License

[MIT](https://github.com/STARDUSTLC666/dsh-hyperframes/blob/master/LICENSE)

<a id="依赖与配置"></a>
