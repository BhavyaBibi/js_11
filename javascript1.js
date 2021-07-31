function setup() {
    var lis = document.querySelectorAll('ul li');
    for (var i = 0; i < lis.length; i++) {
      lis[i].addEventListener('click', function(e) {
        // Write your code here
        
      });
    }
  }
  
  // Example case. 
  document.body.innerHTML = `
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>`;
  
  setup();
  
  document.getElementsByTagName("li")[1].click();
  console.log(document.body.innerHTML);