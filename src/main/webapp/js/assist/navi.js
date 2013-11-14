define('assist/navi', [], function () {
        var navi = {};
        navi.assistedFocus =
            function assistedFocus(event, nextElementId) {
                event.preventDefault();

                var element = $(nextElementId);
                if (!element) {
                    throw "no element with id " + nextElementId;
                }
                element.focus();
            }
        ;

        window.navi = navi;
    }
);