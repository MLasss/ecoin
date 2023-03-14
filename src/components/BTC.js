import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InscriptionEmoji from './InscriptionEmoji'

export default class BTC extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emojis: [0, 1, 2, 3, 4],
            loaded: [false, false, false, false, false],
        };
      }
    
    populateRandomArray(){
        const file = require(`../json/inscriptions.json`);
        this.setState({ emojis: this.getRandomArray(file) });
    }


    getRandomIndex(max){
        return Math.floor(Math.random() * max);
    }

    getRandomArray(arr) {
        let randomArray = [];
        let randomIndex = 0;
        let indexCount = 0;
        while (indexCount < 5) {
            randomIndex = this.getRandomIndex(arr.length);
            if (randomArray.indexOf(arr[randomIndex]) === -1) {
                randomArray.push(arr[randomIndex]);
                indexCount++;
            }
        }
        return randomArray;
    }

      resetLoadingArray(){
        var isloaded = this.state.loaded;
        for (let i = 0; i < 5; i++) {
            isloaded[i] = false;
        } 
        this.setState({ loaded: isloaded });
      }      

      componentDidMount() {
        this.populateRandomArray(); 
        this.resetLoadingArray();
      }

      handleEmojiCallback= (value) => {
        var isloaded = this.state.loaded;
        isloaded[value] = true;
        this.setState({ loaded: isloaded });
      }

    render() {
        const { emojis, loaded } = this.state;

        return (
            <div>
                <Card bg='light' border="secondary" >
                    <Card.Header><b>Bitcoin Inscriptions</b></Card.Header>
                    <Card.Body className="text-justify">
                        Individual satoshis can be inscribed with any desired content, 
                        allowing users to create unique Bitcoin-native digital artifacts 
                        that can be stored in Bitcoin wallets and transferred using Bitcoin transactions. 
                        Inscriptions are as durable, immutable, secure, and decentralized as Bitcoin itself. <br/>
                        For more information, visit <a href={"https://docs.ordinals.com/"}>ordinals.com</a>
                    </Card.Body>
                </Card>  
                <Card bg='light' border="secondary" >
                    <Card.Header><b>EmojiCoins collection on Bitcoin</b></Card.Header>
                    <Card.Body className="text-justify">
                        All emojis from the EmojiCois collection have been permanently inscribed
                        into the Bitcoin blockchain with four distinct inscriptions.<br/><br/>
                        <div className="inscription-img">
                            <a href={"https://ordinals.com/content/be8ded0e0e31af1e01284fa54083440e9415e9c1926dd3070b8bf95461ff2d99i0"} target="_blank"><img style={{width:"160px"}} src={require('../images/montage0.webp')} alt="" /></a>                    
                        </div>
                        <div className="inscription-img">
                            <a href={"https://ordinals.com/content/69b87cab4f8bdddc207a731593b0dbf0cc47ef5c0d332da318a9dc49bc9d6221i0"} target="_blank"><img style={{width:"160px"}} src={require('../images/montage1.webp')} alt="" /></a>                    
                        </div>
                        <div className="inscription-img">
                            <a href={"https://ordinals.com/content/d69e1aed4b04b77b1084f8093d53ce6c22e9db04c521651aa3548df18f4339f6i0"} target="_blank"><img style={{width:"160px"}} src={require('../images/montage2.webp')} alt="" /></a>                    
                        </div>
                        <div className="inscription-img">
                            <a href={"https://ordinals.com/content/dba65d21c166d8e28b02273126bae18a0eb3907e270e471ab8236b169bfabd41i0"} target="_blank"><img style={{width:"160px"}} src={require('../images/montage3.webp')} alt="" /></a>                    
                        </div>
                    </Card.Body>
                </Card>  
                <Card bg='light' border="secondary" >
                    <Card.Header><b>Individual Inscriptions</b></Card.Header>
                    <Card.Body className="text-justify">
                        Some of the emojis were fortunate enough to get their own inscription. 
                        The ownership of these emoji isncriptions will be decided at a later date.<br/><br/>
                        <InscriptionEmoji inscriptionId={emojis[0]} isLoaded={loaded[0]} parentCallback={this.handleEmojiCallback} no={0} />
                        <InscriptionEmoji inscriptionId={emojis[1]} isLoaded={loaded[1]} parentCallback={this.handleEmojiCallback} no={1} />
                        <InscriptionEmoji inscriptionId={emojis[2]} isLoaded={loaded[2]} parentCallback={this.handleEmojiCallback} no={2} />
                        <InscriptionEmoji inscriptionId={emojis[3]} isLoaded={loaded[3]} parentCallback={this.handleEmojiCallback} no={3} />
                        <InscriptionEmoji inscriptionId={emojis[4]} isLoaded={loaded[4]} parentCallback={this.handleEmojiCallback} no={4} />

                        <div style={{float: 'right', margin: '6px'}}>
                            <Button variant="secondary" size="sm" onClick={() => { this.populateRandomArray(); this.resetLoadingArray(); }}>
                                Show Other Inscriptions
                            </Button>
                        </div>
                    </Card.Body>
                </Card>                                 
            </div>
        );
    }
}