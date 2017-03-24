'use strict';

var dataset = [ 5, 10, 15, 20, 25 ];

d3.select("body").selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text(function(d) { return d; })
    .style("color", "red");


console.log(d3.selectAll("p"));
