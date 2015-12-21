"use strict";

mbApp.controller('AdminEditBookCtrl', function ($scope, $routeParams, $location, bookDataService) {

    $scope.isEditMode = true;
    $scope.submitBtnLabel = 'Update Book';

    var isbn = $routeParams.isbn;
    $scope.book = bookDataService.getBookByIsbn(isbn);

    $scope.submitAction = function() {
        bookDataService.updateBook($scope.book);
        goToAdminListView();
    };

    $scope.cancelAction = function() {
        goToAdminListView();
    };

    var goToAdminListView = function() {
        $location.path('/admin/books');
    };
});
