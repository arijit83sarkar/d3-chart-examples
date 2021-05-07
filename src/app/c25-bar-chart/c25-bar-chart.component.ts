import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-c25-bar-chart',
  templateUrl: './c25-bar-chart.component.html',
  styleUrls: ['./c25-bar-chart.component.css'],
})
export class C25BarChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const _data = [
      {
        name: 'veg soup',
        orders: 200,
      },
      {
        name: 'veg curry',
        orders: 600,
      },
      {
        name: 'veg pasta',
        orders: 300,
      },
      {
        name: 'veg surprise',
        orders: 900,
      },
      {
        name: 'chicken surprise',
        orders: 1200,
      },
      {
        name: 'chicken leg fry',
        orders: 1000,
      },
      {
        name: 'chicken curry',
        orders: 750,
      },
      {
        name: 'Biriany',
        orders: 1350,
      },
    ];
    // console.log('in bar chart :: ', _data);

    let _svg = d3
      .select('.canvas')
      .append('svg')
      .attr('width', 800)
      .attr('height', 400);

    // create margins and dimentions
    const margin = { top: 20, right: 20, botton: 100, left: 100 };
    const graphWidth = 400 - margin.left - margin.right;
    const graphHeight = 400 - margin.top - margin.botton;

    let _graph = _svg
      .append('g')
      .attr('width', graphWidth)
      .attr('height', graphHeight)
      .attr('transform', `translate(${margin.left},${margin.top})`);

    let xAxisGroup = _graph
      .append('g')
      .attr('transform', `translate(0,${graphHeight})`);
    let yAxisGroup = _graph.append('g');

    const min = d3.min(_data, (d) => d.orders);
    const max = d3.max(_data, (d) => d.orders);
    const extent = d3.extent(_data, (d) => d.orders);
    // console.log(min, max, extent);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(_data, (d) => d.orders)])
      .range([graphHeight, 0]);

    // console.log(y(400));
    // console.log(y(0));
    // console.log(y(900));

    const x = d3
      .scaleBand()
      .domain(_data.map((item) => item.name))
      .range([0, 400])
      .paddingInner(0.2)
      .paddingOuter(0.2);

    // console.log(_data.map((item) => item.name));
    // console.log(x.bandwidth());
    // console.log(x.bandwidth);

    // join the data to rects
    const _rect = _graph.selectAll('rect').data(_data);
    _rect
      .attr('width', x.bandwidth)
      .attr('height', (d) => graphHeight - y(d.orders))
      .attr('fill', 'orange')
      .attr('x', (d) => x(d.name))
      .attr('y', (d) => y(d.orders));

    // append the enter selection to the DOM
    _rect
      .enter()
      .append('rect')
      .attr('width', x.bandwidth)
      .attr('height', (d) => graphHeight - y(d.orders))
      .attr('fill', 'orange')
      .attr('x', (d) => x(d.name))
      .attr('y', (d) => y(d.orders));

    // create and call the axis
    let xAxis = d3.axisBottom(x);
    let yAxis = d3
      .axisLeft(y)
      .ticks(8)
      .tickFormat((d) => d + ' orders');

    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis);

    xAxisGroup
      .selectAll('text')
      .attr('transform', 'rotate(20)')
      .attr('font-size', '11')
      .attr('text-anchor', 'start')
      .attr('fill', 'blue');

    yAxisGroup.selectAll('text').attr('font-size', '11').attr('fill', 'blue');
  }
}
