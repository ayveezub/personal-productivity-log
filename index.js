import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm"

import { dataset } from './data.js'

const w = 300
const h = 300

const svg = d3.select("div.productivity-log__bar-chart")
              .append("svg")
              .attr("width", w)
              .attr("height", h)

svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", (_, i) => i * 30)
   .attr("y", 0)
   .attr("width", 25)
   .attr("height", d => Math.pow(2, (d.at(1) + d.at(2))) * 4)
   .style("fill", "#00afb5");
