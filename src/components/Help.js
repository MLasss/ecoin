import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

export default class Help extends Component {

    render() {
        return (
            <div>
                <Card bg='light' border="secondary" >
                    <Card.Header><b>Help</b></Card.Header>
                    <Card.Body>
                            <div className="details-horisontal"> 
                                <div className="details-text">
                                    <Card.Text className="text-justify">
                                        There is only so much one person can handle. If you have the necessary skills and are willing to lend a hand, please contact <a href={"mailto:emojicoins@protonmail.com"}>EmojiCoins</a>. <br/><br/>
                                        I am currently seeking help in the following areas: <br/> 
                                        <b>Marketing:</b> I am looking for someone with experience in marketing and promotion to help spread the word about EmojiCoins.<br/>
                                        <b>Solidity:</b> I am in need of a Solidity developer to help with the development of our smart contracts.<br/>
                                        <b>React/Web3:</b> I am seeking a React/Web3 developer to help us build and maintain the front-end of our platform.<br/>
                                    </Card.Text>  
                                </div>
                                <div >
                                    <img style={{height:"210px", width:"210px"}} src={require('../images/face-06.png')} alt="" />
                                </div>
                            </div> 
                    </Card.Body>
                
                </Card>  
            </div>
        );
    }
}