/*
* This file is part of flarum-latex.
*
* (c) Matteo Pompili <matpompili@gmail.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { extend } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';
//import Composer from 'flarum/components/Composer';

app.initializers.add('matpompili-flarum-latex', function() {
  extend(CommentPost.prototype, 'config', function() {
    setTimeout(function(){
      render(this.$('.Post-body'));
    },50);
  });
});

function render(elem = document.body) {
  renderMathInElement(document.body,{
    "ignoredTags":["script", "noscript", "style", "textarea", "pre"],
    "delimiters":[
      {left: "$$", right: "$$", display: true},
      {left: "$", right: "$", display: false},
    ]
  });
}
