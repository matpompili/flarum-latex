System.register("matpompili/flarum-mathjax/main", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      app.initializers.add('matpompili-flarum-mathjax', function () {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
        document.getElementsByTagName("head")[0].appendChild(script);
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