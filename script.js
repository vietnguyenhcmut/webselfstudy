// function myfunc() {
//     document.getElementById("introduce").innerHTML = "changed";
// }

import logger from "./logger.js"

const myfunc1 = function myfunction(value) {
    this.value = value
    return (
        value
    )
}

const myfunc2 = (value) => {
    return (
        {value}
    )
}
console.log(myfunc1(6))
console.log(myfunc2(6))
console.log(logger(50))