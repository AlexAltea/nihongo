nihongo.controller('NihongoSidebar', function ($scope) {
	
	// Filters
	$scope.isTaskVocabulary = function(task) {
		return task.type == "vocabulary";
	}
});