
// import * as d3 from 'd3'

// const width = 800
// const height = 400
// const staticColor = "#437c90"
// const hoverColor = "#eec42d"
// const margin = { top: 20, right: 30, bottom: 30, left: 40 }
// const rawData = [
//   { country: "Israel", value: 1263 },
//   { country: "Italy", value: 1660 },
//   { country: "Spain", value: 2814 },
//   { country: "Netherlands", value: 3167 },
//   { country: "China", value: 4131 },
//   { country: "Russia", value: 6148 },
//   { country: "France", value: 7162 },
//   { country: "Germany (FRG)", value: 8653 },
//   { country: "United Kingdom", value: 9214 },
//   { country: "United States", value: 12394 }
// ]

// const data = rawData

// const tooltip = d3
//   .select('body')
//   .append('div')
//   .attr('class', 'd3-tooltip')
//   .style('position', 'absolute')
//   .style('z-index', '10')
//   .style('visibility', 'hidden')
//   .style('padding', '10px')
//   .style('background', 'rgba(0,0,0,0.6)')
//   .style('border-radius', '4px')
//   .style('color', '#fff')
//   .text('a simple tooltip');

// const x = d3
//   .scaleBand()
//   .range([0, width])
//   .domain(data.map(d => d.country))
//   .padding(0.2);

// const y = d3
//   .scaleLinear()
//   .domain([0, d3.max(data, d => d.value)] as Iterable<d3.NumberValue>)
//   .range([height, 0]);

// export const chart = () => {
//   const svg = d3.create("svg")
//     .attr("viewBox", [0, 0, width, height]);

//   const rect = svg
//     .selectAll('g')
//     .data(data)
//     .enter()
//     .append('rect')
//     .attr('fill', staticColor)
//     .attr('x', (d, i) => x(d.country) as number)
//     .attr('width', x.bandwidth())
//     .attr('y', d => y(0))
//     .attr('height', d => height - y(0))
//     .on('mouseover', function (d, i) {
//       tooltip
//         .html(
//           `<div>Country: ${d.country}</div><div>Value: ${d.value}</div>`
//         )
//         .style('visibility', 'visible');
//       d3.select(this).transition().attr('fill', hoverColor);
//     })
//     .on('mousemove', function () {
//       // tooltip
//       //   .style('top', d3.event.pageY - 10 + 'px')
//       //   .style('left', d3.event.pageX + 10 + 'px');
//     })
//     .on('mouseout', function () {
//       tooltip.html(``).style('visibility', 'hidden');
//       d3.select(this).transition().attr('fill', staticColor);
//     });

//   rect
//     .transition()
//     .ease(d3.easeLinear)
//     .duration(800)
//     .attr('y', d => y(d.value))
//     .attr('height', d => height - y(d.value))
//     .delay((d, i) => i * 100);

//   return svg.node();
// }
import React from 'react'

const BarChart = () => {
  return (
    <div>BarChart</div>
  )
}

export default BarChart