import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm"

import { dataset } from './data.js'

d3.select("main").selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text(d => d.at(0) + ": " + d.at(1) + " | " + d.at(2) + " - " + d.at(-1))
