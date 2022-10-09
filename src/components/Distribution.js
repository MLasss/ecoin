import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

export default class Distribution extends Component {

    render() {
        return (
            <div>
                <Card bg='light' border="secondary" >
                    <Card.Header><b>Emoji Coins [ERC721] Distribution</b></Card.Header>
                    <Card.Body>
                        <div className="details-horisontal">
                            <div style={{width: "556px"}}>
                                <img src={require('../images/graph-distribution.png')} alt="" />
                            </div>
                            <div>
                                <img style={{height:"210px", width:"210px"}} src={require('../images/face-03.png')} alt="" />
                            </div>
                        </div>
                        <br />
                        <Table striped bordered size="sm">
                            <tbody>
                                <tr>
                                    <td style={{width:'120px'}} className="text-center">0000 - 0999</td>
                                    <td>Airdropps for active Opensea users.</td>
                                </tr>
                                <tr>
                                    <td className="text-center">1000 - 1999</td>
                                    <td>Airdrops for active community members, content creators, promoters etc.</td>
                                </tr>                                
                                <tr>
                                    <td className="text-center">2000 - 3999</td>
                                    <td>Sales on Opensea.</td>
                                </tr>
                                <tr>
                                    <td className="text-center">4000 - 7999</td>
                                    <td>Reserved for user minting with EMOJI tokens</td>
                                </tr>
                                <tr>
                                    <td className="text-center">8000 - 9999</td>
                                    <td>Reserved for development costs and project funding.</td>
                                </tr>    
                                <tr>
                                    <td className="text-center">10000 - 12000</td>
                                    <td>Special Edition Emoji Coins can be designed by me or community for our future <b>Sponsors</b> and <b>Partners</b>. [Not Confirmed].</td>
                                </tr>                                                             
                            </tbody>
                        </Table>    
                    </Card.Body>
                    <Card.Header><b>Emojis [ERC20] Distribution</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            100,000 EMOJI are initially pre-minted for project owner's personal use. Additional supply of EMOJI tokens will be available only through staking, burning, or OM bonuses.<br/>
                            <i>Pre-minted tokens most likely will be used for liquidity pool funding on DEX, further details will be confirmed in the future. </i><br/><br/>
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
import Table from 'react-bootstrap/Table'
import Chart from "react-apexcharts";

export default class Distribution extends Component {

    constructor(props) {
        super(props);

        this.state = {
        
          series: [8.33, 8.33, 16.66, 33.33, 16.66, 16.66],
          options: {
            chart: {
                width: 380,
                type: 'pie',
              },
            labels: ['Opensea Airdrop', 'Promotional Airdrop', 'Opensea Sale', 'User Minting', 'Project Funding', 'Partners'],
            colors: ['#1bbbfe', '#38dc57', '#0498d6', '#dc6338', '#dcc338', '#94A74A'],
            responsive: [{
                breakpoint: 380,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
          },
        };
      }

    render() {
        return (
            <div>
                <Card bg='light' border="secondary" >
                    <Card.Header><b>Emoji Coins [ERC721] Distribution</b></Card.Header>
                    <Card.Body>
                        <div className="details-horisontal">
                            <div style={{width: "556px"}}>
                                <Chart options={this.state.options} series={this.state.series} type="pie" width={430} />
                            </div>
                            <div>
                                <img style={{height:"210px", width:"210px"}} src={require('../images/face-03.png')} alt="" />
                            </div>
                        </div>
                        <Table striped bordered size="sm">
                            <tbody>
                                <tr>
                                    <td style={{width:'120px'}} className="text-center">0000 - 0999</td>
                                    <td>Pre-minted and airdropped in batched for active Opensea users on Polygon chain <br/>[randomly picked].</td>
                                </tr>
                                <tr>
                                    <td className="text-center">1000 - 1999</td>
                                    <td>Other promotional airdrops.</td>
                                </tr>                                
                                <tr>
                                    <td className="text-center">2000 - 3999</td>
                                    <td>Released in batches for sales on Opensea.</td>
                                </tr>
                                <tr>
                                    <td className="text-center">4000 - 7999</td>
                                    <td>Available for user minting. Initially only [4000 - 4999], range will increase with time.</td>
                                </tr>
                                <tr>
                                    <td className="text-center">8000 - 9999</td>
                                    <td>Reserved for development costs and project funding.</td>
                                </tr>    
                                <tr>
                                    <td class="text-center">10000 - 12000</td>
                                    <td>New Special Edition Emoji Coins can be designed for our future <b>Sponsors</b> and <b>Partners</b>.</td>
                                </tr>                                                             
                            </tbody>
                        </Table>    
                    </Card.Body>
                    <Card.Header><b>Emojis [ERC20] Distribution</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            500,000 emojis will be initially pre-minted and will be sold on DEX in batches. Additional supply of emojis will be available only thought staking or burning. <br/>
                        </Card.Text> 
                    </Card.Body>               
                </Card>  
            </div>
        );
    }
}

*/