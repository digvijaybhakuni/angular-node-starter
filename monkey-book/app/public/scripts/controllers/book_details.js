"use strict";
mbApp.controller('BookDetailsCtrl', function($scope, $location, $routeParams, bookDataService)
{
    var isbn = $routeParams.isbn;

    $scope.book = bookDataService.getBookByIsbn(isbn);

    $scope.goToListView = function(){
        $location.path('/books');
    };
});
