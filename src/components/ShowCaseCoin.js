import React, { Component } from 'react';

const defaultGateway = "https://ipfs.io";

export default class ShowCaseCoin extends Component {

    render() {
        return (
            <div className="showcaseCoin">
                <div className="showcaseCoinImgFrame">
                    <img className="showcaseCoinImg" style={{height:"168px", width:"168px"}} src={defaultGateway + "/ipfs/" + this.props.coinHash } alt="" />
                    <br/>
                    <b>{this.props.text}</b> <br/>

                </div>
                <div style={{margin:"-4px 2px 4px 4px", textAlign:"center"}}>
                    <a href={'./?preview&id=' + this.props.coinHash}>[View Certificate]</a>
                </div>
            </div>
        );
    }
}