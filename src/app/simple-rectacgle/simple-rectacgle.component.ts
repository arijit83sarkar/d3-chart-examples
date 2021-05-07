import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-simple-rectacgle',
  templateUrl: './simple-rectacgle.component.html',
  styleUrls: ['./simple-rectacgle.component.css'],
})
export class SimpleRectacgleComponent implements OnInit {
  private _svg;

  constructor() {}

  ngOnInit(): void {
    const _data = [
      {
        width: 480,
        height: 260,
        fill: 'blue',
      },
      {
        width: 320,
        height: 160,
        fill: 'yellow',
      },
      {
        width: 180,
        height: 80,
        fill: 'red',
      },
    ];

    this._svg = d3
      .select('div#id_001')
      .append('svg')
      .attr('height', 300)
      .attr('width', 500);
    // this._svg = d3.select('svg');
    const _rect = this._svg.selectAll('rect').data(_data);

    _rect
      .attr('width', (d, i, n) => d.width)
      .attr('height', (d) => d.height)
      .attr('fill', (d) => d.fill);

    _rect
      .enter()
      .append('rect')
      .data(_data)
      .attr('width', (d, i, n) => d.width)
      .attr('height', (d) => d.height)
      .attr('fill', (d) => d.fill);

    console.log('simple rectangle :: ', _rect);
  }
}
