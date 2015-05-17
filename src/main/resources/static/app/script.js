var scotchApp = angular.module('scotchApp', ['ngRoute', 'pascalprecht.translate']);

scotchApp.config(function($routeProvider, $translateProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'mainController'
    })

    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutController'
    })

    .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactController'
        });

        /*$translateProvider.translations('en', {
                HEADLINE: 'This is headline',
                INTRODUCTION: 'This is Introduction'
            });
*/
        /*$translateProvider.translations('de',{
                        HEADLINE: 'Idag a headline',
                        INTRODUCTION: 'Idag a Introduction'
                    });*/
            $translateProvider.useStaticFilesLoader({
              prefix: 'app/language',
              suffix: '.json'
            });

            $translateProvider.preferredLanguage('en');
            $translateProvider.useSanitizeValueStrategy(null);

});

scotchApp.controller('mainController', function ($scope) {
    $scope.message = 'Everyone see, I am in Home page';
});

scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Everyone see, I in About page';
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'Everyone see, I in Contact page';
});

scotchApp.controller('TranslateController', function($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
});