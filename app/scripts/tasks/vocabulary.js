// Nihongo Controller
nihongo.controller('NihongoVocabularyController', function ($scope, localStorageService) {

    // Vocabulary exercises
    $scope.collections = [];
    
    // Statistics
    localStorageService.bind($scope, 'scoreGood');
    localStorageService.bind($scope, 'scoreBad');
    
    // Current word
    $scope.currentWord = {};
    $scope.getNewWord = function () {
        var words = [];
        for (var i = 0; i < $scope.collections.length; i++) {
            if ($scope.collections[i].active) {
                words = words.concat($scope.collections[i].data.words);
            }
        }
        $scope.currentWord = words[Math.floor(Math.random() * words.length)];
        angular.element('#vocabularyInput').trigger('focus');
    };
    
    // Check input
    $scope.checkInput = function () {
        var expected = $scope.currentWord.kana.trim();
        var given = $scope.currentInput.trim();
        var ignoredChars = ["〜","~"," "];
        for (var i = 0; i < ignoredChars.length; i++) {
            expected = expected.replace(ignoredChars[i], "");
            given = given.replace(ignoredChars[i], "");
        }
        given = given.replace("n", "ん");
        given = given.replace("N", "ン");
        
        if (expected == given) {
            $scope.scoreGood += 1;
        }
        else {
            $scope.scoreBad += 1;
            var message = "Wrong! The correct answer for \'" + $scope.currentWord.meaning + "\' is:\n\n";
            message += !$scope.currentWord.romaji ? "" : "Romaji: " + $scope.currentWord.romaji + "\n";
            message += !$scope.currentWord.kana ? "" : "Kana: " + $scope.currentWord.kana + "\n";
            message += !$scope.currentWord.kanji ? "" : "Kanji: " + $scope.currentWord.kanji + "\n";
            alert(message);
        }
        
        $scope.getNewWord();
        $scope.currentInput = "";
    }
    
    // Initialization
    var kanaInput = angular.element('#vocabularyInput').get(0);
    wanakana.bind(kanaInput);
    
    for (var i = 0; i < config.tasks.length; i++) {
        var task = config.tasks[i];
        if (task.type == "vocabulary") {
            task.active = true;
            task.source = "demo";
            $scope.collections.push(task);
        }
    }
    
    // Bootstrap tooltips
    angular.element('[data-toggle="tooltip"]').tooltip({container: 'body', html: true});
    
    // Events
    angular.element('#vocabularyInput').keyup(function(e) {
        // ESC key
        if (e.keyCode == 27) {
            $scope.getNewWord();
            $scope.$apply();
        }
    });
    
    $scope.getNewWord();
});