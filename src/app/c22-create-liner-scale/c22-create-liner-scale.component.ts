import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-c22-create-liner-scale',
  templateUrl: './c22-create-liner-scale.component.html',
  styleUrls: ['./c22-create-liner-scale.component.css'],
})
export class C22CreateLinerScaleComponent implements OnInit {
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

    const y = d3.scaleLinear().domain([0, 1500]).range([0, 500]);
    // console.log(y(400));
    // console.log(y(0));
    // console.log(y(900));

    // join the data to rects
    const _rect = this._svg.selectAll('rect').data(_data);
    _rect
      .attr('width', 25)
      .attr('height', (d) => y(d.orders))
      .attr('fill', 'orange')
      .attr('x', (d, i) => i * 30);

    // append the enter selection to the DOM
    _rect
      .enter()
      .append('rect')
      .attr('width', 25)
      .attr('height', (d) => y(d.orders))
      .attr('fill', 'orange')
      .attr('x', (d, i) => i * 30);

    // console.log('liner scale :: ', _rect);
  }
}
