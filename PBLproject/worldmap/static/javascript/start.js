// define url
var csv_url = "static/csv/WorldPopulationData.csv"

PlotWorld()
    .then(EventFunction)
    .catch(err => {
        console.log(err);
    });

async function PlotWorld() {
    try {
        return await new Promise((resolve, reject) => {
            // https://jsfiddle.net/knLbjc9a/4/
            // 上記のサイトからコピペしたコード
            // svgの空白のスペースを切り取ってくれる
            var svg = document.getElementsByTagName("svg")[0];
            var bbox = svg.getBBox();
            var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
            resolve(svg.setAttribute("viewBox", viewBox));
        })
    } catch (err) {
        console.log(err);
    }
}

const country_arr = fetch(csv_url, {
        method: "GET",
    }).then(response => response.text())
    .then(text => {
        var result = [];
        var tmp = text.split('\n');

        for (var i = 0; i < tmp.length; i++) {
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

function SetColor(str) {
    let country_keys = Object.keys(str);

    const country_id = [];
    for (let i = 0; i < country_keys.length; i++) {
        var query_string = `[title="${country_keys[i]}"]`;
        var tmp_country_id = document.querySelector(query_string);
        country_id.push(tmp_country_id.id);
    }

    country2code = country_id.reduce((acc, cur, idx) => {
        acc[country_keys[idx]] = cur;
        return acc;
    }, {});

    for (let i in country2code) {
        let pop = str[i];
        if (pop > 500000000) {
            $('#' + country2code[i]).css("fill", "mediumblue");
        } else if (100000000 < pop && pop <= 500000000) {
            $('#' + country2code[i]).css("fill", "royalblue");
        } else {
            $('#' + country2code[i]).css("fill", "lightskyblue");
        }
    }
}

async function EventFunction() {
    var country_id = [];
    var country = [];
    var all_country = document.getElementsByTagName("path");
    //ここにどんどん国情報を入れてこう！
    var multiArr = [];

    var multiArr_for_country = await country_arr;

    SetColor(multiArr_for_country);

    // https://codepen.io/stack-findover/pen/VwPgQQr
    // 上記のウェブサイトを参考にした
    var scale = 1,
        panning = false,
        pointX = 0,
        pointY = 0,
        start = { x: 0, y: 0 },
        zoom = document.getElementsByTagName("svg")[0];

    function setTransform() {
        zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
    }

    zoom.onmousedown = function(e) {
        e.preventDefault();
        start = { x: e.clientX - pointX, y: e.clientY - pointY };
        panning = true;
        this.style.cursor = "grabbing";
    }

    zoom.onmouseup = function(e) {
        panning = false;
        this.style.cursor = "default";
    }

    zoom.onmousemove = function(e) {
        e.preventDefault();
        if (!panning) {
            return;
        }
        pointX = (e.clientX - start.x);
        pointY = (e.clientY - start.y);
        this.style.cursor = "grabbing";
        setTransform();
    }

    zoom.onwheel = function(e) {
        e.preventDefault();
        var xs = (e.clientX - pointX) / scale,
            ys = (e.clientY - pointY) / scale,
            delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
        (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
        if (delta > 0) {
            pointX = e.clientX - xs * scale + 65;
            pointY = e.clientY - ys * scale + 10;
        } else {
            pointX = e.clientX - xs * scale - 55;
            pointY = e.clientY - ys * scale - 10;
        }


        setTransform();
    }

    // 新しい「label」を作り，国の名前を入れる
    const country_population_textbox = document.createElement("label");
    country_population_textbox.setAttribute("for", "country-population-textbox");
    country_population_textbox.style.position = "absolute";

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
        if (country_id[i] == "JP") {
            country[i].addEventListener("mousedown", moveForJapanMap);
        }
        country[i].addEventListener("mouseout", hideCountryPopulation);
    }

    function showCountryPopulation(event) {
        var country_name = this.getAttribute("title");
        var country_information = multiArr_for_country[country_name];

        country_population_textbox.innerHTML = country_name + "\n" + country_information;

        var mouse_x = event.clientX;
        var mouse_y = event.clientY;
        var textbox_x = mouse_x - country_population_textbox.clientWidth / 2 + window.pageXOffset;
        var textbox_y = mouse_y - 40 + window.pageYOffset;
        if (window.pageYOffset + 10 > textbox_y) {
            textbox_y = mouse_y + 10 + window.pageYOffset;
        }
        country_population_textbox.style.top = textbox_y;
        country_population_textbox.style.left = textbox_x;
        country_population_textbox.style.zIndex = 1;
        country_population_textbox.style.padding = "5px";
        country_population_textbox.style.background = "white";
        country_population_textbox.style.padding = "5px";

        document.body.appendChild(country_population_textbox);
    }

    function moveForJapanMap() {
        window.location.href = 'http://127.0.0.1:8000/worldmap/japan';
    }

    function hideCountryPopulation(event) {
        country_population_textbox.innerHTML = "";
        country_population_textbox.style.padding = "0";
    }

    $(".land").hover(function() {
        $(this).css("fill-opacity", "0.3");
    }, function() {
        $(this).css("fill-opacity", "1");
    });
}