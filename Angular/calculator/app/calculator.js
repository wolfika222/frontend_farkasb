angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {
        
        $scope.calculate = function() {

            if ($scope.operator == '+') {
                 $scope.result = $scope.a + $scope.b;
            }
            if ($scope.operator == '-') {
                $scope.result = $scope.a - $scope.b;
            }
            if ($scope.operator == '*') {
                $scope.result = $scope.a * $scope.b;
            }
            if ($scope.operator == '/') {
                $scope.result = $scope.a / $scope.b;
            }
        };
    });     