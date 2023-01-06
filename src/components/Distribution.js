import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

export default class Distribution extends Component {

    render() {
        return (
            <div>
                <Card bg='light' border="secondary" >
                    <Card.Header><b>Distribution of Emoji Coins [ERC721]</b></Card.Header>
                    <Card.Body>
                        <div className="details-horisontal">
                            <div style={{width: "556px"}}>
                                <img src={require('../images/graph-distribution.png')} alt="" />
                            </div>
                            <div>
                                <img style={{height:"210px", width:"210px"}} src={require('../images/ic01_BW_512.png')} alt="" />
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
                                    <td>Reserved for user minting with <i>EMOJI</i> tokens</td>
                                </tr>
                                <tr>
                                    <td className="text-center">8000 - 9999</td>
                                    <td>Reserved for development costs and project funding.</td>
                                </tr>    
                                <tr>
                                    <td className="text-center">10000 - 12000</td>
                                    <td>Special Edition Emoji Coins, designed by either myself or the community, may be available for our future <b>sponsors</b> and <b>partners</b> [not confirmed].</td>
                                </tr>                                                             
                            </tbody>
                        </Table>    
                    </Card.Body>
                    <Card.Header><b>Distribution of EMOJI Tokens (EMOJIS) [ERC20]</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            I have pre-minted 100,000 <i>EMOJI</i> tokens (<i>EMOJIS</i>) for my personal use, but the majority of the <i>EMOJI</i> token supply will be made available to the community through staking, burning, or OM bonuses.
                            The fully minted collection has a total value of 2,431,470 <i>EMOJIS</i> (not including coin clones or staking rewards). <br/>
                            <i>The pre-minted tokens most likely will be used to fund a liquidity pool on DEX; more information about this will be provided at a later date.</i><br/><br/>
                        </Card.Text> 
                    </Card.Body>               
                </Card>  
            </div>
        );
    }
}
