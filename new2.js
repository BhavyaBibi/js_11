function calcAvgHeight(data) {
    let acc = 0,
        i = 0;
  
    for (let k in data) {
        acc += data[k].height;
        i++;
    }
  
    return (i === 0) ? null : acc / i;
}

let avgHeight = calcAvgHeight({
    Matt: { height: 174, weight: 69 },
    Jason: { height: 190, weight: 103 }
});

console.log(avgHeight);