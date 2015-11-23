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

return function (Dispatcher $events) {
  $events->listen(ConfigureClientView::class, function (ConfigureClientView $event) {
    if ($event->isForum()) {
      $event->addAssets(__DIR__.'/js/forum/dist/extension.js');
      $event->view->addHeadString('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">');
      $event->view->addHeadString('<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.js"></script>');
      $event->view->addHeadString('<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/contrib/auto-render.min.js"></script>');
      $event->addBootstrapper('matpompili/flarum-latex/main');
    }
  });
};
