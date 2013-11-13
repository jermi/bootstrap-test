// RequireJS configuration
require.config({
    baseUrl: "js"
});

require(['test1', 'test2'], function () {
    console.log("scripts loaded");
});