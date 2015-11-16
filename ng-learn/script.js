(function() {

  var person={fName:"Digvijay",lName:"Bhakuni"};
  var app = angular.module("githubViewer", []);

  var MainController = function($scope, $http) {

    var onUserComplete = function(response) {
      $scope.user = response.data;
	  $http.get($scope.user.repos_url)
           .then(onRepos, onError);
    };
	var onRepos = function(response){

      $scope.repos = response.data;

    };
    var onError = function(reason) {
      $scope.error = "Could not fetch the data";
    };

	 $scope.search = function(username){
        $http.get("https://api.github.com/users/" + username)
          .then(onUserComplete, onError);
    };

/* Commented by Ankit Arora

    $http.get("")
      .then(onUserComplete, onError);
*/

    $scope.message = "Hello, Angular!";
	$scope.person = person;
	$scope.repoSortOrder = "-stargazers_count";

  };

  app.controller("MainController", ["$scope", "$http", MainController]);

  var MyController = function($scope, $http){

    var gotMovies = function(res){
      $scope.movies = res.data;
    };

    var gotError = function(reason){
      $scope.movies = null;
      $scope.error = reason;
    };


    var promise = $http.get("http://localhost:8080/rs-jersey-spring/api/movie/all");

    promise.then(gotMovies, gotError);

    $scope.findId = function (){
        console.log("TEST");
    	$http.get("http://localhost:8080/rs-jersey-spring/api/movie/name/"+$scope.inVal).then(gotMovies, gotError);
    };

  };

  app.controller("MyController", ["$scope", "$http", MyController]);


}());
