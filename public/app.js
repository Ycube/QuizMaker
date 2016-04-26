var quizApp = angular.module('quizApp', []);

quizApp.controller('MainController', ['$scope', function($scope) {

  $scope.quiz = [
    {'content': 'What is the answer?', 
      'option' : { 'a': 0, 'b': 1, 'c': 2, 'd': 3 }, 
    },
    {'content': 'How many question\'s are there?', 
      'option' : { 'a': 3, 'b': 2, 'c': 1, 'd': 0 }
    },

    ];
  $scope.question = {};

  $scope.addQuestion = function() {
    
    $scope.quiz.push({'content': this.content, 'option' : { 'a': this.aVal, 'b': this.bVal, 'c': this.cVal, 'd': this.dVal }});    
    $scope.content = "";
    $scope.aVal = "";
    $scope.bVal = "";
    $scope.cVal = "";
    $scope.dVal = "";
  };

  $scope.removeQuestion = function(index) {
    $scope.quiz.splice(index,1);
  };

  

}]);