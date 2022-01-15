// define url
var prefecture_title = document.title;
var csv_url = "static/csv/"+ prefecture_title + "PopulationData.csv"

PlotPrefecture()
    .then(EventFunction)
    .catch(err => {
        console.log(err);
});

async function PlotPrefecture(){
    try{
        return await new Promise((resolve, reject) => {
            // https://jsfiddle.net/knLbjc9a/4/
            // 上記のサイトからコピペしたコード
            // svgの空白のスペースを切り取ってくれる
            var svg = document.getElementsByTagName("svg")[0];
            var bbox = svg.getBBox();
            var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
            resolve(svg.setAttribute("viewBox", viewBox));
        });
    }catch(err){
        console.log(err);
    }
}

const city_arr = fetch(csv_url, {
    method:"GET",
}).then(response => response.text())
.then(text => {
    var result = [];
    var tmp = text.split('\n');

    for(let i=0; i<tmp.length; i++){
        result[i] = tmp[i].split(',');
    }
    return result;
})
.then(response => {
    return response.reduce((acc, val) => {
        var [key, value] = val;
        acc[key] = value;
        return acc;
    }, {});
})
.catch(err => {
    console.log(err);
});

function SetColor(str){
    let city_keys = Object.keys(str);

    const city_id = [];
    for(let i=0; i<city_keys.length; i++){
        var query_string = `[title="${city_keys[i]}"]`;
        var tmp_city_id = document.querySelector(query_string);
        city_id.push(tmp_city_id.id);
    }

    city2code = city_id.reduce((acc, cur, idx) => {
        acc[city_keys[idx]] = cur;
        return acc;
    }, {});

    for(let i in city2code){
        let pop = str[i];
        if(pop>=500000){
            $('#'+city2code[i]).css("fill", "mediumblue");
        }else if(50000<=pop && pop<500000){
            $('#'+city2code[i]).css("fill", "royalblue");
        }else{
            $('#'+city2code[i]).css("fill", "lightskyblue");
        }
    }
}

async function EventFunction() {
    var city_id = [];
    var city = [];
    var all_city = document.getElementsByTagName("path");

    var multiArr_for_city = await city_arr;

    SetColor(multiArr_for_city);

    // 新しい「label」を作り，国の名前を入れる
    const city_population_textbox = document.createElement("label");
    city_population_textbox.setAttribute("for", "city-population-textbox");
    city_population_textbox.style.position = "absolute";

    // 世界地図にあるすべての国のidタグを保存しておく
    // そして，idによって各国のタグを保存しておく
    // それぞれの国にmouseoverが発生したら，自分の国名を表示させて，
    // ポインターが出たら(mouseout)，初期値に戻す
    // 「label」をマウスの少し上のところに表示させる
    // たまに「label」が上に行きすぎると，下に表示させる
    for (let i = 0; i < all_city.length; i++) {
        city_id[i] = all_city[i].getAttribute("id");
        city[i] = document.getElementById(city_id[i]);
        city[i].addEventListener("mouseover", showCityPopulation);
        city[i].addEventListener("mouseout", hideCityPopulation);
    }

    function showCityPopulation(event) {
        var city_name = this.getAttribute("title");
        var city_information = multiArr_for_city[city_name];

        city_population_textbox.innerHTML = city_name + "\n" + city_information;

        var mouse_x = event.clientX;
        var mouse_y = event.clientY;
        var textbox_x = mouse_x - city_population_textbox.clientWidth / 2 + window.pageXOffset;
        var textbox_y = mouse_y - 40 + window.pageYOffset;
        if (window.pageYOffset + 10 > textbox_y) {
            textbox_y = mouse_y + 10 + window.pageYOffset;
        }
        city_population_textbox.style.top = textbox_y;
        city_population_textbox.style.left = textbox_x;
        city_population_textbox.style.zIndex = 1;
        city_population_textbox.style.padding = "5px";
        city_population_textbox.style.background = "white";
        city_population_textbox.style.padding = "5px";

        document.body.appendChild(city_population_textbox);
    }

    function hideCityPopulation() {
        city_population_textbox.innerHTML = "";
        city_population_textbox.style.padding = "0";
    }

    // hover
    $(".land").hover(function() {
        $(this).css("fill-opacity", "0.3");
    }, function() {
        $(this).css("fill-opacity", "1");
    });
}