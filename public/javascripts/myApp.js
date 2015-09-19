var app = angular.module('myApp', ['ngRoute', 'ngResource']);

app.config(function($routeProvider){
	$routeProvider
		
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		});

});

app.factory('myContacts', function ($resource) {
	return $resource('/api/contacts/:id');
})
app.controller('mainController', function($scope, myContacts){
	$scope.contacts = myContacts.query();
	$scope.newContact = {firstName: '', lastName: '', phone: '', dob: ''};
	
	$scope.submit = function(){
		myContacts.save($scope.newContact, function() {
			$scope.contacts = myContacts.query();
			$scope.newContact = {firstName: '', lastName: '', phone: '', dob: ''};
		})
	};
});