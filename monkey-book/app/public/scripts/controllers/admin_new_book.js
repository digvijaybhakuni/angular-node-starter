"use strict";

mbApp.controller('AdminNewBookCtrl', function ($scope, $location, bookDataService) {
    $scope.book = {};
    $scope.submitBtnLabel = 'Create Book';

    $scope.submitAction = function() {
        bookDataService.storeBook($scope.book);
        goToAdminListView();
    };

    $scope.cancelAction = function() {
        goToAdminListView();
    };

    var goToAdminListView = function() {
        $location.path('/admin/books');
    };
});
