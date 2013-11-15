define("pack1/pack1a/mod1a",
    ['jquery', 'text!pack1/pack1a/mod1a.html', 'text!pack1/pack1a/mod1a.css'],
    function (jquery, template, css) {
        var added = false;
        window.mod1a = {};
        window.mod1a.alert = function () {
            alert('mod1a');
        };
        window.mod1a.add = function (elementId) {
            if (!added) {
                $('head').append('<style>' + css + '</style>');
                added = true;
            }
            jquery(elementId).html(template);
        };
    }
);