var myApp = angular.module('myApp');

// $scope : what binds controller to the view
// $http  : allow to make GET POST  request to our API
// $location  : for redirection
// $routeParams : get variable from forms

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('books controller is running ! ');
	$scope.getBooks = function(){
		$http.get('/api/books').success(function(response){
			$scope.books = response;

		});
	}

	$scope.getBook = function(){
		var id = $routeParams.id;
		$http.get('/api/books/'+id).success(function(response){
			$scope.book = response;
		});
	}

	$scope.addBook = function(){
		console.log($scope.book)
		$http.post('/api/books/', $scope.book).success(function(response){
			window.location.href = '#/books';
		});
	}

	$scope.updateBook = function(){
		var id = $routeParams.id;
		$http.put('/api/books/'+id, $scope.book).success(function(response){
			window.location.href = '#/books';
		});
	}

	$scope.removeBook = function(id){
		$http.delete('/api/books/'+id).success(function(response){
			window.location.href = '#/books';
		});
	}
}]);