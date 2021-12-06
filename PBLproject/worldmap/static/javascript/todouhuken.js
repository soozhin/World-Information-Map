var sikutyouson_id = [];
var sikutyouson = [];
var all_sikutyouson = document.getElementsByTagName("path");
var container = document.getElementsByClassName("container");

// https://jsfiddle.net/knLbjc9a/4/
// 上記のサイトからコピペしたコード
// svgの空白のスペースを切り取ってくれる
var svg = document.getElementsByTagName("svg")[0];
var bbox = svg.getBBox();
var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
svg.setAttribute("viewBox", viewBox);

// 新しい「label」を作り，国の名前を入れる
const sikutyouson_population_textbox = document.createElement("label");
sikutyouson_population_textbox.setAttribute("for", "sikutyouson-population-textbox");
sikutyouson_population_textbox.style.position = "absolute";
sikutyouson_population_textbox.style.background = "red";

// 世界地図にあるすべての国のidタグを保存しておく
// そして，idによって各国のタグを保存しておく
// それぞれの国にmouseoverが発生したら，自分の国名を表示させて，
// ポインターが出たら(mouseout)，初期値に戻す
// 「label」をマウスの少し上のところに表示させる
// たまに「label」が上に行きすぎると，下に表示させる
for (var i = 0; i < all_sikutyouson.length; i++) {
    sikutyouson_id[i] = all_sikutyouson[i].getAttribute("id");
    sikutyouson[i] = document.getElementById(sikutyouson_id[i])
    sikutyouson[i].addEventListener("mouseover", showsikutyousonPopulation);
    sikutyouson[i].addEventListener("mouseout", hidesikutyousonPopulation);
}

function showsikutyousonPopulation(event) {
    sikutyouson_population_textbox.innerHTML = this.getAttribute("title");
    var mouse_x = event.clientX;
    var mouse_y = event.clientY;
    var textbox_x = mouse_x - sikutyouson_population_textbox.clientWidth / 2 + window.pageXOffset;
    var textbox_y = mouse_y - 30 + window.pageYOffset;
    if (window.pageYOffset + 10 > textbox_y) {
        textbox_y = mouse_y + 10 + window.pageYOffset;
    }
    sikutyouson_population_textbox.style.top = textbox_y;
    sikutyouson_population_textbox.style.left = textbox_x;
    sikutyouson_population_textbox.style.zIndex = 1;
    document.body.appendChild(sikutyouson_population_textbox);
}


function hidesikutyousonPopulation(event) {
    sikutyouson_population_textbox.innerHTML = "";
}