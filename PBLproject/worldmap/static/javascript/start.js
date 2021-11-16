var country_population = document.getElementById("country-population");
var country_id = [];
var country = [];
var all_country = document.getElementsByTagName("path");
var default_country_population = "Country name and population";
var container = document.getElementsByClassName("container");

// 表示のところに初期化する
country_population.innerHTML = default_country_population;

const country_population_textbox = document.createElement("label");
country_population_textbox.setAttribute("for", "country-population-textbox");
country_population_textbox.style.position = "absolute";
country_population_textbox.style.background = "red";

// 世界地図にあるすべての国のidタグを保存しておく
// そして，idによって各国のタグを保存しておく
// それぞれの国にmouseoverが発生したら，自分の国名を表示させて，
// ポインターが出たら(mouseout)，初期値に戻す
for (var i = 0; i < all_country.length; i++) {
    country_id[i] = all_country[i].getAttribute("id");
    country[i] = document.getElementById(country_id[i])
    country[i].addEventListener("mouseover", showCountryPopulation);
    country[i].addEventListener("mouseout", showDefaultCountryPopulation);
}

function showCountryPopulation(event) {
    country_population.innerHTML = this.getAttribute("title");
    country_population_textbox.innerHTML = this.getAttribute("title");
    var mouse_x = event.clientX;
    var mouse_y = event.clientY;
    country_population_textbox.style.top = mouse_y - 25;
    country_population_textbox.style.left = mouse_x - 10;
    country_population_textbox.style.zIndex = 1;
    country_population.appendChild(country_population_textbox);
}

function showDefaultCountryPopulation() {
    country_population.innerHTML = default_country_population;
}