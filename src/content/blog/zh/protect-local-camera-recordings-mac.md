---
title: "如何保护 Mac 上的本地摄像头录像？"
description: "检查谁能打开录像，了解 FileVault，并核对外接硬盘或 NAS 备份的访问权限。"
lang: "zh"
slug: "protect-local-camera-recordings-mac"
published: "2026-11-17"
category: "privacy"
primaryKeyword: "Mac 本地监控录像 保护 FileVault"
---

本地存储让你决定录像保存在哪里，但能访问 Mac 或备份目的地的人也可能打开文件。近期一则[摄像头联网问题的讨论](https://www.reddit.com/r/homesecurity/comments/1xa2ca5/do_all_security_cameras_use_internet/)询问设备是否需要互联网，也引出另一个问题：录像保存后，谁可以访问？一则讨论不足以说明整体热度。

## 找到文件并检查访问权限

Owl Cam 将普通 MP4 文件保存在你选择的文件夹。在 Finder 中找到该文件夹，检查哪些 Mac 账户可以访问。离开时锁定 Mac，按需使用独立账户，并检查文件夹共享设置。如果选择云同步文件夹，服务可能按照其设置同步文件；本地检测本身不会阻止同步。

## 了解磁盘加密

[Apple 的 FileVault 说明](https://support.apple.com/zh-cn/guide/security/volume-encryption-with-filevault-sec4c6dc1b6e/web)介绍了如何保护 Mac 内置存储上的数据。可在系统设置 → 隐私与安全性 → FileVault 检查状态，并妥善保管恢复信息。加密不能阻止已获授权、正在使用解锁 Mac 的人打开其有权访问的文件。外接硬盘和 NAS 需要单独检查访问权限与加密设置；开启 Mac 的 FileVault 不代表其他位置的副本都受到保护。

## 单独检查备份

Owl Cam Pro 可将已结束的录像备份到指定位置。检查目的地的用户、共享设置、剩余空间和保留规则，并打开测试副本确认可以恢复。仍在录制的文件尚未进入已完成文件的备份流程；文件成功备份到备用位置后，也不能保证恢复时会再复制到主位置。详见[备份指南](/zh/blog/nas-backup-camera-recordings)。

在共享空间录像前，先与相关人员沟通机位和访问权限。Owl Cam 的检测和回放在 Mac 本机进行；更新检查及 Pro 授权验证需要网络。产品边界见[隐私政策](/zh/privacy)和[常见问题](/zh/faq)。
