import React, { Component } from 'react';

const baseURL = "https://ordinals.com";
const loadingImg = require('../images/loading.gif');

export default class InscriptionEmoji extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const faceURL = `${baseURL}/content/${this.props.inscriptionId}`;
        return (
            <div className="inscriptionEmoji">
                <div className="inscriptionEmojiImgFrame">
                    <a href={faceURL} target="_blank">
                        <img className="inscriptionEmojiImg" 
                            onLoad={() => {
                                if (this.props.parentCallback != null) this.props.parentCallback(this.props.no);
                            }} 
                            style={{height:"130px", width:"130px"}} alt="" 
                            src={this.props.isLoaded || this.props.no == null ? faceURL : loadingImg} 
                            onError={({ currentTarget }) => {
                                currentTarget.src=loadingImg;
                                setTimeout(function() { currentTarget.src=faceURL; }, 1000);
                            }}
                        />
                    </a>  
                </div>
            </div>
        );
    }
}