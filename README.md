# flarum-LaTeX
**flarum-LaTeX** is a [Flarum](https://github.com/flarum/flarum/) extension to support LaTeX, using [KaTeX](https://github.com/Khan/KaTeX/).

>Flarum is a free, open-source forum software built with PHP and Mithril.js.

>KaTeX is a fast, easy-to-use JavaScript library for TeX math rendering on the web.

## Features
With flarum-Latex you can render LaTeX mathematical expressions inside your forum just by typing them, in **the same way** you would do your TeX document.

It supports:
- Inline expressions like `$\sin\theta$`, as well as
- Display expressions, such as `$$\frac{\cos(kx)}{\cos(x)}$$`.

It also doesn't mess up with **Markdown** and **BBCode** extensions, so you can use all of them at the same time.

This is how the previous paragraph will look like:

![Imgur](http://i.imgur.com/BhEIDD0.png "This is how the previous paragraph will look like")

## Install
The only way to get flarum-latex is with composer: in your flarum folder run
  ```
  composer require matpompili/flarum-latex
  ```
Then enable it you administration panel. Done!

## Usage
You can write mathematical expressions in the composer and when the post is submitted it will be rendered correctly, even if the preview is messed up by Markdown, BBCode and emojis.
### Tip
If you want to actually **show** the LaTeX code, you must use Markdown in the following way:

    This is an expression I don't want to render
    ```
    $$\cos(\pi) + 1 = 0$$
    ```
    While this is going to be rendered: $yes$
