angular.module('dagskra.services', ['dagskra.common', 'dagskra.config'])

.service('DagskraService', function($http, COMMON, CONFIG) {
    
    // initate the service that will be exported.
    var service = {};
    
    // Exported functions
    service.GetListOfChannels = _getListOfChannels;
    service.GetScheduleFromChannel = _getScheduleFromChannel;
    
    /*
     *   Get List of channels from the APIS API.
     */ 
    function _getListOfChannels(cbsuccess) {
        return $http.get(CONFIG.APIURLBASE).then(cbsuccess, COMMON.handleError('Error when retreiving a list of channels.'));
    }
    
    /*
     *   Get current schedule for a channel from APIS API.
     */ 
    function _getScheduleFromChannel(channel, cbsuccess) {
        return $http.get(CONFIG.APIURLBASE+channel).then(cbsuccess, COMMON.handleError('Error when retreiving a list of channels.'));
    }
    
    return service;
    
});