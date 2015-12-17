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

app.initializers.add('matpompili-latex', function() {
  //On every post loading
  extend(CommentPost.prototype, 'config', function() {
      //Run KaTeX renderer on the single post (not on the entire page)
      render(this.element);
  });
});

//This call KaTeX renderer with some options
function render(elem = document.body) {
  renderMathInElement(elem,{
    //Do not render inside those tags
    "ignoredTags":["script", "noscript", "style", "textarea", "pre"],
    //Those are the delimiters we are going to use to write latex formulas
    "delimiters":[
      {left: "$$", right: "$$", display: true},
      {left: "$", right: "$", display: false},
    ]
  });
}
