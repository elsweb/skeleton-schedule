angular.module('starter').controller('ViewTask', function($scope){
	$scope.tasks = ['Tarefa 01','Tarefa 02','Tarefa 03','Tarefa 04','Tarefa 05'];
});
angular.module('starter').controller('SelectedTask',function($scope, $stateParams){
	$scope.task = $stateParams.task;
})