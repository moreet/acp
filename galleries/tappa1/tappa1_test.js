'use strict';

describe('myApp.tappa1 module', function() {

  beforeEach(module('myApp.tappa1'));

  describe('tappa1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var tappa1Ctrl = $controller('tappa1Ctrl');
      expect(tappa1Ctrl).toBeDefined();
    }));

  });
});
