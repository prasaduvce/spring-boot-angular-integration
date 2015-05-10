var app = angular.module("ClockApp", []);

app.controller("ClockController", function ($scope) {

    $scope.clock = {
            now: new Date()
        };

        var updateClock = function() {
            $scope.clock.now = new Date();
        };

        setInterval(function() {
            $scope.$apply(updateClock)
        }, 1000);

        $scope.counter = 0;

        $scope.add = function(amount) {
            $scope.counter+=amount;
        }

        $scope.subtract = function(amount) {
            $scope.counter-=amount;
        }

        $scope.person = {
            name: "Renuka Prasad"
        };

});

app.controller("ParentController", function($scope) {
    $scope.person = {
        greeted: false
    };
});

app.controller("ChildController", function($scope) {
    $scope.sayHello = function () {
        $scope.person.name = "Renuka Prasad";
        $scope.person.greeted = true;
    }
});

app.controller("ParseController", function ($scope, $parse) {
    $scope.$watch("expr", function(newValue, oldValue, scope) {
        if (newValue !== oldValue) {
            var parseFun = $parse(newValue);
            $scope.parsedValue = parseFun(scope);
        }
    });
});