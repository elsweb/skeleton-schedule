angular.module('starter').service('TaskService', function($http){	
	var path = 'http://aluracar.herokuapp.com/';
	return {
		getTask : function(){
			return $http.get(path).then(function(response){
				return response.data;
			});
		}
		/* not suport yet
		,
		SaveTask : function(task){
			return $http.get(path + 'add', task).then(function(response){
				return 'Tarefa Cadastrada com Sucesso';
			});
		}
		*/
	}	
});