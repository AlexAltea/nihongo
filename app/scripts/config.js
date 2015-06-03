// Global configuration object
var config = {};

// Loads a JSON configuration file
function configLoadFile(url) {
	alert(0);
	$.getJSON(url, function(response) {
		alert(0);
		alert(response);
		$.extend(config, response);
    });
}
