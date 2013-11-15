// RequireJS configuration
require.config({
    baseUrl: "js",
    shim: {
        jquery: {
            deps: [],
            exports: 'jQuery'
        },
        bootstrap: {
            deps: ['jquery']
        },
        dataTables: {
            deps: ['jquery']
        }
    },
    paths: {
        text: 'lib/text',
        jquery: 'lib/jquery-1.10.2',
        bootstrap: 'lib/bootstrap'
    }
});

requirejs(["main"]);