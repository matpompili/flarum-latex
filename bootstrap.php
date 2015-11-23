<?php

/*
* This file is part of flarum-latex.
*
* (c) Matteo Pompili <matpompili@gmail.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/


use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Event\ConfigureClientView;
use Flarum\Event\PostWillBeSaved;


return function (Dispatcher $events) {
  $events->listen(ConfigureClientView::class, function (ConfigureClientView $event) {
    if ($event->isForum()) {
      $event->addAssets(__DIR__.'/js/forum/dist/extension.js');
      $event->view->addHeadString('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">');
      $event->view->addHeadString('<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.js"></script>');
      $event->view->addHeadString('<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/contrib/auto-render.min.js"></script>');
      //$event->view->addHeadString('<script type="text/x-mathjax-config">MathJax.Hub.Config({tex2jax: {inlineMath: [ ["$","$"], ["\\(","\\)"] ],displayMath: [ ["$$","$$"], ["\\[","\\]"] ],processEscapes: true,}})</script>');
      //$event->view->addHeadString('<script type="text/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>');
      $event->addBootstrapper('matpompili/flarum-latex/main');
    }
  });
  $events->listen(PostWillBeSaved::class, function (PostWillBeSaved $event) {
      $text = $event->post->content;
      $event->post->content =  preg_replace('/(?<!\\\\)(?: ((?<!\\$)(?<!\\`)\\${1,2}(?!\\`)(?!\\$)))(.*(?R)?.*)(?<!\\\\)(?: ((?<!\\$)(?<!\\`)\\1(?!\\`)(?!\\$)))/mxU', '`\\1\\2\\3`', $text);
  });
};

/*
Questa è l'espressione della forza:
$$\vec{F} = -G \frac{m_1 m_2}{|\vec{r}^3|}\vec{r}$$
Il segno $-$ davanti alla costante $G$ indica che la forza è attrattiva, ovvero è di verso opposto al vettore $\vec{r}$.
*/
