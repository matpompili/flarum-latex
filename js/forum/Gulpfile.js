var flarum = require('flarum-gulp');

flarum({
  modules: {
    'matpompili/flarum-mathjax': [
      'src/**/*.js'
    ]
  }
});
