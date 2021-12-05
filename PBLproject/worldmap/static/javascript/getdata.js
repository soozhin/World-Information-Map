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
 
    alert(result[0][1]);
    
 }
 getCSV();
 
function array2JsonObject(arr){
    var key = arr[0];

    var newArr = arr.slice(1,arr.length);

    var json = [], data = newArr, cols = key, l = length;

    for(var i=0;i<data.length; i++){
        var d=data[i], o={};
        for(var j=0;j<l;j++){
            o[cols[j]]=d[j];
        }
        json.push(o);
    }
    return json;
}

//  function test(x,y){
//      return x+y;
//  }
//  console.log(test(3,4));