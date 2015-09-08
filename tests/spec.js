'use strict';

describe('ngTouchmove', function () {

	var element;

	beforeEach(function () {
		module('ngTouchmove');
	});

	it('should get called on touchmove', inject(function($rootScope, $compile) {
		element = $compile('<div ng-touchmove= "moved = true"></div>')($rootScope);
		$rootScope.$digest();
		expect($rootScope.moved).toBeUndefined();
		element.triggerHandler('touchstart');
		element.triggerHandler('touchmove');
		element.triggerHandler('touchend');
		expect($rootScope.moved).toEqual(true);
	}));

});
