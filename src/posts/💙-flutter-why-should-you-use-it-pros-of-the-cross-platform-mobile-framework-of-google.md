---
title: "💙 #Flutter: Why should you use it? Pros of the cross-platform mobile
  framework of Google!"
description: A small blog post to learn more about the specifics of the new
  cross-platform mobile framework and why you should adopt it!
author: Enzo Conty
date: 2020-05-21T15:32:06.029Z
tags:
  - flutter
  - dart
  - news
---
Maybe you are aware of this new contender in the game of cross-platform mobile framework, or maybe you're simply not aware of what is Flutter at all, but in any case, we will today speak about how this powerful framework made applications creations a lot easier.

## So firstly, what is Flutter?

Flutter is a cross-platform mobile front-end framework made by Google, and it was launched firstly in May 2017!

For the beginners out there that may already be lost: making an iOS and Android app is very time-consuming because you need to create 2 completely different project with different languages, with Flutter, you don't have this problem anymore, because you only write code once and you will still have an Android app and an iOS app! So you're not losing time (and money) to hire two kinds of developers!

But for those who know a little about cross-platform mobile frameworks, you know that creating both iOS and Android applications with the same code base is not new, Xamarin and React-Native have already done it.
So... 

## Why should you use Flutter?

Firstly, because Flutter builds native cross-platform apps, so no wrapping, no web app, we are building two reals apps with one programming language, so you don't have to learn Java/Kotlin for Android, and Objective-C/Swift for iOS!

Flutter provides an SDK that compiles the code you write in native code for Android and iOS, that's why you only write once your code and with the same codebase also Flutter provides you a front-end framework to quickly and easily build UI.

![Demo: two apps one codebase](https://dev-to-uploads.s3.amazonaws.com/i/rkvq7otngi8qy3rtr3y9.gif)

## Why it is better than React-Native?

React-Native is one of the most used cross-platform mobile frameworks as I write this article, so why Flutter would be better?

The answer is hidden on how the Flutter SDK compiles into native code.
Since we're building two different apps on two different platforms, you may think that when we create a button with `RaiseButton` or `FlatButton` in Flutter, it's "translated" as a `UIButton` on iOS and a `widget.Button` on Android, but **it's not**!

Actually, Flutter controls directly the pixels on your screen and acts as a canvas on which you paint an element of your UI! If you don't believe me, I suggest seeing the video of [Robert Felker, a french artist using Flutter to create art](https://www.youtube.com/watch?v=DEppSs_ko48)

And what if I told you that you can do this too? 
The code used to make such a masterpiece and is only 64 lines of code!
Check it out at <https://github.com/Solido/flutter-d-art>

And it might be scary to start a new programming language that's doesn't really have any limitations, but you shouldn't worry about it, because Flutter is one of the easiest languages I learned because **everything is a widget**

What do I mean by that? Just check this code for creating a button, everybody (even non-technical people) can understand it:

```
          RaisedButton(
            color: Colors.blue,
            padding: EdgeInsets.all(10),
            onPressed: () {
              print("Button pressed");
            },
            child: Text("Press me !"),
          ),
```

Here is the result:
![Result button](https://dev-to-uploads.s3.amazonaws.com/i/wctty8o9oos4clpjnc40.png)

So it means that at the end, you have full control of what's happening on the screen, you can start building complex UI without any limitation!