import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

export default class Staking extends Component {

    render() {
        return (
            <div>
                <Card bg='light' border="secondary" >
                    <Card.Header><b>Staking [Find the EmojiCoins Stake Dapp in the Footer]</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            Coins with a grade above <b>MS60</b> can be staked in order to receive <i>EMOJI</i> tokens (<i>EMOJIS</i>) as a reward. 
                            When a coin is staked, it becomes locked and no further interaction with the coin is allowed until it is un-staked. <br/>
                            The rate at which staking rewards accumulate is directly proportional to the coin's <b>nominal value</b>, <b>grade</b>, and the <b>total supply</b> of <i>EMOJI</i> tokens. 
                            Staking rewards will start to decrease once they reach the coin's nominal value. <br/>
                            The maximum staking reward that can be collected is 3.33 times the nominal value of the coin. <br/>
                            <img  src={require('../images/graph-staking.png')} alt="" />
                            <br />
                            <i>Graph displays staking rewards in EMOJIS for different coin grades.</i>
                            <br />
                            <img  src={require('../images/graph-staking-2.png')} alt="" />
                            <br />
                            <i>Graph displays MS70 coin grade staking rewards with different total EMOJI supplies.</i>
                        </Card.Text>  
                    </Card.Body>
                    <Card.Header><b>Staking Price</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            As staking rewards decrease, <i>Emoji Coin</i> owners may wish to periodically re-stake their coins.
                            However, claiming staking rewards <b>reduces the coin's grade</b> by one point, which limits the amount of staking rewards that each coin can generate. <br/>
                            If an owner wants to preserve their coin's grade, they may choose to abandon staking at any time.<br/><br/>
                        </Card.Text>  
                    </Card.Body>                
                </Card>  
            </div>
        );
    }
}
