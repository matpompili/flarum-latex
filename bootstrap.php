<?php

/*
* This file is part of flarum-mathjax.
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
      $event->addBootstrapper('matpompili/flarum-mathjax/main');
    }
  });
};
