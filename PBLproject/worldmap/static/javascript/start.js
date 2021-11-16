var country_population = document.getElementById("country-population");
var country_id = [];
var country = [];
var all_country = document.getElementsByTagName("path");
var default_country_population = "Country name and population";

// 表示のところに初期化する
country_population.innerHTML = default_country_population;

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

function showCountryPopulation() {
    country_population.innerHTML = this.getAttribute("title");
}

function showDefaultCountryPopulation() {
    country_population.innerHTML = default_country_population;
}