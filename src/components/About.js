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
                                Do you happen to know anyone who used to collect coins in their early days? I was one of those collectors myself. I was fascinated by the original designs, shapes, and stories behind them. However, I couldn't understand why such cool items were being ruined with all those ugly faces!<br/> 
                                <br/> 
                                Yet, here I am. Many years have passed, and I'm happily releasing my own digital version of coins, with what I believe is much more exciting content. Does this bring back any memories for you, or perhaps a little nostalgia is scratching the back of your head right now?
                                </Card.Text>  
                            </div>
                            <div>
                                <img style={{height:"210px", width:"210px"}} src={require('../images/ic04_BW_512.png')} alt="" />
                            </div>
                        </div> 
                    </Card.Body>      
                    <Card.Header><b>What does Emoji Coin offer?</b></Card.Header>
                    <Card.Body>
                        <div className="details-horisontal"> 
                            <div>
                                <img style={{height:"210px", width:"210px"}} src={require('../images/ic02_BW_512.png')} alt="" />
                            </div>
                            <div className="details-text">
                                <Card.Text className="text-justify">
                                I know you must be absolutely thrilled to hear about our groundbreaking activities like collecting, staking, and minting. 
                                I mean, who wouldn't be excited to hear about things they've never heard of before? <br/>
                                And don't even get me started on the fact that this is a one-person project. 
                                I mean, clearly one person can't accomplish anything these days, right? 
                                But don't worry, I have big plans to bring on a whole team of highly skilled NFT enthusiasts. 
                                Because clearly, one person isn't enough to accomplish anything worth talking about.
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
                                The EmojiCoins Collection is a one-of-a-kind collection featuring <br/>10,000 unique coin designs. <br/>
                                With a variety of metal compositions, grades, and rarities, these coins are sure to impress even the most discerning collector.<br/>
                                Each coin boasts a unique emoji face and has a nominal value <br/>that can be redeemed for EMOJI tokens.<br/> 
                                Don't miss out on the opportunity to add these <br/>extraordinary coins to your collection.
                                </Card.Text>  
                            </div>
                        </div> 
                        <br/>   
                        <div className="details-horisontal"> 
                            <div className="details-text">
                                <Card.Text className="text-center">
                                Every coin in our collection comes with its own certificate of ownership, which serves as proof of your ownership of the coin and its unique design.<br/>
                                These certificates contain all the necessary details about the coin, including its denomination, composition <br/> and grade. 
                                <br/>They also include information about the emoji features that make the coin one-of-a-kind.
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
                                Original <b>VOX</b> models can be downloaded via the certificate of ownership. These models have been built with dimensions of 32x6x32 voxels and are compatible with the Voxels.com Metaverse.<br/>
                                They are a great addition to any collection and can be used to bring your coins to life within the virtual world.
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
                                The randomly generated emoji faces on our coins add an extra touch of uniqueness and specialness to the collection. <br/>
                                Each emoji face brings its own element of surprise and intrigue, making each coin a truly one-of-a-kind piece.
                                </Card.Text>  
                            </div>
                        </div>  
                        <br/>  
                        <div className="details-horisontal"> 
                            <div className="details-img">
                                <img style={{height:"192px", width:"192px"}} src={require('../images/polygon.png')} alt="" />
                            </div>
                            <div className="details-text">
                                <Card.Text className="text-center">
                                One of the advantages of Emojicoins Collection is that it has <br/> low transaction fees. 
                                It is built on Polygon, a layer 2 blockchain that aims to improve Ethereum's scalability. <br/>
                                This means that you can customize, mint, and trade our Emojicoins without the burden of high fees.
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
                                Emojicoins dapp is designed to be reliable and easy to use.<br/> 
                                There are no broken links or failed servers to worry about.<br/> 
                                All NFT-related data and resources are stored on the blockchain and IPFS, ensuring that your collection is safe and secure.
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
                                EMOJIs are fungible tokens (ERC20) that can be earned by staking <br/>or burning Emoji Coin NFTs. <br/>
                                These tokens can be used to mint new Emoji Coin NFTs, and in the future, they may even be traded on exchanges. <br/>
                                EMOJIs add an extra layer of utility to our Emoji Coin NFTs, <br/>making them even more valuable and desirable.
                                </Card.Text>  
                            </div>
                        </div>                         
                    </Card.Body>                                   
                </Card>  
            </div>
        );
    }
}