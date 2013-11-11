function Test2() {
    this.c = "C";
    this.d = "D";

    this.alert = function () {
        alert("Test2 " + this.c + this.d);
    }
}

var test2 = new Test2();