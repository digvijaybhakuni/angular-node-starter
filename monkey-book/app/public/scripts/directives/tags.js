"use strict";

mbApp.directive('tags', function(){

    return {
        restrict : 'E',
        scope : {
            tagData : '='
        },
        templateUrl : 'templates/directives/tags.html'
    };

});
