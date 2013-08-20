/* globals angular */
'use strict';

var app = angular.module('ngApp', [
  'yaru22.filters.skip'
]);

app.controller('demoController', function($scope) {
  $scope.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
});
