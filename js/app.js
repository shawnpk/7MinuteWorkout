angular.module('7minWorkout', []);
angular.module('app', ['ngRoute', '7minWorkout'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/start', {
        templateUrl: 'partials/start.html'
      })
      .when('/workout', {
        templateUrl: 'partials/workout.html',
        controller: 'WorkoutController'
      })
      .when('/finish', {
        templateUrl: 'partials/finish.html'
      })
      .otherwise({
        redirectTo: '/start'
      });

    $locationProvider.html5Mode(true);
  });
