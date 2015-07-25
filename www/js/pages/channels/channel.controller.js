angular.module('dagskra.controllers')
.controller('ChannelCtrl', ['$scope', 'DagskraService', '$ionicLoading', function($scope, DagskraService, $ionicLoading) {

    // Get List of Channels.
    DagskraService.GetListOfChannels(function(data) {
        
        // Success
        $scope.channels = data.data.results[0].channels;
        
    });
    
}]);
