angular.module('dagskra.common', []).                                                                                                                                                                                  
  factory('COMMON', function($window) {
    var common = {};
    common.handleError = function(error){
        return function () {
            return { success: false, message: error };
        };
    };
    return common;
  });