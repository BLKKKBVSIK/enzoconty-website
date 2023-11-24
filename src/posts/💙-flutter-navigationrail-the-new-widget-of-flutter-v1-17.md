---
title: "💙 Flutter: NavigationRail, the new widget of Flutter v1.17 !"
description: "Let's talk about one of the new widgets of Flutter v1.17: the
  NavigationRail widget. It allow us to easily create a sidebar for navigations
  or quick actions. "
author: Enzo Conty
date: 2020-05-11T20:49:42.311Z
tags:
  - flutter
  - dart
  - news
---
Recently I've been showing a real interest in Flutter and Dart, and generally into cross-platform mobile development, and Flutter caught my eyes almost 6 months ago, and since I'm following every news about the language, every conference, and every tweet and I recommend you to do the same as the Flutter community is especially active on Twitter!

Recently, this week actually, the Flutter team releases the v1.17 Stable of Flutter, and besides the performance improvement, the support of Metal on iOS, and more than 6000 issues closed on the framework Github repository, there were also a couple of widgets that were added to the cross-platform framework.

Today we're going to speak about one of them, the `NavigationRail` widget!


# What's the NavigationRail widget?

It's a material widget (so included in material.dart), and you can see it as an alternative to the `BottomNavigationBar` widget with the look of a `Drawer`, you can display it on the right or left side of your app to navigate between multiple screens.

Here is an example found on Dribbble and other sources

![Dribbble1](https://cdn.dribbble.com/users/3073524/screenshots/9245974/media/2acba0a3dbe758c4d9c6bd60d8cc03ed.gif)
Credits to [@svitlana_bilan](https://dribbble.com/svitlana_bilan)

# How to use it?

After following the [official documentation](https://api.flutter.dev/flutter/material/NavigationRail-class.html), you'll find out that there are a lot of common attributes with the `BottomNavigationBar` that we talked about just before, so as a good alternative it'll be easy to change a `BottomNavigationBar` widget into a `NavigationRail` widget and everybody like that, especially those who want to experiment with the beta of [Flutter Web](https://flutter.dev/web)!

Enough talking and let's take an example.
I've made a snippet on Codepen, which is super cool to share Flutter code since you see the result as you write your code, for you so you can check it [here](https://codepen.io/blkkkbvsik/pen/PoPazPm)

But just in case, I'll provide the code here too:

```
NavigationRail(
  selectedIndex: _selectedIndex,
  onDestinationSelected: (int index) {
    setState(() {
      _selectedIndex = index;
    });
  },
  labelType: NavigationRailLabelType.selected,
  destinations: [
    NavigationRailDestination(
      icon: Icon(Icons.favorite_border),
      selectedIcon: Icon(Icons.favorite),
      label: Text('First'),
    ),
    NavigationRailDestination(
      icon: Icon(Icons.bookmark_border),
      selectedIcon: Icon(Icons.book),
      label: Text('Second'),
    ),
    NavigationRailDestination(
      icon: Icon(Icons.star_border),
      selectedIcon: Icon(Icons.star),
      label: Text('Third'),
    ),
  ],
),
```

So it doesn't look that complicated right?
Let me explain the code to those who want more details.

### Functioning

Short story long, `selectedIndex` is an integer, initialized in your stateful widget that represents the index into `destinations` for the current selected `NavigationRailDestination`.
He'll be modified with the help of a `setState` called in an anonymous function inside the `onDestinationSelected`.

Almost every other attribute is for the styling of your widget, so I'll let you play with my [snippet](https://codepen.io/blkkkbvsik/pen/PoPazPm) from Codepen to discover those!

So what ideas this new widget will bring to your upcoming projects?
Let me know on Twitter: [@EnzoConty](https://twitter.com/EnzoConty)! 

