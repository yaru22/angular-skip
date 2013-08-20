/* global angular */
'use strict';

angular.module('yaru22.filters.skip', [
]).filter('skip', function () {
  return function (arr, count) {
    if (!(arr instanceof Array)) {
      return arr;
    }
    return arr.slice(count);
  };
});
