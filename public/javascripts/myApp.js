var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		});

});

app.controller('mainController', function($scope){
	$scope.contacts = [];
	$scope.newContact = {firstName: '', lastName: '', phone: '', dob: ''};
	
	$scope.submit = function(){
		$scope.contacts.push($scope.newContact);
		$scope.newContact = {firstName: '', lastName: '', phone: '', dob: ''};
	};
});