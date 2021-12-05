var country_id = [];
var country = [];
var all_country = document.getElementsByTagName("path");
//ここにどんどん国情報を入れてこう！
var multiArr=[];


// https://jsfiddle.net/knLbjc9a/4/
// 上記のサイトからコピペしたコード
// svgの空白のスペースを切り取ってくれる
var svg = document.getElementsByTagName("svg")[0];
var bbox = svg.getBBox();
var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
svg.setAttribute("viewBox", viewBox);

// 新しい「label」を作り，国の名前を入れる
const country_population_textbox = document.createElement("label");
country_population_textbox.setAttribute("for", "country-population-textbox");
country_population_textbox.style.position = "absolute";
country_population_textbox.style.background = "red";

// 世界地図にあるすべての国のidタグを保存しておく
// そして，idによって各国のタグを保存しておく
// それぞれの国にmouseoverが発生したら，自分の国名を表示させて，
// ポインターが出たら(mouseout)，初期値に戻す
// 「label」をマウスの少し上のところに表示させる
// たまに「label」が上に行きすぎると，下に表示させる
for (var i = 0; i < all_country.length; i++) {
    country_id[i] = all_country[i].getAttribute("id");
    country[i] = document.getElementById(country_id[i])
    country[i].addEventListener("mouseover", showCountryPopulation);
    if(country_id[i] == "JP"){
        country[i].addEventListener("mousedown", moveForJapanMap);
    }
    country[i].addEventListener("mouseout", hideCountryPopulation);
}

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
    multiArr=multiArray2Obj(result);
}

var multiArray2Obj = arr => {
    return arr.reduce((acc,val) => {
        var [key, value]=val;
        acc[key]=value;
        return acc;
    },{});
}
getCSV();

function showCountryPopulation(event){
    var country_name = this.getAttribute("title");
    var country_information = multiArr[country_name];

    country_population_textbox.innerHTML = country_name+"\n"+country_information;

    var mouse_x = event.clientX;
    var mouse_y = event.clientY;
    var textbox_x = mouse_x - country_population_textbox.clientWidth / 2 + window.pageXOffset;
    var textbox_y = mouse_y - 30 + window.pageYOffset;
    if (window.pageYOffset + 10 > textbox_y) {
        textbox_y = mouse_y + 10 + window.pageYOffset;
    }
    country_population_textbox.style.top = textbox_y;
    country_population_textbox.style.left = textbox_x;
    country_population_textbox.style.zIndex = 1;
    document.body.appendChild(country_population_textbox);
}

function moveForJapanMap(){
    window.location.href = 'http://127.0.0.1:8000/worldmap/japan';
}

function hideCountryPopulation(event) {
    country_population_textbox.innerHTML = "";
}
