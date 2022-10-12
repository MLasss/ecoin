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
                                        There is a limit on how far one person can carry. 
                                        If you have required skills and are willing to help - please contact me <a href={"mailto:emojicoins@protonmail.com"}>EmojiCoins</a>. <br/> <br/>
                                        <b>Marketing ...</b><br/>
                                        <b>Solidity ...</b><br/>
                                        <b>React/Web3 ...</b><br/>
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