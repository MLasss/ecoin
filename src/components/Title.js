import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import RandomSentence from './RandomSentence';

export default class Title extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
      }

    componentDidMount() {
        this.setState({ show: true });
    }      

    render() {
        const { show } = this.state;

        return (
            <div>
                <Card bg='light' border="secondary" >
                    <Card.Header><b> Full Range of Possibilities with Minting, Burning, Staking, Personalization, Royalties and more</b></Card.Header>
                    <Card.Body>
                        <div className="details-horisontal"> 
                            <div className="details-text">
                                <Card.Text className="text-justify">
                                <b>Okay, okay - I get it. </b>
                                You're tired of hearing the same old lines about how amazing this project is and how you'll make a fortune overnight.<br/><br/>
                                So let's skip all that nonsense and just be straightforward:<br/>
                                I'm not going to try and sell you on unrealistic expectations or mislead you with hype. 
                                Instead, I want to invite you to learn more about what we're doing and consider joining us in this journey.<br/> 
                                I believe that together, we can achieve great things.<br/><br/>
                                <i>PS: Don't underestimate the little greedy devil - he may be small, but he has a wealth of knowledge to share with you!</i>
                                </Card.Text>  
                            </div>
                            <div>
                                <img style={{height:"200px", width:"200px"}} src={require('../images/ic05_512.png')} alt="" />
                            </div>
                        </div>  
                        <Alert variant="danger" show={show} onClose={() => this.setState({ show: false })} dismissible>
                            <RandomSentence jsonFileName="title_warning" className="mb-0" delay={60000}/>
                        </Alert>  
                    </Card.Body>
                </Card>  
            </div>
        );
    }
}