var quizApp = angular.module('quizApp', []);

quizApp.controller('MainController', ['$scope', function($scope) {

  $scope.quiz = [];

  $scope.addQuestion = function() {
    
    $scope.quiz.push({'content': this.content, 'option' : { 'a': parseInt(this.aVal) || 0, 'b': parseInt(this.bVal) || 0, 'c': parseInt(this.cVal) || 0, 'd': parseInt(this.dVal) || 0 }});    
    $scope.content = "";
    $scope.aVal = "";
    $scope.bVal = "";
    $scope.cVal = "";
    $scope.dVal = "";
  };

  $scope.removeQuestion = function(index) {
    $scope.quiz.splice(index,1);
  };


  $scope.calculatePossibilities = function(quizArray) {
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