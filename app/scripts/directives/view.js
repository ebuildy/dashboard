angularDashboardApp.directive("qwView", function()
{
    function link(scope, element, attrs, ctrl, transclude)
    {
        transclude(scope, function(clone, scope) {
            element.append(clone);
        });
    }

    return {
        restrict: 'EA',
        link: link,
        transclude: true,
        template: '<div class="view" ng-transclude>toto</div>',
        scope: {
        }
    };


});