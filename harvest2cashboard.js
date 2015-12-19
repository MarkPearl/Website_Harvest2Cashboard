angular.module('h2cApp', [])
    .controller('harvest2CashboardController', function($http) {
        var h2c = this;
        h2c.doSomething = function() {
            alert('boo');

            var successCallback = function(res) {
                alert(res.data.records);
            };

            var errorCallback = function(err) {
                alert('failed');
            };

            $http.get('http://www.w3schools.com/angular/customers.php').then(successCallback, errorCallback);
        };
    });
