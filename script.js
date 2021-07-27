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

const globalPlayer ={
    id:0,
    name:"ajay",
    age:20
}

const {name,...rest}=globalPlayer;
console.log(name);
console.log(rest);