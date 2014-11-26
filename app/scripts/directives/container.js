angularDashboardApp.directive("dashboardContainer", ["$injector", "$compile", function($injector, $compile)
{
    return {
        restrict: 'A',
        link: function($scope, element, attrs, ctrl, transclude)
        {
            var widgets = element.children();

            element.removeAttr('dashboard-container').attr('gridster', '').addClass('dashboard-container');

            angular.forEach(widgets, function (widget) {
                var widgetElements = angular.element(widget),
                    layoutDataRaw = widgetElements.attr('layout'),
                    layoutData = JSON.parse('[' + layoutDataRaw + ']');

                widgetElements.attr('gridster-item', '')
                    .attr('dashboard-widget', '')
                    .attr('col', layoutData[0])
                    .attr('row', layoutData[1])
                    .attr('size-x', layoutData[2])
                    .attr('size-y', layoutData[3]);
            });

            $scope.gridsterOpts = {
                margins: [20, 20],
                outerMargin: false,
                pushing: true,
                floating: true,
                draggable: {
                    enabled: true
                },
                resizable: {
                    enabled: true,
                    handles: ['n', 'e', 's', 'w', 'se', 'sw']
                }
            };

            $compile(element)($scope);
        }
    };


}]);