"use strict";

mbApp.controller('AdminBookListCtrl', function ($scope, $filter, bookDataService) {

    $scope.isAdmin = true;
    $scope.books = bookDataService.getBooks();

    // This is just to demonstrate the programmatic usage of a filter
    var orderBy = $filter('orderBy');

    var titles = $scope.books.map(function(book) {
        return {title: book.title};
    });

    $scope.getBookOrder = function(book) {
        return book.title;
    };

    console.log('titles before ordering', titles);

    // This is the actual invocation of the filter
    titles = orderBy(titles, 'title');

    console.log('titles after ordering', titles);
});
