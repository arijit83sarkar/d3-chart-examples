import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-c42-transitions',
  templateUrl: './c42-transitions.component.html',
  styleUrls: ['./c42-transitions.component.css'],
})
export class C42TransitionsComponent implements OnInit {
  constructor(public _authService: AuthService) {}

  ngOnInit(): void {
    let _data = [];

    let _filter = {};
    _filter['dateInputFilters'] = [
      {
        dataTableName: 'MDM_DATA_DETAILS',
        dataColumnNameFrom: 'request_start_time',
        dataColumnNameTo: 'request_end_time',
        from: '2019-01-01',
        to: '2020-11-30',
      },
    ];
    _filter['listInputFilters'] = [
      {
        dataTableName: 'MDM_DATA_DETAILS',
        dataColumnName: 'status',
        selectedValues: '',
      },
    ];
    // console.log('filter string :: ', data);

    this._authService
      .request(
        'post',
        'verticalbarchart/getVerticalBarChartData?tableName=MDM_DATA_DETAILS&columnName=status&operation=count&dimensionColumn=status',
        _filter
      )
      .subscribe(
        (response) => {
          // console.log('response data :: ', response);
          localStorage.removeItem('isHeaderData');
          response.result.data.forEach((element) => {
            _data.push(element);
          });
          // console.log('response data :: ', _data);
          // _data.forEach((element) => {
          //   console.log(element);
          // });
          this.drawChart(_data);
        },
        (error) => {
          console.log('Error :: ', error);
          localStorage.removeItem('isHeaderData');
        }
      );
  }

  drawChart(data) {
    // data.forEach((element) => {
    //   console.log(element.code);
    // });

    let _svg = d3
      .select('.canvas')
      .append('svg')
      .attr('width', 800)
      .attr('height', 400);

    // create margins and dimentions
    const margin = { top: 20, right: 20, botton: 100, left: 100 };
    const graphWidth = 600 - margin.left - margin.right;
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

    // const min = d3.min(data, (d) => Number(d.code));
    // const max = d3.max(data, (d) => Number(d.code));
    // const extent = d3.extent(data, (d) => Number(d.code));
    // console.log(min, max, extent);

    const _transition = d3.transition().duration(1500);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => Number(d.code))])
      .range([graphHeight, 0]);

    const x = d3
      .scaleBand()
      .domain(data.map((item) => item.value))
      .range([0, 400])
      .paddingInner(0.2)
      .paddingOuter(0.2);

    // join the data to rects
    const _rect = _graph.selectAll('rect').data(data);
    _rect
      .attr('width', x.bandwidth)
      .attr('fill', '#0fc9f2')
      .attr('x', (d) => x(d.value))
      .transition(_transition) // transition
      .attr('y', (d) => y(Number(d.code))) // ending condition
      .attr('height', (d) => graphHeight - y(Number(d.code))); // ending condition

    // append the enter selection to the DOM
    _rect
      .enter()
      .append('rect')
      .attr('width', x.bandwidth)
      .attr('height', 0) // starting condition
      .attr('fill', '#0fc9f2')
      .attr('x', (d) => x(d.value))
      .attr('y', graphHeight) // starting condition
      //.merge(_rect)
      .transition(_transition) // transition
      .attr('y', (d) => y(Number(d.code))) // ending condition
      .attr('height', (d) => graphHeight - y(Number(d.code))); // ending condition

    // create and call the axis
    let xAxis = d3.axisBottom(x);
    let yAxis = d3
      .axisLeft(y)
      .ticks(8)
      .tickFormat((d) => d + '');

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

/**
 * * STARTING CONDION
 * * Y = graphHeight
 * * height = 0
 *
 * * ENDING CONDITION
 * * Y = y(d.orders)
 * * height = graphHeight - y(d.orders)
 */
