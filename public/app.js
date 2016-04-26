var quizApp = angular.module('quizApp', []);

quizApp.controller('MainController', ['$scope', function($scope) {

  $scope.quiz = 
    [{'content': 'What is the answer?', 
      'option' : { 'a': 3, 'b': 4, 'c': 5, 'd': 6 }, 
    },
    {'content': 'How many question\'s are there?', 
      'option' : { 'a': 0, 'b': 0, 'c': 1, 'd': 2 }
    }];
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
  
  // we pass in index so we know which question we r using
  // we start with 0 to start on the first question array
  // sumOfScores is the current sum or permutation
    (function subRoutine(index, sumOfScores) {
      // if we recurse quizArray.length - 1 times, we hit this base case
      // then we would want to push the sum of scores
      if (index === $scope.quiz.length) {
        possibilities.push(sumOfScores);
      } else {
        // loop through our current quiz question and then add one of the score weights
        for(var i in $scope.quiz[index].option) {
          subRoutine(index + 1, sumOfScores + $scope.quiz[index].option[i]);
        }
      }
      // immediately invoked function expression
    })(0, 0); 
  
    // now we count all the sums and then we build an object that has the total score as a key
    // and the amount of times it is possible as the value
    return possibilities.reduce(function(obj, curr) {
      obj[curr] = obj[curr] + 1 || 1;
      console.log(obj);
      return obj;
    }, {});
  }


}]);