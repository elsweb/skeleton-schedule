angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){
	var theme = 'themes/schedule/'; //default theme
	$urlRouterProvider.otherwise('/'); //default router

	$stateProvider.state('View',{
		url : '/',
		templateUrl : theme + 'inc/index.html',
		controller : 'ViewTask'
	})
	.state('SelectTask',{
		url: '/task:task',
		templateUrl : theme + 'inc/task.html',
		controller : 'SelectedTask'
	})
	.state('EndTask',{
		url:'/endtask:task',
		templateUrl : theme + 'inc/endtask.html',
		controller : 'EndTask'
	})
});