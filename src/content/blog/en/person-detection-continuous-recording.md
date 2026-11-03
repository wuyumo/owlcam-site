---
title: "Person detection and motion recording: keep a quiet event together"
description: "Learn why a person sitting still can interrupt motion-only recording, and how to test person detection on your Mac."
lang: "en"
slug: "person-detection-continuous-recording"
published: "2026-11-03"
category: "detection"
primaryKeyword: "person detection motion recording mac"
---

A motion trigger reacts to changes in an image. If someone enters a room and then sits still, movement may subside even though the person is still there. With person detection enabled, Owl Cam continues recording while a person is detected, helping keep the event together.

## Test your actual camera view

Position the camera so the person is visible, then walk in, sit still and leave. Review the recording and repeat at the lighting levels you expect. Distance, poor light, occlusion and camera angle can affect recognition. Person detection is not guaranteed to identify every person or every moment.

## How long can a recording run?

Since Owl Cam 1.1.6, recordings are no longer split automatically every 15 minutes. A recording can continue while detection keeps it active, subject to camera availability, device state and free disk space. It is not a promise of uninterrupted recording. Finished recordings can be backed up with Pro; a file that is still open is not backed up yet.

## Tune for the room

Owl Cam offers motion, scene-difference and stopping settings with live readings. Change one setting at a time, repeat the same walk-through, and check the saved result. See the [FAQ](/faq) for the stopping rule and other practical limits.
