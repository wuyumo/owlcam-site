---
title: "Camera pre-roll explained: record what happened before motion"
description: "Learn how an in-memory pre-roll buffer captures context before a camera trigger and why its actual length varies."
lang: "en"
slug: "camera-pre-roll-record-before-motion"
published: "2026-11-03"
category: "detection"
primaryKeyword: "security camera pre roll mac"
---

When motion triggers recording, the beginning of an event may have already happened. Pre-roll keeps a short buffer of recent frames in memory so they can be written to the recording when an event starts.

## How Owl Cam pre-roll works

The pre-roll duration is adjustable and currently defaults to five seconds. Frames are buffered in memory; after recording is triggered, buffered frames can be written to the file. Actual retained time depends on capture frame rate and the available memory budget, so the configured duration is a target rather than a guarantee.

## Check whether it captures enough context

Start outside the camera view, enter the scene and trigger recording. Play the file from the beginning and check whether the approach is visible. Repeat at your chosen resolution and camera settings, including after changes to the pre-roll duration. If the beginning is missing, consider a wider view or earlier trigger as well as the buffer setting.

## Understand the trade-off

A larger buffer needs more memory. Camera availability, lighting and detection settings still determine whether an event triggers in the first place. Pre-roll is part of the one-camera free experience; see the [FAQ](/faq) for current details.
