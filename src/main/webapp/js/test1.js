define("test1", [], function () {
    function Test1() {
        this.a = "A";
        this.b = "B";

        this.alert = function () {
            alert("Test1: " + this.a + this.b);
        };
    }

    window.test1 = new Test1();
});