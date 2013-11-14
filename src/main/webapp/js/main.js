// RequireJS configuration
require.config({
    baseUrl: "js"
});

require(['test1', 'test2', 'assist/navi'], function () {
    console.log("scripts loaded");
});