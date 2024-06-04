# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://joanneccwang.github.io/PodLandingPage)

## My process

### Built with

- React
- Vite
- [Emotion](https://emotion.sh/docs/introduction), a CSS in JS library

### What I learned

##### CSS in JS library: Emotion

In this project, I used the CSS in JS library Emotion.

It is very intuitive for me to be able to write css in React components. And with the help of the `facepaint` library, the syntax to handle RWD styling becomes so elegant.

```jsx
import facepaint from 'facepaint';
const breakpoints = [450, 768];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

<section
  css={(theme) =>
    mq({
      position: 'absolute',
      margin: ['0px', '0px 40px', '40px 0px'],
      padding: ['24px', '0px', '0px'],
      left: ['0px', '0px', '165px'],})
  }
</section>
```

##### Handle Responsive Image

Use `<picture>` tag with `<source>` to handle responsive image
[Picture Element](https://web.dev/learn/design/picture-element?hl=zh-tw)

```html
<picture>
  <source media="(max-width: 450px)" srcset="{MobileBg}" />
  <source media="(max-width: 768px)" srcset="{PadBg}" />
  <img src="{DesktopBg}" alt="background image" />
</picture>
```

### Continued development

[] throttle resize event listener
[] smoother RWD layout on resizing
[] bug: sometimes the wrong background is applied on mount

## Author

- Website - [Joanne Wang](https://joanneccwang.github.io/resume)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
