var quizApp = angular.module('quizApp', []);

quizApp.controller('MainController', ['$scope', function($scope) {

  $scope.quiz = [
    {'content': 'What?', 'a': 0, 'b': 1, 'c': 2, 'd': 3},
    {'content': 'numbr 2 question', 'a': 0, 'b': 1, 'c': 2, 'd': 3} 
  ];

  $scope.addQuestion = function() {
    //todo 
    //should append question to end of current questions
    angular.element('.test').append();
    
  };




}]);