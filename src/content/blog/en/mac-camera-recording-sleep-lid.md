---
title: "Will a Mac camera keep recording when the screen sleeps or the lid closes?"
description: "Understand display sleep, system sleep and the MacBook lid before leaving a Mac camera recording unattended."
lang: "en"
slug: "mac-camera-recording-sleep-lid"
published: "2026-11-05"
category: "setup"
primaryKeyword: "mac camera recording sleep lid closed"
---

The display going dark and the Mac going to sleep are different things. Owl Cam can record while the display sleeps, but the Mac itself must remain awake, with its camera and storage available. In a [recent Mac app discussion](https://www.reddit.com/r/macapps/comments/1wg1a3y/i_built_macguard_a_motion_alarm_for_apple_silicon/), a reader asked what happens after a laptop lid closes and the computer sleeps. That discussion concerns a different app; it shows a useful question, not a measure of the topic's popularity.

## Check the Owl Cam sleep setting

In Owl Cam, open Settings → General and check **Prevent Mac from sleeping**. This setting requests that macOS prevent idle system sleep while the app is running; the display may still sleep. The option defaults to on in the current app, but check your own setting. It is an idle-sleep request, not a guarantee against a manual sleep command, shutdown, lost power, lid closure or another interruption.

Apple also documents [Mac sleep and wake settings](https://support.apple.com/en-hk/guide/mac-help/-mchle41a6ccd/mac), including an option on supported laptops to prevent automatic sleep on a power adapter when the display is off. Settings and availability vary by model and macOS version. Connect the Mac to power for a longer test.

## What about a closed MacBook?

Do not assume an idle-sleep prevention setting will keep a closed MacBook recording. The built-in camera is also blocked by the closed lid. Keep the lid open when using it and check that the camera view covers the area you need. External-display configurations can behave differently; verify the actual setup rather than assuming a closed-lid configuration will work for unattended recording.

## Test after the display turns off

1. Connect the camera and choose a writable recording folder with free space.
2. Enable the sleep setting, start monitoring, and wait for the display to turn off.
3. Move through the camera view, wait, and return to review the timeline and saved MP4.
4. Repeat over the intended time period and check power, camera connection and available space.

If the file is missing, check whether the Mac slept, whether the camera remained available and whether the event triggered recording. Owl Cam currently has no phone app, remote live stream or push alerts, so checking locally is essential. For supported cameras and recording limits, see the [FAQ](/faq).
