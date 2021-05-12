// objects

// let myobj = {

//     firstname: "john",
//     lastname: "doe"
// };

// myobj.firstname = "jacob";
// delete myobj.firstname;
// console.log(myobj);

// if condition

// let johnAge = 21;
// if (johnAge === 45) {
//     console.log("you are old")
// }
// else if (johnAge <= 30 && johnAge >= 20) {
//     console.log("you are about to be old")
// }
// else {
//     console.log("you are young")
// }

// //switch condition
// let fruits = "banana";

// switch (fruits) {
//     case "orange":
//         console.log("i bought fruit orange");
//         break;
//     case "banana":
//         console.log("i bought fruit banana");
//         break;
//     default:
//         console.log("no fruits found")



// }
//for loop

// let count = 0;
// for (let i = 0; i >= 10; i++) {
//     console.log(i)
// }


//while loop
// let count = 0;
// // while (count <= 10) {
// //     console.log(count)
// //     count++;
// // }

// do {
//     console.log(count);
//     count++;
// }
// while(count<=10)

// for loop with array
let myArray = ['banana', 'kiwi', 'orange', 'apple'];
// for (let i = 0; i < myArray.length; i++) {
//     document.write(myArray[i] + "<br>")
// }

for (let x of myArray) {
    document.write(x + "<br>");
}

