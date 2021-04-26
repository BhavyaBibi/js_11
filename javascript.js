function myFunc() {
    let a = 5;
    myFuncTwo();
    return a;

}
function myFuncTwo() {
    console.log("completed");

}
function myFuncThree() {
    let b = 10;
    myFuncTwo();
    return b;
}
console.log(myFunc());
console.log(myFuncThree());