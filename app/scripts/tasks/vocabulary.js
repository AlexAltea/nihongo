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
    $scope.checkWord = function () {
        var expected = $scope.currentWord.kana;
        var given = $scope.currentInput;
        if (expected == given) {
            $scope.scoreGood += 1;
            $scope.getNewWord();
            $scope.currentInput = "";
        } else {
            $scope.scoreBad += 1;
        }
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
    $scope.getNewWord();
});