import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ShowCaseCoin from './ShowCaseCoin'
import ShowCaseEmoji from './ShowCaseEmoji'

export default class Showcase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emojis: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            loaded: [false, false, false, false, false, false, false, false, false, false],
        };
      }
    
      populateRandomArray(){
        this.setState({ emojis: Array.from({length: 10}, () => Math.floor(Math.random() * 10000)) })
      }

      resetLoadingArray(){
        var isloaded = this.state.loaded;
        for (let i = 5; i < 10; i++) {
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
        //console.log('button clicked ' + value);
      }

    render() {
        const { emojis, loaded } = this.state;

        return (
            <div>
                <Card bg='light' border="secondary" >
                    <Card.Header><b>Coin Type</b></Card.Header>
                    <Card.Body>
                        <ShowCaseCoin coinHash={'QmQYu2pKj1FivqocbofFF2LVk8uUiPreyeXkGSD6L4YjK8'} text="Copper" />
                        <ShowCaseCoin coinHash={'QmV4pAxu9snChCyf1ucWA2C74J2J7KYje7TeBZeUooNc2k'} text="Silver-Plated" />
                        <ShowCaseCoin coinHash={'QmXfMicdJFPjQNzLEHK25qdsseZtytnxRAMDg5ymLGAcj5'} text="Gold-Plated" />
                        <ShowCaseCoin coinHash={'QmUhJYzbcYzthqWF6QzmiwCQFaCWEzypA955WbEfrPp2hq'} text="Limited Edition" />
                        <ShowCaseCoin coinHash={'QmcGyfrMuXvLd3oKX7og1gizTePSEPq38L3ANsC4SACH5E'} text="Silver" />
                        <ShowCaseCoin coinHash={'QmXBtoT7xwJMmRATfraeCdJRdfydqChJ2HAk1E6nVBabKX'} text="Silver Gold-Plated" />
                        <ShowCaseCoin coinHash={'QmQK9tgn6dAXiiBVWrg45Ag2rz74AqmLBmmKMDTputsr12'} text="Silver Limited Edition" />
                        <ShowCaseCoin coinHash={'QmRfncZidcXMX8EmtV4P9fgpwokhuvbKsTpv1RDoPCg2zc'} text="Gold/Silver Bi-Metal" />
                        <ShowCaseCoin coinHash={'QmcRFsarJd1WSCDbGqUm1ZXXuwVhGZRvn4HLTJqyikowKZ'} text="Gold" />
                        <ShowCaseCoin coinHash={'QmZwrSWy4MpJooRg92BJo7dqYBCb4GX11PDwqeemso52dW'} text="Gold Limited Edition" />
                    </Card.Body>
                    <Card.Header><b>Coin condition [Grade]</b></Card.Header>
                    <Card.Body>
                        <ShowCaseCoin coinHash={'Qmex1npDdDmnNZZtQrxhuAHSKdX622Yxkq3bxiG5WHLizx'} text="Perfect [MS-70]" />
                        <ShowCaseCoin coinHash={'QmVsiotVTLY2nfWcvvpysgmarfwR7KdMHVUfmVnL8JoJjh'} text="Tarnish [MS-60]" />
                        <ShowCaseCoin coinHash={'QmRwbWVGisQTNYi2Q4F3ebAYyG4fjPYCpvmzbqifVXJqJp'} text="Scraches [AU-50]" />
                        <ShowCaseCoin coinHash={'QmNTHKeFMKzgmcamYXZpaB2QQdUQXyzVKfzkYEzG1oDLee'} text="Bite Mark [EF-40]" />
                        <ShowCaseCoin coinHash={'QmXb5bjbqJJKhPCGcHjsLC46QMfmBzxvHYzD894zDH9Nkn'} text="Scraches [F-12]" />
                        <ShowCaseCoin coinHash={'QmRpk6HvAP1ySi2FsPoh5vEj4WbtxpnyoFyptNTsYPxcaa'} text="Tarnish [AG-3]" />
                        <ShowCaseCoin coinHash={'QmR7CL1ZAZ3vxgpbT7UrkEmngK6BNhScTokqYZUDtCni5V'} text="Missing Part [P-1]" />
                        <ShowCaseCoin coinHash={'QmSavy4FkmidjKsEzrG4C1BbnDvJZnMYjkyFbnYrAnHfrV'} text="Missing Part [P-1]" />
                    </Card.Body>
                    <Card.Header><b>Emoji Type [Rarity]</b></Card.Header>
                    <Card.Body>
                        <ShowCaseEmoji emojiNo={'1800'} text="Round" text2="[Common]" isLoaded={loaded[0]} no={0} parentCallback={this.handleEmojiCallback}/>
                        <ShowCaseEmoji emojiNo={'1192'} text="Alien" text2="[Uncommon]" isLoaded={loaded[1]} no={1} parentCallback={this.handleEmojiCallback}/>
                        <ShowCaseEmoji emojiNo={'4413'} text="Stable" text2="[Rare]" isLoaded={loaded[2]} no={2} parentCallback={this.handleEmojiCallback}/>
                        <ShowCaseEmoji emojiNo={'5874'} text="Ghost" text2="[Epic]" isLoaded={loaded[3]} no={3} parentCallback={this.handleEmojiCallback}/>
                        <ShowCaseEmoji emojiNo={'1481'} text="Shit" text2="[Legendary]" isLoaded={loaded[4]} no={4} parentCallback={this.handleEmojiCallback}/>
                    </Card.Body>   
                    <Card.Header><b>Random Emojis</b></Card.Header>
                    <Card.Body>
                        <ShowCaseEmoji emojiNo={emojis[0]} text="Emoji No" text2={emojis[0]} isLoaded={loaded[5]} no={5} parentCallback={this.handleEmojiCallback} />
                        <ShowCaseEmoji emojiNo={emojis[1]} text="Emoji No" text2={emojis[1]} isLoaded={loaded[6]} no={6} parentCallback={this.handleEmojiCallback} />
                        <ShowCaseEmoji emojiNo={emojis[2]} text="Emoji No" text2={emojis[2]} isLoaded={loaded[7]} no={7} parentCallback={this.handleEmojiCallback}/>
                        <ShowCaseEmoji emojiNo={emojis[3]} text="Emoji No" text2={emojis[3]} isLoaded={loaded[8]} no={8} parentCallback={this.handleEmojiCallback}/>
                        <ShowCaseEmoji emojiNo={emojis[4]} text="Emoji No" text2={emojis[4]} isLoaded={loaded[9]} no={9} parentCallback={this.handleEmojiCallback}/>
                        <div style={{float: 'right', margin: '6px'}}>
                            <Button variant="secondary" size="sm" onClick={() => { this.populateRandomArray(); this.resetLoadingArray(); }}>
                                Show Other Emojis
                            </Button>
                        </div>
                    </Card.Body>                                      
                </Card>  
            </div>
        );
    }
}