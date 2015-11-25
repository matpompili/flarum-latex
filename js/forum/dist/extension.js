System.register('matpompili/flarum-latex/main', ['flarum/extend', 'flarum/components/CommentPost'], function (_export) {
  /*
  * This file is part of flarum-latex.
  *
  * (c) Matteo Pompili <matpompili@gmail.com>
  *
  * For the full copyright and license information, please view the LICENSE
  * file that was distributed with this source code.
  */

  'use strict';

  var extend, CommentPost;

  //This call KaTeX renderer with some options
  function render() {
    var elem = arguments.length <= 0 || arguments[0] === undefined ? document.body : arguments[0];

    renderMathInElement(elem, {
      //Do not render inside those tags
      "ignoredTags": ["script", "noscript", "style", "textarea", "pre"],
      //Those are the delimiters we are going to use to write latex formulas
      "delimiters": [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }]
    });
  }
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsCommentPost) {
      CommentPost = _flarumComponentsCommentPost['default'];
    }],
    execute: function () {

      app.initializers.add('matpompili-flarum-latex', function () {
        //On every post loading
        extend(CommentPost.prototype, 'config', function () {
          //Run KaTeX renderer on the single post (not on the entire page)
          render(this.element);
        });
      });
    }
  };
});