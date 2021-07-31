function numberOfItems(arr, item) {
    // Write the code that goes here
    for(i=0;i<arr; i++){
      item += arr[i]+""
      
      return arr;
      
    }
  }
  
  
  var arr = [
    25,
    "apple",
    ["banana", "strawberry", "apple", 25]
  ];
  var item =""
  console.log(numberOfItems(arr, 25));
  console.log(numberOfItems(arr, "apple"));