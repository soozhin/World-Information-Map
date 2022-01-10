// define url
var csv_url="static/csv/JapanPopulationData.csv"

// 関数の実行
PlotJapan()
.then(EventFunction)
.catch(err=>{
    console.log(err);
});

// 日本の描画
async function PlotJapan(){
    try{
        return await new Promise((resolve, reject) => {
            var svg = document.getElementsByTagName("svg")[0];
            var bbox = svg.getBBox();
            var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
            resolve(svg.setAttribute("viewBox", viewBox));
        });
    }catch(err){
        console.log(err);
    }
}

// csvファイルを入手
const pre_arr = fetch(csv_url,{
    method:"GET",
}).then(response=>response.text())
.then(text=>{
    var result = [];
    var tmp = text.split("\n");
        
    for(var i = 0; i < tmp.length; ++i) {
        result[i] = tmp[i].split(',');
    }
    return result;
})
.then(response=>{
    return response.reduce((acc,val)=>{
        var [key, value] = val;
        acc[key] = value;
        return acc;
    },{});
})
.catch(err=>{
    console.log(err);
});

// 色の設定
function SetColor(str){
    let pref_keys = Object.keys(str);

    const pref_id=[];
    for (let i=0; i<47; i++){
        if (i<9){
            let j = i+1;
            pref_id[i] = "JP-0"+j;
        }else{
            let k=i+1
            pref_id[i] = "JP-"+k;
        }
    }

    pref2code = pref_id.reduce((acc,cur,idx)=>{
        acc[pref_keys[idx]] = cur;
        return acc;
    },{});

    for (let i in pref2code){
        let pop = str[i];
        if(pop>5000){
            $("#"+pref2code[i]).css("fill","mediumblue");
        }else if(1000<pop && pop<=5000){
            $("#"+pref2code[i]).css("fill","royalblue");
        }else{
            $("#"+pref2code[i]).css("fill","lightskyblue");
        }
    }
}

// イベントの定義
async function EventFunction(){
    var todouhuken_id = [];
    var todouhuken = [];
    var all_todouhuken = document.getElementsByTagName("path");
    var container = document.getElementsByClassName("container");
    var pref2code=[];

    var multiArr_for_japan = await pre_arr;

    SetColor(multiArr_for_japan);

    const todouhuken_population_textbox = document.createElement("label");
    todouhuken_population_textbox.setAttribute("for", "todouhuken-population-textbox");
    todouhuken_population_textbox.style.position = "absolute";

    for (let i = 0; i < all_todouhuken.length; i++) {
        todouhuken_id[i] = all_todouhuken[i].getAttribute("id");
        todouhuken[i] = document.getElementById(todouhuken_id[i])
        todouhuken[i].addEventListener("mouseover", showtodouhukenPopulation);
        todouhuken[i].addEventListener("mouseout", showDefaulttodouhukenPopulation);
    }

    function showtodouhukenPopulation(event) {
        var prefecture_name = this.getAttribute("title");
        var prefecture_information = multiArr_for_japan[prefecture_name] / 10 + "万";
    
        todouhuken_population_textbox.innerHTML = prefecture_name + "\n" + prefecture_information;
    
        var mouse_x = event.clientX;
        var mouse_y = event.clientY;
        var textbox_x = mouse_x - todouhuken_population_textbox.clientWidth / 2 + window.pageXOffset;
        var textbox_y = mouse_y - 40 + window.pageYOffset;
        if (window.pageYOffset + 10 > textbox_y) {
            textbox_y = mouse_y + 10 + window.pageYOffset;
        }
        todouhuken_population_textbox.style.top = textbox_y;
        todouhuken_population_textbox.style.left = textbox_x;
        todouhuken_population_textbox.style.zIndex = 1;
        todouhuken_population_textbox.style.padding = "5px";
        todouhuken_population_textbox.style.background = "white";
        todouhuken_population_textbox.style.padding = "5px";
    
        document.body.appendChild(todouhuken_population_textbox);
    }
    
    function showDefaulttodouhukenPopulation() {
        todouhuken_population_textbox.innerHTML = "";
        todouhuken_population_textbox.style.padding = "0";
    }

    // hover
    $(".land").hover(function(){
        $(this).css("fill-opacity","0.3");
    },function(){
        $(this).css("fill-opacity","1");
    });
} 