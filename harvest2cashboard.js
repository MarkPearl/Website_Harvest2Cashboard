angular.module('h2cApp', [])
    .controller('harvest2CashboardController', function() {
        var h2c = this;
        h2c.doSomething = function() {
            alert('boo');

            var successCallback = function() {
                alert('success');
            };

            var errorCallback = function() {
                alert('failed');
            };

            $http.get('/someURL', config).then(successCallback, errorCallback);
        };
    });
