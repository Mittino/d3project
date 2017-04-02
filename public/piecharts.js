'use strict'

var w = 350;
var h = 350;

// var dataset = [{
//   "percent": "20",
//   "title": "Chocolate"
//   },
//   {
//   "percent": "50",
//   "title": "Dogs"},
//   {
//     "percent": "30",
//     "title": "Mountains"
//   }
// ];

// var dataset;

d3.csv("food.csv", function(data) {
  var dataset = data;
  console.log(data);
  console.log(dataset);
  drawPie(data);
});

d3.csv("activities.csv", function(data) {
  var dataset = data;
  console.log(data);
  console.log(dataset);
  drawPie(data);
});


function drawPie(dataset){
  var outerRadius = w / 2;
  var innerRadius = 50;
  var arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

  var pie = d3.pie()
    .value(function(d) { return d.percent; })
    .sort(null);

//Easy colors accessible via a 10-step ordinal scale
  var color = d3.scaleOrdinal(d3.schemeCategory10);

//Create SVG element
  var svg = d3.select("body")
    .append("svg")
    .attr("class", "pie")
    .attr("width", w)
    .attr("height", h);

//Set up groups
  var arcs = svg.selectAll("g.arc")
    .data(pie(dataset))
    .enter()
    .append("g")
    .attr("class", "arc")
    .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

//Draw arc paths
  arcs.append("path")
    .attr("fill", function(data, i) {
      console.log(data,i);
      return color(i);
    })
    .attr("d", arc);

//Add text
  arcs.append("text")
    .attr("transform", function(d) {
      return "translate(" + arc.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function(d) {
      return d.data.title;
    })
    .style('fill', 'white')
    .style('font-family', 'sans-serif')
    .style('font-size', '12px');
}
