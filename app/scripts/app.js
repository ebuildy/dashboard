var angularDashboardApp = angular.module('angular-dashboard', ['gridster']);

function formatNumber(value)
{
    return ("" + value).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}