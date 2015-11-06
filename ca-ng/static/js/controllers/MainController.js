app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'DG Book Stop';
  $scope.promo = '10 %off'
  $scope.products = [
  {
    name: 'The Book of Trees',
    price: 19,
    likes: 0,
    dislikes: 0,
    pubdate: new Date('2014', '03', '08'),
    cover: 'img/the-book-of-trees.jpg'
  },
  {
    name: 'Program or be Programmed',
    price: 8,
     likes: 0,
    dislikes: 0,
    pubdate: new Date('2013', '08', '01'),
    cover: 'img/program-or-be-programmed.jpg'
  }
    ,
  {
    name: 'Fun Java',
    price: 10,
     likes: 0,
     dislikes: 0,
    pubdate: new Date('2015', '08', '01'),
    cover: 'img/program-or-be-programmed.jpg'
  } ,
  {
    name: 'Java Fudge',
    price: 11.39,
     likes: 0,
    dislikes: 0,
    pubdate: new Date('2014', '06', '01'),
    cover: 'img/program-or-be-programmed.jpg'
  }
 ];
  $scope.plusOne = function(index){
  	$scope.products[index].likes += 1;
  };

  $scope.minusOne = function(index){
  	$scope.products[index].dislikes += 1;
  };

}]);
