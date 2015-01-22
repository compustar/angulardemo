function fancyboxFactory(http, compile) {
    function render(jqSelector, options, scope) {
        if (!options){
            options = { type: 'html' }
        }

        var template = $(jqSelector);

        if (scope){
            var compiledTemplate = compile(template);
            compiledTemplate(scope);
        }

        options.content = template;
        $.fancybox.open(options);
    }

    return {
        openWithUrl: function (url, scope, options) {
            $http.get(url).then(function (response) {
                if (response.status == 200) {
                    render(response.data, options, scope);
                }
            });
        },

        open: render
    }
}