;(function() {
  'use strict';
  
  angular
    .module('airpub')
    .controller('global', globalCtrler);

  function globalCtrler($scope) {
    if (!airpubConfigs)
      return console.error(new Error('airpub 缺少必要的配置文件!'));
    $scope.configs = airpubConfigs;
  }
})();
