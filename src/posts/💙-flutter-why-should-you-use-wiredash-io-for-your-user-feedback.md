---
title: 💙 Flutter - Why should you use WireDash.io for your user feedback ?
description: Introduction to Wiredash, a dependency to increase your user
  feedback rate and quality
author: Enzo Conty
date: 2020-05-20T15:43:56.183Z
tags:
  - flutter
  - app
  - dart
---

Every time I publish a new application on the PlayStore or on the AppStore, I have the same problem:
Most of the users don't leave feedback for my app, and when they do, it's mostly because they want to request a feature, or report a bug directly with the store review system!

And it's very bad for your app for multiple reasons: 

1) The ratings are mostly people putting 3/5 stars for requesting features or reporting a bug and it gives lesser visibility to your app.

2) The user is forced to go back to the store to leave a review and can be tempted to download a concurrent/similar app and uninstall yours later

## Introducing WireDash.io

[WireDash](https://wiredash.io/) is the solution to all the problems above!
The user will have the possibility to report a bug, ask for a feature, and even more without leaving your app!

![WireDash](https://dev-to-uploads.s3.amazonaws.com/i/fxr56ybtykkqe5lppnwt.png)


It's almost black magic: you probably can't do better for UI/UX since the user takes part in the testing process without leaving the app. It also gives the user a feeling of duties and close contact with the developers, all of this will result in a higher chance of keeping your user even if your app has major bugs or missing features.

## Installing WireDash

Firstly, you need to register on the website of [WireDash.io](WireDash.io) and create a project, so you can later use the `ProjectId` and `SecretId` that are provided.

![CreateProject](https://dev-to-uploads.s3.amazonaws.com/i/g1yvgpa9du4zchg7rble.png)

Even a child can install WireDash, you need to add only 3 lines of code, but before this, don't forget to add the dependency in your pubspec.yaml:
`wiredash: ^0.1.0`

After this, you can start implementing WireDash by wrapping your `MaterialApp` with the `WireDash` widget and add your `ProjectId` and `SecretId` that you got from the previous steps.

And you're good to go!
WireDash is already working and you can start making your first bug report or feature request using the FAB.

![ReportABugWithWireDash](https://dev-to-uploads.s3.amazonaws.com/i/3aac8xqxwtc4yxvr1iuf.gif)

And you can consult your new bug report instantly on WireDash.io

![BugReportOnWebsite](https://dev-to-uploads.s3.amazonaws.com/i/12rrzm9fsoxxl5vgk26o.png)

WireDash support theming and dark mode, as well as most platforms:

![DarkMode](https://dev-to-uploads.s3.amazonaws.com/i/0btdb7ivqd4x4yplgqrb.png)

![DesktopVersion](https://dev-to-uploads.s3.amazonaws.com/i/du44f53cb26k5ikrid8d.png)