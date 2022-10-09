import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

export default class FAQ extends Component {

    render() {
        return (
            <div>
                <Card bg='light' border="secondary" >
                    <Card.Header><b>Frequently Asked Questions</b></Card.Header>
                    <Card.Body>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Why NFT details are not correct on Opensea?</Accordion.Header>
                                <Accordion.Body>
                                    Opensea is caching metadata to achieve higher performance. Click "Refresh metadata" button on top-right corner.
                                </Accordion.Body>
                            </Accordion.Item> 
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Can I use art of purchased Emoji Coin?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, you own rights to use the art associated with NFT for personal and commercial use as defined on the 
                                    <a href={"https://ipfs.io/ipfs/QmX24gZT2Ar33d7DDPdEYxQPcgJ1evvvP4zRJx8TiydLZd"}> document</a>.
                                </Accordion.Body>
                            </Accordion.Item>                            
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How can I Mint new Emoji Coins?</Accordion.Header>
                                <Accordion.Body>
                                    Minting functionality is available on <a href={"http://mint.emojicoins.org/"}>EmojiCoins Mint</a> dapp. Please follow the official announcement for more information about mint rages and dates.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How can I Rename/Clone/Burn my Emoji Coins?</Accordion.Header>
                                <Accordion.Body>
                                    Changing name/description and cloning/burning functionality is available on <a href={"http://gallery.emojicoins.org/"}>EmojiCoins Gallery</a> dapp.
                                </Accordion.Body>
                            </Accordion.Item>  
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>How can I Stake my Emoji Coins?</Accordion.Header>
                                <Accordion.Body>
                                    Staking functionality is available on <a href={"http://stake.emojicoins.org/"}>EmojiCoins Stake</a> dapp.
                                </Accordion.Body>
                            </Accordion.Item>                                                        
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Why some images doesn't load or loads slowly?</Accordion.Header>
                                <Accordion.Body>
                                    All NFT related resources are safely stored and pinned on IPFS. Garbage collector frequently removes unused resources from nodes, but no fear your images are not gone, it means that you will need to wait a little bit longer or refresh the screen few times. There are strategies to improve this experience, we may look at it in future.
                                </Accordion.Body>
                            </Accordion.Item>                             
                        </Accordion> 
                    </Card.Body>
                </Card>  
            </div>
        );
    }
}