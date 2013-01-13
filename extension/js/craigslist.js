(function () {
    function injectJs(links) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = links[0];
        var callback = function () {
            if (links.length > 1) {
                injectJs(links.slice(1));
            }
        };
        script.addEventListener('load', callback, false);

        (document.head || document.body || document.documentElement).appendChild(script);
    }

    injectJs([
        chrome.extension.getURL("js/lib/jquery-1.8.2.min.js"),
        chrome.extension.getURL("js/lib/underscore-min.js"),
        chrome.extension.getURL("js/posts/edit-post.js"),
        chrome.extension.getURL("js/posts/navigation.js")
    ]);
})();