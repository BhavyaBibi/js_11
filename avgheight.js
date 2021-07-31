function calcAvgHeight(data) {
    // Calculate average height from received data. If no data, return null.
    var c = 0;
    var l = 0;
    for (var p in data) {
        if (data.hasOwnProperty(p)) {
            c += data[p].height;
            l++;
        } else {
            return null;
        }
        return c/2;
    }
  }
  
  var avgHeight = calcAvgHeight({
    Matt: { height: 174, weight: 69 },
    Jason: { height: 190, weight: 103 }
  });
  console.log(avgHeight);