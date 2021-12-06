var todouhuken_id = [];
var todouhuken = [];
var all_todouhuken = document.getElementsByTagName("path");
var container = document.getElementsByClassName("container");

// https://jsfiddle.net/knLbjc9a/4/
// 上記のサイトからコピペしたコード
// svgの空白のスペースを切り取ってくれる
var svg = document.getElementsByTagName("svg")[0];
var bbox = svg.getBBox();
var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
svg.setAttribute("viewBox", viewBox);

// 新しい「label」を作り，国の名前を入れる
const todouhuken_population_textbox = document.createElement("label");
todouhuken_population_textbox.setAttribute("for", "todouhuken-population-textbox");
todouhuken_population_textbox.style.position = "absolute";
todouhuken_population_textbox.style.background = "red";

// 世界地図にあるすべての国のidタグを保存しておく
// そして，idによって各国のタグを保存しておく
// それぞれの国にmouseoverが発生したら，自分の国名を表示させて，
// ポインターが出たら(mouseout)，初期値に戻す
// 「label」をマウスの少し上のところに表示させる
// たまに「label」が上に行きすぎると，下に表示させる
for (var i = 0; i < all_todouhuken.length; i++) {
    todouhuken_id[i] = all_todouhuken[i].getAttribute("id");
    todouhuken[i] = document.getElementById(todouhuken_id[i])
    todouhuken[i].addEventListener("mouseover", showtodouhukenPopulation);
    todouhuken[i].addEventListener("mouseout", hidetodouhukenPopulation);
}

function showtodouhukenPopulation(event) {
    todouhuken_population_textbox.innerHTML = this.getAttribute("title");
    var mouse_x = event.clientX;
    var mouse_y = event.clientY;
    var textbox_x = mouse_x - todouhuken_population_textbox.clientWidth / 2 + window.pageXOffset;
    var textbox_y = mouse_y - 30 + window.pageYOffset;
    if (window.pageYOffset + 10 > textbox_y) {
        textbox_y = mouse_y + 10 + window.pageYOffset;
    }
    todouhuken_population_textbox.style.top = textbox_y;
    todouhuken_population_textbox.style.left = textbox_x;
    todouhuken_population_textbox.style.zIndex = 1;
    document.body.appendChild(todouhuken_population_textbox);
}


function hidetodouhukenPopulation(event) {
    todouhuken_population_textbox.innerHTML = "";
}