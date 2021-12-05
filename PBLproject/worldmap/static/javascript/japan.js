var todouhuken_population = document.getElementById("todouhuken-population");
var todouhuken_id = [];
var todouhuken = [];
var all_todouhuken = document.getElementsByTagName("path");
var default_todouhuken_population = "todouhuken name and population";
var container = document.getElementsByClassName("container");
//ここにどんどん日本の情報をいれよう!!!
var multiArr_for_japan=[];

// 表示のところに初期化する
todouhuken_population.innerHTML = default_todouhuken_population;

// 新しい「label」を作り，都道府県の名前を入れる
const todouhuken_population_textbox = document.createElement("label");
todouhuken_population_textbox.setAttribute("for", "todouhuken-population-textbox");
todouhuken_population_textbox.style.position = "absolute";
todouhuken_population_textbox.style.background = "red";

// 日本地図にあるすべての都道府県のidタグを保存しておく
// そして，idによって各都道府県のタグを保存しておく
// それぞれの都道府県にmouseoverが発生したら，自分の都道府県名を表示させて，
// ポインターが出たら(mouseout)，初期値に戻す
// 「label」にマウスの位置を提供して，マウスの少し上のところに表示させる
for (var i = 0; i < all_todouhuken.length; i++) {
    todouhuken_id[i] = all_todouhuken[i].getAttribute("id");
    todouhuken[i] = document.getElementById(todouhuken_id[i])
    todouhuken[i].addEventListener("mouseover", showtodouhukenPopulation);
    todouhuken[i].addEventListener("mouseout", showDefaulttodouhukenPopulation);
}

function getCSV() {
    var request = new XMLHttpRequest();
    request.open("GET", "static/csv/JapanPopulationData.csv", true);
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
    multiArr_for_japan=multiArray2Obj(result);
    console.log(multiArr_for_japan);
}

var multiArray2Obj = arr => {
    return arr.reduce((acc,val) => {
        var [key, value]=val;
        acc[key]=value;
        return acc;
    },{});
}
getCSV();

function showtodouhukenPopulation(event) {
    todouhuken_population.innerHTML = this.getAttribute("title");
    todouhuken_population_textbox.innerHTML = this.getAttribute("title");
    var prefecture_name = this.getAttribute("title");
    var prefecture_information = multiArr_for_japan[prefecture_name]/10+"万";

    todouhuken_population_textbox.innerHTML = prefecture_name+"\n"+prefecture_information;

    var mouse_x = event.clientX;
    var mouse_y = event.clientY;
    todouhuken_population_textbox.style.top = mouse_y - 25;
    todouhuken_population_textbox.style.left = mouse_x - 10;
    todouhuken_population_textbox.style.zIndex = 1;
    todouhuken_population.appendChild(todouhuken_population_textbox);
}

function showDefaulttodouhukenPopulation() {
    todouhuken_population.innerHTML = default_todouhuken_population;
}
