// spread operator

// const globalPlayer = ["bhavya", "bibi", "krish"];
// const globalPlayer2 = ["bhavu", "bibu", "krisu"];


// const player1 = globalPlayer.concat(globalPlayer2)

// console.log(player1)

// console.log(globalPlayer);
// console.log(globalPlayer2);

//rest


// const globalPlayer = ["bhavya", "bibi", "krish"];

//ethil bhavyae nammuke vilikanum

// console.log(globalPlayer[0])

// const globalPlayer ={
//     id:0,
//     name:"ajay",
//     age:20
// }

// const {name,...rest}=globalPlayer;
// console.log(name);
// console.log(rest);

//arrow
// function myFunc()
// {
//     console.log("running")
// }
// myFunc();
// const myFunc=(value)=> value+5;
// console.log(myFunc(5))
//for each

// const globalPlayer =[
// {
//          id:0,
//          name:"ajay",
//          age:20,


//     },
//     {
//     id:1,
//     name:"anu",
//     age:20,
//     },
//     {
//         id:2,
//         name:"aswathy",
//         age:20,
//         },
// ]
// globalPlayer.forEach((value,index,array)=> console.log(value.name))
// for(let i=0; i<=globalPlayer.length; i++){
//     console.log(globalPlayer[i]) 
// }
    //Objectage: 20id: 0name: "ajay"[[Prototype]]: Object
// script.js:64 Objectage: 20id: 1name: "anu"[[Prototype]]: Object
// script.js:64 Objectage: 20id: 2name: "aswathy"[[Prototype]]: Object


// const newArray = globalPlayer.map((value)=> value.age===20 && value.id ===1);
// console.log(newArray)
// :[20, 24, 20]


//reduce

// const newArray = globalPlayer.reduce((value)=> value.age===20);
// console.log(newArray)

// const numberArray =[15,10,20,5,50,66,88];
// let total =0;
// for(let i=0; i<numberArray.length; i++){
//     total=total+numberArray[i];
    // total += numberArray[i]

// }
// console.log(total)
//output:254

// function flattenArray(data) {
    // our initial value this time is a blank array
    // const initialValue = [];
  
    // call reduce on our data
    // return data.reduce((total, value) => {
      // if the value is an array then recursively call reduce
      // if the value is not an array then just concat our value
//       return total.concat(Array.isArray(value) ? flattenArray(value) : value);
//     }, initialValue);
//   }
// const value = 0;

// const numbers = [5, 10, 15];

// for(let i = 0; i < numbers.length; i++) {
//   value += numbers[i];
// }

// const globalPlayer =[
//     {
//              id:0,
//              name:"ajay",
//              age:20,
    
    
//         },
//         {
//         id:1,
//         name:"anu",
//         age:20,
//         },
//         {
//             id:2,
//             name:"aswathy",
//             age:23,
//             },
//     ];

// const numberArray=[14,50,20,5,50,66,88]
// const newArray = globalPlayer.reduce((total,value)=> total + value,0);
// console.log(newArray)


//find


const globalPlayer =[
    {
             id:1,
             name:"ajay",
             age:22,
    
    
        },
        {
        id:1,
        name:"anu",
        age:20,
        },
        {
            id:1,
            name:"aswathy",
            age:23,
            },
    ];
    const newObj= globalPlayer.find(value => value.name === "aswathy");
    console.log(newObj)

//sort