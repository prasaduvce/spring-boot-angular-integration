var app = angular.module("sampleBindingApp", []);

function MyController($scope) {
    var updateClock = function() {
        $scope.clock = {now: new Date()};
    };
    setInterval(updateClock(), 1000);
    updateClock();
}

app.controller("MyController", MyController);