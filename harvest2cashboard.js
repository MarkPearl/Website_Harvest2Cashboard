angular.module('h2cApp', [])
    .controller('harvest2CashboardController', function($http) {
        var h2c = this;

        h2c.doSomething = function() {
            alert(h2c.userName + ' : ' + h2c.password + " : " + h2c.subdomain);

            var successCallback = function(res) {
                alert(res.data.records);
            };

            var errorCallback = function(err) {
                alert('failed');
            };

            var config = {};
            $http.get('http://www.w3schools.com/angular/customers.php', config).then(successCallback, errorCallback);
        };
    });
