import React, { Component } from 'react';

const defaultGateway = "https://ipfs.io";

export default class ShowCaseEmoji extends Component {
    constructor(props) {
        super(props);
      }

    handleOnLoad = (e) => {
        if (this.props.parentCallback != null) this.props.parentCallback(this.props.no);
    };

    render() {
        return (
            <div className="showcaseEmoji">
                <div className="showcaseEmojiImgFrame">
                    <img className="showcaseEmojiImg" onLoad={this.handleOnLoad} style={{height:"130px", width:"130px"}} src={defaultGateway + "/ipfs/bafybeigeiglp53lqltxv3gsgufluzguq43bruo2dvok6cewyul4wud3fx4/" + this.props.emojiNo + ".png"} alt="" />
                    <br/>
                    <b>{this.props.text}</b> <br/> 
                </div>
                <div style={{margin:"-4px 2px 4px 4px", textAlign:"center"}}>
                    <b>{this.props.isLoaded || this.props.no == null ? this.props.text2 : "Loading..." }</b> <br/>
                </div>                
            </div>
        );
    }
}