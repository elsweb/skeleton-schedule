angular.module('starter').controller('ViewTask', function($scope){
	$scope.tasks = [
	{'status': 'Pendente', 'title' : 'Tarefa 01', 'nivel' : 'Importante', 'desc' : 'Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'}
	,{'status': 'Pendente', 'title' : 'Tarefa 02', 'nivel' : 'Prioridade', 'desc' : 'Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'}
	];
});
angular.module('starter').controller('SelectedTask',function($scope, $stateParams){
	$scope.task = angular.fromJson($stateParams.task);
	$scope.items = [{'end' : 'Concluída'}];
	$scope.taskEnd = function(item,end){
		if(end.status == 'Pendente'){
			$scope.task.status = 'Concluída';
		}else{
			$scope.task.status = 'Pendente';
		}
	}
});
angular.module('starter').controller('EndTask',function(){
	
});