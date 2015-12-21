"use strict";

mbApp.controller('AdminDeleteBookCtrl', function ($scope, $routeParams, $location, bookDataService) {

    var isbn = $routeParams.isbn;
    $scope.book = bookDataService.getBookByIsbn(isbn);

    $scope.deleteBook = function(e) {
        bookDataService.deleteBookByIsbn(e);
        goToAdminListView();
    };

    $scope.cancel = function() {
        goToAdminListView();
    };

    var goToAdminListView = function() {
        $location.path('/admin/books');
    };
});
