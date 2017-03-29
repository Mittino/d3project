var w = 300;
var h = 300;


var dataset = d3.csv("food.csv", function(data) {
    console.log(data);
});

var outerRadius = w / 2;
var innerRadius = 0;
var arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);
//
var pie = d3.pie()
  .value(function(d) { return d.percent; })
  .sort(null);;

//Easy colors accessible via a 10-step ordinal scale
var color = d3.scaleOrdinal(d3.schemeCategory10);

//Create SVG element
var svg = d3.select("body")
      .append("svg")
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
    .attr("fill", function(d, i) {
      return color(i);
    })
    .attr("d", arc);

//Labels
arcs.append("text")
    .attr("transform", function(d) {
      return "translate(" + arc.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function(d, i) {
      console.log(d);
      return d.data.title;
    })
    .style('fill', 'white')
    .style('font-family', 'sans-serif')
    .style('font-size', '15px');
