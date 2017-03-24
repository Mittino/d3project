'use strict';

var dataset = [ 5, 10, 15, 20, 25 ];
//bar chart
d3.select("body").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
    return d + "px";
  });


console.log(d3.selectAll("p"));
//svg
var w = 500;
var h = 50;

var svg = d3.select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

var circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");

    circles.attr("cx", function(d, i) {
      return (i * 50) + 25;
    })
     .attr("cy", h/2)
     .attr("r", function(d) {
      return d;
     })
     .attr("fill", "yellow")
     .attr("stroke", "orange")
     .attr("stroke-width", function(d) {
      return d/2;
     });
