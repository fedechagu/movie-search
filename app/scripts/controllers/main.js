'use strict';

angular.module('movieApp')
.controller('MainCtrl', function ($scope) {
	$scope.awesomeThings = [
	'HTML5 Boilerplate',
	'AngularJS',
	'Karma'
	];
})
.controller('SearchController', function ($scope, $http) {
	$scope.model = {};

	
	var baseUrl = 'http://mymovieapi.com/';

	var url = baseUrl + 'type=jsonp&plot=full&episode=1&limit=10&yg=0&mt=none&lang=en-US';

	

	$scope.$watch('model.query', function (newVal, oldVal) {
		$http({method: 'GET', url: url + '?title=' + newVal}).
		success(function(data, status) {
			$scope.model.movieList = data;
			
		}).
		error(function(data, status) {

		});
	});

});

