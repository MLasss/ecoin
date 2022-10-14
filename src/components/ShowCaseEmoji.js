import React, { Component } from 'react';

const defaultGateway = process.env.REACT_APP_DEFAULT_GATEWAY;
const facesCID = "bafybeigeiglp53lqltxv3gsgufluzguq43bruo2dvok6cewyul4wud3fx4";
const loadingImg = require('../images/loading.gif');

export default class ShowCaseEmoji extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const faceURL = `${defaultGateway}/ipfs/${facesCID}/${this.props.emojiNo}.png`;
        return (
            <div className="showcaseEmoji">
                <div className="showcaseEmojiImgFrame">
                    <img className="showcaseEmojiImg" 
                        onLoad={() => {
                            if (this.props.parentCallback != null && !currentTarget.src.includes("loading")) this.props.parentCallback(this.props.no);
                        }} 
                        style={{height:"130px", width:"130px"}} src={faceURL} alt="" 
                        onError={({ currentTarget }) => {
                            //currentTarget.onerror = null; 
                            currentTarget.src=loadingImg;
                            setTimeout(function() { currentTarget.src=faceURL; }, 500);
                        }}
                    />
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