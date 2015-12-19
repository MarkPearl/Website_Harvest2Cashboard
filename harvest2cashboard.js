angular.module('h2cApp', [])
    .controller('harvest2CashboardController', function($http) {
        var h2c = this;

        h2c.doSomething = function() {
            alert(h2c.userName + ' : ' + h2c.password + " : " + h2c.subdomain);
            $http.defaults.headers.common['Authorization'] = btoa('Basic' + h2c.userName + ":" + h2c.password);


            var successCallback = function(res) {
                alert(res.data.records);
            };

            var errorCallback = function(err) {
                alert('failed');
            };

            var config = {};
            var url = "https://" + h2c.subdomain + ".harvestapp.com/clients";
            alert(url);
            $http.jsonp(url,  config).then(successCallback, errorCallback);
        };
    });
