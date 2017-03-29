'use strict';

//var dataset = [ 5, 10, 15, 20, 25 ];
//bar chart
// d3.select("body").selectAll("div")
//     .data(dataset)
//     .enter()
//     .append("div")
//     .attr("class", "bar")
//     .style("height", function(d) {
//     return d + "px";
//   });


// console.log(d3.selectAll("p"));
// //svg
// var w = 500;
// var h = 100;
// var barPadding = 1;
//
// var svg = d3.select("body")
//       .append("svg")
//       .attr("width", w)
//       .attr("height", h);

// var circles = svg.selectAll("circle")
//     .data(dataset)
//     .enter()
//     .append("circle");
//
//     circles.attr("cx", function(d, i) {
//       return (i * 50) + 25;
//     })
//      .attr("cy", h/2)
//      .attr("r", function(d) {
//       return d;
//      })
//      .attr("fill", "yellow")
//      .attr("stroke", "orange")
//      .attr("stroke-width", function(d) {
//       return d/2;
//      });

//updated bar chart

  // svg.selectAll("rect")
  //    .data(dataset)
  //    .enter()
  //    .append("rect")
  //    .attr("x", function(d, i) {
  //        return i * (w / dataset.length);
  //    })
  //    .attr("y", function(d) {
  //      return h - (d * 4);
  //    })
  //    .attr("width",  w / dataset.length - barPadding)
  //    .attr("height", function(d) {
  //         return d * 4;
  //     });

//scale - input/domain output/range
// var w = 500;
// var h = 100;

// var dataset = [
//                 [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
//                 [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
//               ];
//
// var xScale = d3.scale.linear()
//                      .domain([0, d3.max(dataset, function(d) { return d[0]; })])
//                      .range([0, w]);
//
// var yScale = d3.scale.linear()
//                     .domain([0, d3.max(dataset, function(d) { return d[1]; })])
//                     .range([0, h]);
//
// var svg = d3.select("body")
//   .append("svg")
//   .attr("width", w)
//   .attr("height", h);
//
//   svg.selectAll("circle")
//     .data(dataset)
//     .enter()
//     .append("circle")
//     .attr("cx", function(d) {
//    		return d[0];
//     })
//     .attr("cy", function(d) {
//    		return d[1];
//     })
//     .attr("r", function(d) {
//    		return Math.sqrt(h - d[1]);
//     });
//
//   svg.selectAll("text")
//      .data(dataset)
//      .enter()
//      .append("text")
//      .text(function(d) {
//         return d[0] + " , " + d[1];
//      })
//      .attr("x", function(d) {
//         return d[0];
//      })
//      .attr("y", function(d) {
//         return d[1];
//      })
//      .attr("font-family", "sans-serif")
//      .attr("font-size", "11px")
//      .attr("fill", "red");

// var w = 500;
// var h = 100;
//
// var dataset = [
//         [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
//         [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
//         ];
// //
// // //Create SVG element
// var svg = d3.select("body")
//       .append("svg")
//       .attr("width", w)
//       .attr("height", h);
//
// svg.selectAll("circle")
//    .data(dataset)
//    .enter()
//    .append("circle")
//    .attr("cx", function(d) {
//       return d[0];
//    })
//    .attr("cy", function(d) {
//       return d[1];
//    })
//    .attr("r", function(d) {
//       return Math.sqrt(h - d[1]);
//    });
//
// svg.selectAll("text")
//    .data(dataset)
//    .enter()
//    .append("text")
//    .text(function(d) {
//       return d[0] + "," + d[1];
//    })
//    .attr("x", function(d) {
//       return d[0];
//    })
//    .attr("y", function(d) {
//       return d[1];
//    })
//    .attr("font-family", "sans-serif")
//    .attr("font-size", "11px")
//    .attr("fill", "red");


//pie-chart
//Width and height
var w = 300;
var h = 300;

var dataset = [ 5, 10, 20, 45, 6, 25 ];
//
var outerRadius = w / 2;
var innerRadius = 0;
var arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);
//
var pie = d3.pie();

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
    .text(function(d) {
      return d.value;
    });
