System.register('matpompili/flarum-mathjax/main', ['flarum/extend', 'flarum/components/DiscussionPage'], function (_export) {
  'use strict';

  var extend, DiscussionPage;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsDiscussionPage) {
      DiscussionPage = _flarumComponentsDiscussionPage['default'];
    }],
    execute: function () {

      app.initializers.add('matpompili-flarum-mathjax', function () {
        extend(DiscussionPage.prototype, 'view', function (vdom) {
          //vdom.children.push('<script>alert("test");</script>');
          renderMathInElement(document.body);
        });
      });
    }
  };
});;
System.register("matpompili/flarum-mathjax/mathJaxQueue", [], function (_export) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            app.initializers.add('matpompili-flarum-mathjax', function () {
                MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
            });
        }
    };
});