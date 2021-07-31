Array.prototype.frequencies = function() {
    var l = this.length, result = {all:[]};
    while (l--){
       result[this[l]] = result[this[l]] ? ++result[this[l]] : 1;
    }
    // all pairs (label, frequencies) to an array of arrays(2)
    for (var l in result){
       if (result.hasOwnProperty(l) && l !== 'all'){
          result.all.push([ l,result[l] ]);
       }
    }
    return result;
};

var freqs = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].frequencies();
alert(freqs[2]); //=> 5
// or
var freqs = '1,1,2,one,one,2,2,22,three,four,five,three,three,five'
             .split(',')
             .frequencies();
alert(freqs.three); //=> 3