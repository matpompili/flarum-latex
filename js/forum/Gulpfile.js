var flarum = require('flarum-gulp');

flarum({
  modules: {
    'matpompili/flarum-latex': [
      'src/**/*.js'
    ]
  }
});
