<?php

/*
 * This file is part of flarum-mathjax.
 *
 * (c) Matteo Pompili <matpompili@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


 use Flarum\Event\PostWillBeSaved;
 use Illuminate\Contracts\Events\Dispatcher;

 return function (Dispatcher $events) {
     $events->listen(PostWillBeSaved::class, function (PostWillBeSaved $event) {
         // do stuff before a post is saved
         $event->post->content .= ' ##MathJax extension is working. Waiting to be operative';
     });
 };
