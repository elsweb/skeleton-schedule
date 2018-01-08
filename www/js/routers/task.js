angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/'); //default router

	$stateProvider.state('view',{
		url : '/',
		templateUrl : 'themes/schedule/inc/index.html',
		controller : 'ViewTask'
	});
});