var flarum = require('flarum-gulp');

flarum({
  modules: {
    'matpompili/latex': [
      'src/**/*.js'
    ]
  }
});
