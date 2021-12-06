// https://jsfiddle.net/knLbjc9a/4/
// 上記のサイトからコピペしたコード
// svgの空白のスペースを切り取ってくれる
var svg = document.getElementsByTagName("svg")[0];
var bbox = svg.getBBox();
var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
svg.setAttribute("viewBox", viewBox);