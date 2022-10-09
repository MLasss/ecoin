import React, { Component } from 'react';
import Preview from './Preview';
import Home from './Home';
import {BrowserRouter as Router, Navigate} from 'react-router-dom';
import queryString from 'query-string';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Emoji Coins'
        };
    }

    render() {
        const parsed = queryString.parse(window.location.search);
        //console.log(parsed);
        //console.log(parsed.preview);

        let coinId = "0x";
        if (parsed.id != null) { coinId = parsed.id; }

        if (parsed.id == null)
        {
            return ( 
                <div>
                    <Home />
                </div> 
            );
        }
        else
        {
            return (
                <div>
                    <Preview coinId={coinId} />
                </div>
            );
        }
    }
}