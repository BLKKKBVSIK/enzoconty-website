---
title: Why should you switch to a static portfolio website?
description: This is a blog post about my journey switching from a complex
  technical stack website to a much more maintainable one with almost no effort.
author: Enzo CONTY
date: 2021-05-29T14:15:09.100Z
tags:
  - web
  - devblog
---
This is often the question I get from people whenever I told them that my website is static, made of HTML/CSS/JS only.

A few years ago, I had a portfolio website where I was showing off my web dev skills and show potential recruiters that I can create a website with complex technical stacks. I was using Django, VueJS, and NuxtJS to achieve the perfect portfolio and to brag about it during my interview.

The problem was that it was incredibly difficult to upgrade since the project was quite complex and I was suffering from a lack of motivation because I had to struggle with server-rendering, routing and it was just way too complex for a simple portfolio. I also needed a pipeline for my GitLab to deploy automatically my website when the build succeeded. 

## Simpler technical stack, same results

Most people think that because my website is not using any back-end, it looks like a basic HTML page and I got stuck in 1995 with my website.

The reality is that my website has even more features now that it is static.🤯

Let's compare my old and new technical stacks:

As I said previously I was using VueJS / NuxtJS / Django (and GitLab).
Now I'm using tools that have tighter integration with each other for a more maintainable result.

What I am using now:


Old Stack | New Stack | Reason 
--- | --- | ---
VueJS | Bulma.io | Bulma.io for building my front-end. It's a very simple, minimalist front-end library, a successor to the era of Bootstrap, it was just enough for what needed to be done.
Django | 11ty | My back-end became a static site generator (SSG) since I  found it way easier to manage routing and the little amount of logic that I had on my website.
GitLab | Netlify/GitHub | Netlify for deploying my website, Netlify can fetch, and deploy my website for free, with no pipeline configuration and after 2 minutes I had my website launched.
NuxtJS | X | NuxtJS was simply removed since there was no necessity for it anymore.

## What's the benefit?

The benefit is mainly maintainability, it can also be a financial benefit if, like me, you were hosting your website on a VPS or dedicated server, where I can now post it directly on Github Pages and save 60 bucks per year. 

After refactoring my website so it can be fully static, I manage to create a static blog with little or no effort by integrating Netlify CMS, it allowed me to create an easily customizable administrator panel to manage blog posts and all the generated content of my website.
If you were like me, using the Django admin panel, it's the perfect replacement, and when updating a blog post, it directly updates your GitHub repository.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dqu20y2idzsqdjpxismq.png)

## Conclusion

Updating your website can be difficult and painful depending on your technical stack.
You may want to keep a complex technical stack if your website should operate with APIs or have a complex business logic but if this isn't the case, you may want to consider using a static site generator such as 11ty, Jekyll, or Hugo to create easy to maintain and easy to manage websites.
