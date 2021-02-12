import React, { Component } from 'react'
import './ColumnChart.scss'
import Highcharts from 'highcharts'

class ColumnChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            barData: []
        }
    }

    instance;

    async componentDidMount() {
        const url = 'https://api.github.com/repositories/19438/issues';
        const response = await fetch(url);
        const apiData = await response.json()
        this.setState({
            data: apiData
        })
        this.state.data.map((item, index) => {
            this.state.barData.push([
                 item.created_at.slice(0,10),
                 item.comments
            ])
        });
        this.drawChart();
    }

    drawChart() {
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Comments And Created Date Bar Chart Representation' 
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'No Of Comments'
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
             },             
            tooltip: {
                pointFormat: 'User: <b>{point.y:.1f} Comments</b>'
            },
            series: [{
                name: 'Comments',
                data: this.state.barData,
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#FFFFFF',
                    align: 'right',
                    format: '{point.y:.0f}',
                    y: 10, 
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            }]
        });
    }

    render() {
        return (
            <div className="highcharts-figure">
                <div id="container"></div>
            </div>
        );
    }
}

export default ColumnChart