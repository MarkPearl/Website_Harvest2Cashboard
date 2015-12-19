angular.module('h2cApp', [])
    .controller('harvest2CashboardController', function() {
        var h2c = this;
        h2c.doSomething = function() {
            alert('boo');
            $http({
                    method: 'GET',
                    url: '/'
            }).then(function successCallback(response) {
                alert('success');
            }, function errorCallback(response) {
                alert('failed');
            }
        };
    });
