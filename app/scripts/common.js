/**
 * Read URL parameters
 */
function getParameterByName(name) {
	name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	var results = regex.exec(location.search);
	return (results === null) ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/**
 * Common initialization tasks
 */
$(document).ready(function () {
	// Configuration file was given
	var configUrl = getParameterByName('config');
	if (configUrl) {
		configLoadFile(configUrl);
	}
});

/**
 * Nihongo App
 */
 
// Module
var nihongo = angular.module('nihongo', ['LocalStorageModule', 'ngResource', 'ngRoute']);

// Routing
nihongo.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/intro.html',
        })
		.when('/hiragana', {
            templateUrl: 'views/tasks/hiragana.html',
            controller: 'NihongoHiraganaController'
        })
		.when('/katakana', {
            templateUrl: 'views/tasks/katakana.html',
            controller: 'NihongoKatakanaController'
        })
        .when('/vocabulary', {
            templateUrl: 'views/tasks/vocabulary.html',
            controller: 'NihongoVocabularyController'
        });
}]);
