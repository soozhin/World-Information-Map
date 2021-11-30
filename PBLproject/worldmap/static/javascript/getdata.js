function getCSV() {
    var request = new XMLHttpRequest();
    request.open("GET", "static/csv/WorldPopulationData.csv", true);
    request.send(null);
 
    request.onload = function () {
        splitCSV(request.responseText)
    }
 }

 function splitCSV(str) {
    var result = [];
    var tmp = str.split("\n");
 
    for (var i = 0; i < tmp.length; ++i) {
        result[i] = tmp[i].split(',');
    }
 
    //alert(result[0][1]);
    
 }
 getCSV();
 

//  function test(x,y){
//      return x+y;
//  }
//  console.log(test(3,4));