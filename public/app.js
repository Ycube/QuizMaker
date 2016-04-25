var quizApp = angular.module('quizApp', []);

quizApp.controller('MainController', ['$scope', function($scope) {

  $scope.quiz = [
    {'content': 'What is the answer?', 
      'option' : { 'a': 0, 'b': 1, 'c': 2, 'd': 3 }, 
    },
    {'content': 'How many question\'s are there?', 
      'option' : { 'a': 3, 'b': 2, 'c': 1, 'd': 0 }
    } 
  ];

  $scope.addQuestion = function() {
    //todo 
    //should append question to end of current questions
    angular.element('.test').append();
    
  };




}]);