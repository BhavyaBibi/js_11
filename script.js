spread operator

const globalPlayer = {
    id:0,
    name:"bot"
    powerLevel: 100,
};

const player1 ={...globalPlayer};//copy
player1.powerLevel=50
console.log(player1);
console.log(globalPlayer);

