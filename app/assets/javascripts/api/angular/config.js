(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  // INJEÇÃO DE TOKEN 
  config.$inject = ['$httpProvider'];

  function config($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = document.getElementsByName('csrf-token')[0].content;
  }
})();
