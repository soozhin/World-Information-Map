var sikutyouson_population = document.getElementById("sikutyouson-population");
var sikutyouson_id = [];
var sikutyouson = [];
var all_sikutyouson = document.getElementsByTagName("path");
var default_sikutyouson_population = "sikutyouson name and population";
var container = document.getElementsByClassName("container");

// 表示のところに初期化する
sikutyouson_population.innerHTML = default_sikutyouson_population;

// 新しい「label」を作り，都道府県の名前を入れる
const sikutyouson_population_textbox = document.createElement("label");
sikutyouson_population_textbox.setAttribute("for", "sikutyouson-population-textbox");
sikutyouson_population_textbox.style.position = "absolute";
sikutyouson_population_textbox.style.background = "red";

// 日本地図にあるすべての都道府県のidタグを保存しておく
// そして，idによって各都道府県のタグを保存しておく
// それぞれの都道府県にmouseoverが発生したら，自分の都道府県名を表示させて，
// ポインターが出たら(mouseout)，初期値に戻す
// 「label」にマウスの位置を提供して，マウスの少し上のところに表示させる
for (var i = 0; i < all_sikutyouson.length; i++) {
    sikutyouson_id[i] = all_sikutyouson[i].getAttribute("id");
    sikutyouson[i] = document.getElementById(sikutyouson_id[i])
    sikutyouson[i].addEventListener("mouseover", showsikutyousonPopulation);
    sikutyouson[i].addEventListener("mouseout", showDefaultsikutyousonPopulation);
}

function showsikutyousonPopulation(event) {
    sikutyouson_population.innerHTML = this.getAttribute("title");
    sikutyouson_population_textbox.innerHTML = this.getAttribute("title");
    var mouse_x = event.clientX;
    var mouse_y = event.clientY;
    sikutyouson_population_textbox.style.top = mouse_y - 25;
    sikutyouson_population_textbox.style.left = mouse_x - 10;
    sikutyouson_population_textbox.style.zIndex = 1;
    sikutyouson_population.appendChild(sikutyouson_population_textbox);
}

function showDefaultsikutyousonPopulation() {
    sikutyouson_population.innerHTML = default_sikutyouson_population;
}