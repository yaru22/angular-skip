/* globals beforeEach, chai, describe, inject, it */
'use strict';

var expect = chai.expect;

describe('skip filter', function() {
  // load the code
  beforeEach(module('yaru22.filters.skip'));


  it('should skip elements', inject(function($filter) {
    var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var skippedItems = $filter('skip')(items, 3);

    expect(skippedItems).to.have.length(7);
  }));
});
