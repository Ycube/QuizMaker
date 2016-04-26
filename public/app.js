var quizApp = angular.module('quizApp', []);

quizApp.controller('MainController', ['$scope', function($scope) {

  $scope.quiz = [];
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


  $scope.calculatePossibilities = function() {
  var possibilities = [];
  
    (function subRoutine(index, sumOfScores) {
      if (index === $scope.quiz.length) {
        possibilities.push(sumOfScores);
      } else {
        for(var i in $scope.quiz[index].option) {
          subRoutine(index + 1, sumOfScores + $scope.quiz[index].option[i]);
        }
      }
    })(0, 0); 
  
    return possibilities.reduce(function(obj, curr) {
      obj[curr] = obj[curr] + 1 || 1;
      console.log(obj);
      return obj;
    }, {});
  }


}]);