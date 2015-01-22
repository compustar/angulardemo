var AngularTemplateLoader = function () {
    this.load = function (relativePath, cachedPath, $templateCache) {
            var directiveTemplate = null;
            var req = new XMLHttpRequest();
            req.onload = function () {
                directiveTemplate = this.responseText;
            };
            req.open("get", relativePath, false);
            req.send();
            $templateCache.put(cachedPath, directiveTemplate);            
    }    
}
