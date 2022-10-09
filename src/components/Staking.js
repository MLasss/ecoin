import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

export default class Staking extends Component {

    render() {
        return (
            <div>
                <Card bg='light' border="secondary" >
                    <Card.Header><b>Stake</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            Coins above <b>MS60</b> grade can be staked for <i>EMOJI</i> token rewards. Staked coin gets locked, and no further interaction with the coin is allowed until the coin is un-staked.<br/>
                            Stake reward accumulation speed is directly proportional to coin's <b>nominal value</b>, <b>grade</b> and <b>total EMOJI tokens supply</b>. 
                            After staking rewards reach coin's nominal value, rewards start decreasing. Max staking reward can be collected 3.33x of nominal coin's value.<br/> <br/>
                            <img  src={require('../images/graph-staking.png')} alt="" />
                            <br />
                            <i>Graph displays staking rewards in Emojis for different coin grades.</i>
                            <br />
                            <img  src={require('../images/graph-staking-2.png')} alt="" />
                            <br />
                            <i>Graph displays MS70 coin grade staking rewards with different total EMOJI supplies.</i>
                        </Card.Text>  
                    </Card.Body>
                    <Card.Header><b>Staking Price</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            As staking rewards decreasing, <i>Emoji Coin</i> owner would want periodically re-stake his coin. 
                            However, claiming staking rewards is <b>reducing coin's grade</b> by 1 point, thus limiting amount of stake rewards each coin can generate. <br/>
                            Staking can be abandoned at any moment, if an owner decides to preserve coin's grade.<br/><br/>
                        </Card.Text>  
                    </Card.Body>                
                </Card>  
            </div>
        );
    }
}

/*

import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Chart from "react-apexcharts";

export default class Staking extends Component {

    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'MS70',
            data: [0, 0.5, 1, 1.35, 1.7, 1.945, 2.19, 2.3615, 2.533, 2.65305, 2.7731, 2.857135, 2.94117]
          }, {
            name: 'MS67',
            data: [0, 0.35, 0.7, 1.035, 1.28, 1.525, 1.749, 1.9205, 2.092, 2.24145, 2.3615, 2.48155, 2.58102]
          }, {
            name: 'MS64',
            data: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.14, 1.28, 1.42, 1.56, 1.7, 1.798, 1.896]
          }, {
            name: 'MS61',
            data: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6]
          }],
          options: {
            chart: {
              height: 350,
              type: 'area',
              zoom: {
                enabled: false
              }
            },
            colors: ['#cccccc', '#999999', '#606060', '#000000'],
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            xaxis: {
              type: 'int',
              categories: ["0", "30", "60", "90", "120", "150", "180", "210", "240", "270", "300", "330", "360"],
              labels: {
                formatter: function (val) {
                    return val + " days"
                    }
                }
            },
            tooltip: {
              x: {
              },
            },
            yaxis: {
                labels: {
                    formatter: function (val) {
                      return val + " Emoji"
                    }
                }
              },            
          },
        
        
        };
      }

    render() {
        return (
            <div>
                <Card bg='light' border="secondary" >
                    <Card.Header><b>Stake</b></Card.Header>
                    <Card.Body>
                            Coins above <b>MS60</b> grade can be staked for <i>Emoji</i> rewards. Staked coin gets locked and no further interaction with the coin is allowed until the coin is un-staked.<br/>
                            Stake reward accumulation speed directly proportional to coin's nominal value and grade. 
                            After staking rewards reaches coin's nominal value, rewards start decreasing. Max staking reward can be collected 3.33x of nominal coin's value.<br/>
                            <Chart options={this.state.options} series={this.state.series} type="area" height={350} />
                            <Card.Text className="text-justify">
                            <i>Graph displays staking rewards in Emojis, by days (coin's nominal value - 1 Emoji).</i>
                            </Card.Text>  
                    </Card.Body>
                    <Card.Header><b>Staking Price</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            To continue receiving staking rewards, <i>Emoji Coin</i> owner needs periodically re-stake the coin. <br/>
                            Claiming staking rewards is <b>reducing coin's grade</b> by 1 point, thus limiting amount of stake rewards each coin can generate. <br/>
                            Staking can be abandoned at any moment, if an owner decides to preserve coin's grade.
                        </Card.Text>  
                    </Card.Body>                
                </Card>  
            </div>
        );
    }
}

*/