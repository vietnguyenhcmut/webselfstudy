let student = {
    name: "Nguyen Van Viet",
    dob: "01/04/2001",
    age: 22,
    introduce: function() {
        document.write("Hello")
    }
}

function myfunc() {
    document.getElementById("introduce").innerHTML = "hello world"
}