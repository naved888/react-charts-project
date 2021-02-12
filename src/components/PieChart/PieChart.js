import React, { Component } from 'react'
import './PieChart.scss'
import * as Highcharts from 'highcharts'
import { faLessThan } from '@fortawesome/free-solid-svg-icons'
export class PieChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      pieData: []
    }

  }

  async componentDidMount() {
    const url = 'https://api.github.com/repositories/19438/issues';
    const response = await fetch(url);
    const apiData = await response.json()
    this.setState({
      data: apiData
    })
    this.state.data.map((item, index) => {
      this.state.pieData.push({
        name: item.user.login,
        y: item.comments,
      })
    });
    this.drawChart();
  }

  drawChart() {
     // Radialize the colors
     Highcharts.setOptions({
      colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
          },
          stops: [
            [0, color],
            [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
          ]
        };
      })
    });

    // Build the chart
    Highcharts.chart('container', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      credits: {
        enabled: false
      },
      title: {
        text: 'User Comments Pie Chart Representation'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.0f} ',
            connectorColor: 'silver'
          }
        }
      },
      series: [{
        name: 'Comment Percent',
        data: this.state.pieData
      }]
    });
  }

  render() {
    return ( 
      <figure className = "highcharts-figure" >
        <div id = "container" > </div> 
      </figure>
    )
  }
}

export default PieChart