System.register('matpompili/flarum-latex/main', ['flarum/extend', 'flarum/components/CommentPost'], function (_export) {
  /*
  * This file is part of flarum-latex.
  *
  * (c) Matteo Pompili <matpompili@gmail.com>
  *
  * For the full copyright and license information, please view the LICENSE
  * file that was distributed with this source code.
  */

  //import Composer from 'flarum/components/Composer';

  'use strict';

  var extend, CommentPost;

  function render() {
    var elem = arguments.length <= 0 || arguments[0] === undefined ? document.body : arguments[0];

    renderMathInElement(document.body, {
      "ignoredTags": ["script", "noscript", "style", "textarea", "pre"],
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
        extend(CommentPost.prototype, 'config', function () {
          setTimeout(function () {
            render(this.$('.Post-body'));
          }, 50);
        });
      });
    }
  };
});