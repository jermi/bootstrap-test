define("test2", [], function () {
    function Test2() {
        this.c = "C";
        this.d = "D";

        this.alert = function () {
            alert("Test2 " + this.c + this.d);
        };
    }

    window.test2 = new Test2();
});