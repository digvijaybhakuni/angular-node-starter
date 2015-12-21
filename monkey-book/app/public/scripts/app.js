var mbApp = angular.module('mbApp',['ngRoute']);

mbApp.config(function($routeProvider){

    $routeProvider.when('/books/:isbn', {
        templateUrl : 'templates/book_details.html',
        controller:'BookDetailsCtrl'
    }).when('/books',{
        templateUrl : 'templates/book_list.html',
        controller : 'BookListCtrl'
    }).when('/admin/books',{
        templateUrl : 'templates/book_list.html',
        controller : 'AdminBookListCtrl'
    }).when('/admin/books/new',{
        templateUrl : 'templates/admin/book_form.html',
        controller : 'AdminNewBookCtrl'
    }).when('/admin/books/:isbn/edit',{
        templateUrl : 'templates/admin/book_form.html',
        controller : 'AdminEditBookCtrl'
    }).when('/admin/books/:isbn/delete',{
        templateUrl : 'templates/admin/book_delete.html',
        controller : 'AdminDeleteBookCtrl'
    }).otherwise({
        redirectTo : '/books'
    });

});
