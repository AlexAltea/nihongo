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
	alert(configUrl);
	if (configUrl) {
		configLoadFile(configUrl);
	}
});

/**
 * Nihongo App
 */
var nihongo = angular.module('nihongo', ['ngResource', 'ngRoute']);
