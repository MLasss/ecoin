import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

export default class Roadmap extends Component {

    render() {
        return (
            <div>
                <Card bg='light' border="secondary" >
                    <Card.Header><b>There is no roadmap!!!</b></Card.Header>
                    <Card.Body>
                            <div className="details-horisontal"> 
                                <div className="details-text">
                                    <Card.Text className="text-justify">
                                        I give no promises, I can not keep...<br/>
                                        I work alone, but that may change...<br/>
                                        This project is not my main focus, but that may change...<br/>
                                        No promises, just some ideas...<br/>
                                    </Card.Text>  
                                </div>
                                <div>
                                    <img style={{height:"200px", width:"200px"}} src={require('../images/face-05.png')} alt="" />
                                </div>
                            </div> 
                            <br/>
                            <div className="roadmap-horisontal"> 
                                <div className="roadmap-img">
                                    <img className="roadmap-img" src={require('../images/roadmap.png')} alt="" />
                                </div>
                                <div className="roadmap-text">
                                    <b>Catalog Emoji features</b> <br/>
                                    Display features by rarity.<br/>
                                    Search Emojis by features.<br/>
                                </div>
                            </div>  
                            <br/>
                            <div className="roadmap-horisontal"> 
                                <div className="roadmap-img">
                                    <img className="roadmap-img" src={require('../images/roadmap.png')} alt="" />
                                </div>
                                <div className="roadmap-text">
                                    <b>Emoji metadata on blockchain</b> <br/>
                                     Store Emoji features on blockchain.<br/> 
                                     More enhanced filtering on Opensea.<br/> 
                                </div>
                            </div>  
                            <br/>
                            <div className="roadmap-horisontal"> 
                                <div className="roadmap-img">
                                    <img className="roadmap-img" src={require('../images/roadmap.png')} alt="" />
                                </div>
                                <div className="roadmap-text">
                                    <b>High resolution Emojis</b> <br/>
                                     Another collection with 512x512px colorfull Emojis<br/> 
                                </div>
                            </div>  
                            <br/>                            
                            <div className="roadmap-horisontal"> 
                                <div className="roadmap-img">
                                    <img className="roadmap-img" src={require('../images/roadmap.png')} alt="" />
                                </div>
                                <div className="roadmap-text">
                                    <b>Mystery chest</b> <br/>
                                    An NFT with hidden random coin.<br/> 
                                </div>
                            </div>  
                            <br/>     
                            <div className="roadmap-horisontal"> 
                                <div className="roadmap-img">
                                    <img className="roadmap-img" src={require('../images/roadmap.png')} alt="" />
                                </div>
                                <div className="roadmap-text">
                                    <b>Liquidity Pools</b> <br/>
                                    Trading EMOJI tokens on DEX.<br/> 
                                </div>
                            </div>  
                            <br/>                                                    
                            <div className="roadmap-horisontal"> 
                                <div className="roadmap-img">
                                    <img className="roadmap-img" src={require('../images/roadmap.png')} alt="" />
                                </div>
                                <div className="roadmap-text">
                                    <b>Ethereum Main Network</b> <br/>
                                    Ability to migrate Emoji Coins and EMOJIs to L1 (Ethereum). An owner will be able to trade on L1 (staking, burning, and other features will stay on L2). <br/> 
                                </div>
                            </div>  
                            <br/>
                            <div className="roadmap-horisontal"> 
                                <div className="roadmap-img">
                                    <img className="roadmap-img" src={require('../images/roadmap.png')} alt="" />
                                </div>
                                <div className="roadmap-text">
                                    <b>Special Edition Coins</b> <br/>
                                    2000 coins are still to be designed, ideally by the community, through various competitions. <br/>
                                </div>
                            </div>  
                            <br/>
                            <div className="roadmap-horisontal"> 
                                <div className="roadmap-img">
                                    <img className="roadmap-img" src={require('../images/roadmap.png')} alt="" />
                                </div>
                                <div className="roadmap-text">
                                    <b>DAO / voting</b> <br/>
                                    The Emojicoins DAO will allow coin owners to take part in major decisions on the project. <br/>
                                </div>
                            </div>  
                            <br/>                            
                            <div className="roadmap-horisontal"> 
                                <div className="roadmap-img">
                                    <img className="roadmap-img" src={require('../images/roadmap.png')} alt="" />
                                </div>
                                <div className="roadmap-text">
                                    <b>Gallery on Cryptovoxels</b> <br/>
                                    We need a place to promote the project and hangout? Emoji coins were designed with Cryptovoxels in mind. All .vox models are supported out of the box. <br/>
                                </div>
                            </div>  
                            <br/>
                            <div className="roadmap-horisontal"> 
                                <div className="roadmap-img">
                                    <img className="roadmap-img" src={require('../images/roadmap.png')} alt="" />
                                </div>
                                <div className="roadmap-text">
                                    <b>Other Metaverses (Decentraland/Sandbox)</b> <br/>
                                    Why to stop at singe metaverse only? <br/> 
                                </div>
                            </div>  
                            <br/>

                    </Card.Body>
                
                </Card>  
            </div>
        );
    }
}