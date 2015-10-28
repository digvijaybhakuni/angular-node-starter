var dateApp = angular.module ("dateApp", []);


dateApp.controller ("DateCtrl", function ($scope, $timeout) {
  $scope.now = 'Loading...';

  $timeout(function(){ $scope.now += '/2'; },500);
  var updateTime = function() {
    $timeout(function() {
      $scope.now = new Date();
      updateTime();
    }, 1000);
  };

  updateTime();

});

/*
This  formatting filter that truncates text longer
than a certain number of letters and appends three periods (...)
to the end of a truncated piece of text. We call this filter truncate
*/
dateApp.filter ('truncate', function () {
    return function (input, charCount) {
        var output = input;
        if (output.length > charCount) {
            output = output.substr(0, charCount) + '...';
        }
        return output;
    };
});
