'use strict';

describe('myApp.home module', function() {

  beforeEach(module('myApp.home'));

  describe('home controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var home1Ctrl = $controller('home1Ctrl');
      expect(home1Ctrl).toBeDefined();
    }));

  });
});