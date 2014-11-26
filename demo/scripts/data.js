angularDashboardDemoApp.factory("elasticSearchData", ["$http", function($http)
{
    function postSearchQuery(data)
    {
        return $http.post('http://10.100.100.101:9200/de_content_201410/_search', data);
    }

    function postTermFacet(field)
    {
        var dotPosition = field.indexOf('.'), query = {};//getEsQuery();

        if (dotPosition > 0)
        {
            var nested = field.substr(0, dotPosition);

            query['facets'] =
            {
                "terms": {
                    "nested" : nested,
                    "terms": {
                        "field": field,
                        "size": 10,
                        "order": "count"
                    }
                }
            };

            query['size'] = 0;
        }

        return postSearchQuery(query);
    }

    return {
        fetch: function(params)
        {
            var query = params.query;

            if (query === 'term_facet')
            {
                return postTermFacet(params.field);
            }

            return postSearchQuery({});
        }
    };
}]);