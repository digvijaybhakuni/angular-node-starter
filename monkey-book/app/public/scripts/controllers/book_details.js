"use strict";
mbApp.controller('BookDetailsCtrl', function($scope,$location)
{
  $scope.book = {
    title : 'JavaScript for Enterprise Developers',
    subtitle :
      'Professional Programming in the Browser'
          + ' and on the Server',
    isbn : '978-3-89864-728-1',
    abstract : 'JavaScript is no longer only'
        + ' interesting to classic web programmers',
    numPages : 302,
    author : 'Oliver Ochs',
    publisher: {
        name : 'dpunkt.verlag',
        url : 'http://dpunkt.de/'
    }
  };

    $scope.goToListView = function(){
        $location.path('/books');
    };
});
