var colorPickerApp = angular.module('colorPickerApp', []);

colorPickerApp.controller('MainCtrl', function ($scope) {
    $scope.onColorChange = function(r,g,b,a) {
        console.log('onColorChange', r, g, b, a); // user function
    };
});

colorPickerApp.directive('colorPicker', function () {
    return {
        scope: {
            r: '@initR',
            g: '@initG',
            b: '@initB',
            a: '@initA',
            onChange: '&'
        },

        restrict: 'E',
        templateUrl: 'template/color-picker.html',
        link: function(scope) {
            var COLORS = ['r', 'g', 'b', 'a'];

            COLORS.forEach(function(value) {
                scope.$watch(value, function(newValue, oldValue) {
                    if (newValue !== oldValue) {
                        if (angular.isFunction(scope.onChange)) {
                scope.onChange(generateColorChangeObject());
                        }
                    }
                });
            });

            var generateColorChangeObject = function() {
                var obj = {};

                COLORS.forEach(function(value) {
                    obj[value] = scope[value];
                });

                return obj;
            };
        }
    };
});


//<<<<<<<<<<<<<<<Read Isolated Scopes >>>>>>>>>>>>>>

/*Listing 2.38 shows how you can establish a number of connections to the parent scope, despite using an isolated scope. As such, you can access the data and functions of the parent scope. The main factor is that you no longer assign an empty object to the scope property of the DDO. Instead, you specify a configuration object. The key in this configuration object is how you specify which scope variables from the directive’s isolated scope should connect to the parent scope. As already mentioned, there are basically three forms. These are specified by the prefixes =, @ and &.

=. Indicates that the scope variable in the isolated scope of the directive that is specified as the key is to establish a two-way data binding to a variable in the parent scope.
@. Indicates that the scope variable in the directive’s isolated scope that is specified as the key is to establish a one-way data binding to the parent scope.
&. Indicates that the scope variable specified as the key should reference a function in the parent scope and be able to invoke the function and pass internal data from the directive.*/
