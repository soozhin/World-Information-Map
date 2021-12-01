var country_id = [];
var country = [];
var all_country = document.getElementsByTagName("path");
var container = document.getElementsByClassName("container");

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

function showCountryPopulation(event) {
    country_population_textbox.innerHTML = this.getAttribute("title");
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