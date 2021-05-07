import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-c23-brand-scales',
  templateUrl: './c23-brand-scales.component.html',
  styleUrls: ['./c23-brand-scales.component.css'],
})
export class C23BrandScalesComponent implements OnInit {
  private _svg;

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

    this._svg = d3.select('svg');

    const min = d3.min(_data, (d) => d.orders);
    const max = d3.max(_data, (d) => d.orders);
    const extent = d3.extent(_data, (d) => d.orders);
    console.log(min, max, extent);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(_data, (d) => d.orders)])
      .range([0, 500]);

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
    const _rect = this._svg.selectAll('rect').data(_data);
    _rect
      .attr('width', x.bandwidth)
      .attr('height', (d) => y(d.orders))
      .attr('fill', 'orange')
      .attr('x', (d) => x(d.name));

    // append the enter selection to the DOM
    _rect
      .enter()
      .append('rect')
      .attr('width', x.bandwidth)
      .attr('height', (d) => y(d.orders))
      .attr('fill', 'orange')
      .attr('x', (d) => x(d.name));

    // console.log('liner scale :: ', _rect);
  }
}
