import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

export default class About extends Component {

    render() {
        return (
            <div>
                <Card bg='light' border="secondary" >
                <Card.Header><b>Why Emoji Coins?</b></Card.Header>
                    <Card.Body>
                        <div className="details-horisontal"> 
                            <div className="details-text">
                                <Card.Text className="text-justify">
                                Do you happen to know anyone who used to collect coins in their early days? 
I was one of the collectors myself... I was fascinated by original designs, shapes and stories behind them, but I couldn't understand why such cool items are being ruined with all those ugly faces!<br/> 
Yet here I am... many years have gone to past and I'm happily releasing my own digital version of coins, with what I believe much more exciting content!
Does this bring back any memories or perhaps a little nostalgia is scratching the back of your head right now? <br/> 
                                </Card.Text>  
                            </div>
                            <div>
                                <img style={{height:"210px", width:"210px"}} src={require('../images/face-02.png')} alt="" />
                            </div>
                        </div> 
                    </Card.Body>      
                    <Card.Header><b>What does Emoji Coin offer?</b></Card.Header>
                    <Card.Body>
                        <div className="details-horisontal"> 
                            <div>
                                <img style={{height:"210px", width:"210px"}} src={require('../images/face-04.png')} alt="" />
                            </div>
                            <div className="details-text">
                                <Card.Text className="text-justify">
                                Collecting, staking, minting and a couple of other twists, but to be honest, you will find nothing groundbreaking in it just yet!<br/>
                                It has started as one person project but with an intention to GROW with time and on-board more NFT enthusiasts with certain skills to allow for expansion beyond current assumptions!<br/>
                                </Card.Text>  
                            </div>
                        </div> 
                    </Card.Body>                

                    <Card.Header><b>Emoji Coin NFTs</b></Card.Header>
                    <Card.Body>
                        <div className="details-horisontal"> 
                            <div className="details-img-dark">
                                <img style={{height:"192px", width:"192px"}} src={require('../images/coin9237.gif')} alt="" />
                            </div>
                            <div className="details-text">
                                <Card.Text className="text-center">
                                    A collection of 10,000 unique coin designs<br/> with unrepeatable emoji faces. <br/> <br/>
                                    Each coin has its nominal value <br/> and can be exchanged for EMOJI tokens. 
                                </Card.Text>  
                            </div>
                        </div> 
                        <br/>   
                        <div className="details-horisontal"> 
                            <div className="details-text">
                                <Card.Text className="text-center">
                                    Every coin design comes with a certificate of ownership <br/> containing coin details and emoji features. <br/>
                                </Card.Text>  
                                </div>
                            <div className="details-img">
                                <img src={require('../images/img_certificate2.png')} alt="" />
                            </div>
                        </div>  
                        <br/>  
                        <div className="details-horisontal"> 
                            <div className="details-img">
                                <img style={{height:"192px", width:"192px"}} src={require('../images/img_model.png')} alt="" />
                            </div>
                            <div className="details-text">
                                <Card.Text className="text-center">
                                    Original <b>VOX</b> models are available to download via the certificate. <br/> 
                                    All models have been built with dimensions of 32x6x32 voxels <br/> 
                                    and are compatible with Cryptovoxels Metaverse. 
                                </Card.Text>  
                            </div>
                        </div>      
                        <br/>  
                        <div className="details-horisontal"> 
                            <div className="details-img">
                                <img style={{height:"192px", width:"192px"}} src={require('../images/faces.png')} alt="" />
                            </div>
                            <div className="details-text">
                                <Card.Text className="text-center">
                                    Each emoji face is randomly generated <br/> and varies in rarity. <br/>
                                </Card.Text>  
                            </div>
                        </div>  
                        <br/>  
                        <div className="details-horisontal"> 
                            <div className="details-img">
                                <img style={{height:"192px", width:"192px"}} src={require('../images/ipfs.png')} alt="" />
                            </div>
                            <div className="details-text">
                                <Card.Text className="text-center">
                                    No broken links or failed servers.<br/> 
                                    All NFT related data / resources are being stored on blockchain and IPFS.<br/> 
                                </Card.Text>  
                            </div>
                        </div>   
                    </Card.Body>    
                    <Card.Header><b>EMOJI tokens</b></Card.Header>
                    <Card.Body>
                        <div className="details-horisontal"> 
                            <div className="details-img">
                                <img style={{height:"192px", width:"192px"}} src={require('../images/icon-E192.gif')} alt="" />
                            </div>
                            <div className="details-text">
                                <Card.Text className="text-center">
                                    EMOJIs are fungible tokens [ERC20], <br/>that can be earned by staking or burning Emoji Coin NFTs. <br/>
                                    EMOJIs can be used to mint new EMOJI Coin NFTs. <br/>In the future possibly traded on exchanges.
                                </Card.Text>  
                            </div>
                        </div>                         
                    </Card.Body>                                   
                </Card>  
            </div>
        );
    }
}