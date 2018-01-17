angular.module('starter').controller('ViewTask', function($scope){
	$scope.tasks = [
	{
		'status': 'Pendente', 
		'title' : 'Tarefa 01', 
		'nivel' : 'Importante',  
		'date_start' : '01-01-2018',  
		'date_prev' : '01-01-2018',  
		'date_end' : null,  
		'desc' : 'Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'
	}
	,
	{
		'status': 'Pendente', 
		'title' : 'Tarefa 01', 
		'nivel' : 'Importante',  
		'date_start' : '01-01-2018',  
		'date_prev' : '01-01-2018',  
		'date_end' : null,  
		'desc' : 'Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'
	}
	];
});
angular.module('starter').controller('SelectedTask',function($scope, $stateParams){
	$scope.task = angular.fromJson($stateParams.task);	
	/*
	Abaixo o objeto items inicialmente só tem um atributo, porém mais na frente,
	terá suporte para ter mais. Como outros status, o parametro checked vêm do ng-model da view
	e é passado pela função chamada, ele verifica qual checkbox esta selecionado.
	*/
	$scope.items = [{'end' : 'Concluída'}];
	$scope.taskEnd = function(item,checked){
		console.log(item);
		if(checked){
			$scope.date = new Date();
			$scope.task.status = 'Concluída';
			$scope.task.date_end = $scope.date;
			console.log($scope.task);
		}else{
			$scope.task.date_end = null;
			$scope.task.status = 'Pendente';
		}
	}
});
angular.module('starter').controller('EndTask',function($scope, $stateParams, $ionicPopup, $state){
	$scope.endtask = angular.fromJson($stateParams.task);
	$scope.finalytask = function(){
		$ionicPopup.alert({
			title : 'Tarefa Finalizada',
			template : 'Meus Parabéns'
		}).then(function(){
			$state.go('View');
		});
	}
});