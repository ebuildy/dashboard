angularDashboardApp.directive("dashboardWidget", ["$injector", "$compile", function($injector, $compile)
{
    return {
        restrict: 'A',
        link: function($scope, element, attrs, ctrl, transclude)
        {
            var nodeChildren = element.children(), nodeBody, nodeBodyErrorView;

            $scope.error = '';

            angular.forEach(nodeChildren, function(node)
            {
                if (node.className === '_body')
                {
                    nodeBody = angular.element(node);

                    var nodeBodyChildren = nodeBody.children();

                    nodeBodyErrorView = nodeBodyChildren[0];
                }
            });

            function run()
            {
                if (!attrs.hasOwnProperty('source'))
                {
                    return false;
                }

                var params = {};

                angular.forEach(attrs.$attr, function(key, item)
                {
                    if (key.indexOf('source-') === 0)
                    {
                        params[key.replace('source-', '')] = attrs[item];
                    }
                });

                element.addClass('loading');

                var dataSource = $injector.get(attrs.source);

                $scope.error = null;

                dataSource.fetch(params).success(function (response)
                {
                    element.removeClass('loading');

                    $scope.data = response;
/*
                    angular.forEach(views, function (view) {
                        var viewScope = angular.element(view).isolateScope();

                        // viewScope.data = $scope.data;
                    });*/
                }).error(function()
                {
                    element.removeClass('loading');

                    $scope.error = 'Error';
                });
            }

            run();

            transclude($scope, function(clone, scope)
            {
                clone.addClass('_view');

                nodeBody.append(clone);
            });

            $scope.$watch('error', function(value)
            {
                if (value === null || value === false || value === '')
                {

                }
                else
                {
                    nodeBodyErrorView
                }
            });
        },
        transclude: true,
        template: '<div class="_header"> <span class="_title">{{title}}</span> </div> <div class="_body"> <div class="_view _error"></div> </div>',
        scope: {
            title: '@title'
        }
    };


}]);