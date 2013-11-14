define("test1", [], function () {
    function Test1() {
        this.a = "A";
        this.b = "B";

        this.alert = function () {
            alert("Test1: " + this.a + this.b);
        };

        this.loadAriaTable = function (containerId) {
            $.get("aria_table.html", function (data) {
                var container = $("#" + containerId);
                container.html(data);
                container.focus();
            });
        };

    }

    window.test1 = new Test1();
});