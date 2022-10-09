import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'

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
        //const [show] = this.state;

        return (
            <div>
                <Card bg='light' border="secondary" >
                    <Card.Header><b>Mint, Burn, Stake, Personalize and Receive Royalties and more...</b></Card.Header>
                    <Card.Body>
                        <div className="details-horisontal"> 
                            <div className="details-text">
                                <Card.Text className="text-justify">
                                    Well ... <br/>
                                    ... I’m not here to sell you your dreams and promise quick profits ... <br/>
                                    ... I’m not here to try and fool you about how dope this project is either ... <br/> 
                                    <br/>
                                    Feeling disappointed? That's your right. But before you move on to browsing for other projects, I urge you to continue reading ... <br/>
                                </Card.Text>  
                            </div>
                            <div>
                                <img style={{height:"200px", width:"200px"}} src={require('../images/face-00.png')} alt="" />
                            </div>
                        </div>  
                        <Alert variant="danger" show={show} onClose={() => this.setState({ show: false })} dismissible>
                            <p className="mb-0">
                                Cryptocurrencies are extremely risky and speculative 'investment'. 
                                Majority of NFT projects are scams, rug-pulls or simply destined to fail. <b>Don’t bet more than you can afford to lose.</b>
                            </p>
                        </Alert>                        
                    </Card.Body>
                </Card>  
            </div>
        );
    }
}