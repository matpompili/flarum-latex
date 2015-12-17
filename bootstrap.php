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
      //Include css and java for KaTeX
      $event->view->addHeadString('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">');
      $event->view->addHeadString('<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.js"></script>');
      $event->view->addHeadString('<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/contrib/auto-render.min.js"></script>');
      //add main.js
      $event->addBootstrapper('matpompili/latex/main');
    }
  });
  /*
  * This one get every new comment, post, or answer before it is saved,
  * and check if there are latex formulas in it. If there are it adds code
  * markers so that it doesn't get processed by the Markdown extension.
  */
  $events->listen(PostWillBeSaved::class, function (PostWillBeSaved $event) {
    //Get the text from the post, comment or answer
    $text = $event->post->content;
    //This is the regular expresssion used. To check what it does use regex101.com
    $regex = '/(?<!\\\\)(?: ((?<!\\$)(?<!\\`)(?<!\\`\\n)\\${1,2}(?!\\n\\`)(?!\\`)(?!\\$)))(.*(?R)?.*)(?<!\\\\)(?: ((?<!\\$)(?<!\\`)(?<!\\`\\n)\\1(?!\\n\\`)(?!\\`)(?!\\$)))/mxU';
    //Run the replace and edit the post content
    $event->post->content =  preg_replace($regex, '`\\1\\2\\3`', $text);
  });
};
