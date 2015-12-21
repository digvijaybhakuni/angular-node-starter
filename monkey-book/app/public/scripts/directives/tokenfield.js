"use strict";

mbApp.directive('tags', function(bookDataService){

    return {
        restrict: 'A',
        scope: {
             tokenfield: '='
        },
        link: function(scope, elem) {

        }
    }

});
