import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import RandomSentence from './RandomSentence';

export default class Roadmap extends Component {

    render() {
        return (
            <div>
                <Card bg='light' border="secondary" >
                    <Card.Header><b>There is no roadmap!!!</b></Card.Header>
                    <Card.Body>
                            <div className="details-horisontal"> 
                                <div className="details-text">
                                    <Card.Text className="text-justify">
                                        This project is my pet project, and I'm working on it alone. While there is no official roadmap, I do have a list of ideas that I'd like to explore.
                                        I can't promise to accomplish every item on that list, but with a bit of luck and help, I believe the sky's the limit for this project. <br/><br/>
                                        <i>As you watch the ideas listed below evolve, ponder the potential of each one. How many of these seeds of possibility do you think will take root and flourish?</i>
                                    </Card.Text>  
                                </div>
                                <div>
                                    <img style={{height:"200px", width:"200px"}} src={require('../images/ic06_BW_512.png')} alt="" />
                                </div>
                            </div> 
                            <br/>
                            <Alert variant="secondary">
                                <RandomSentence jsonFileName="roarmap_1" className="mb-0" delay={10000}/>
                            </Alert>  
                            <Alert variant="secondary">
                                <RandomSentence jsonFileName="roarmap_2" className="mb-0" delay={10000}/>
                            </Alert>  
                            <Alert variant="secondary">
                                <RandomSentence jsonFileName="roarmap_3" className="mb-0" delay={10000}/>
                            </Alert>  
                            <br/>


                    </Card.Body>
                
                </Card>  
            </div>
        );
    }
}