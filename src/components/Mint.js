import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

export default class Mint extends Component {

    render() {
        return (
            <div>
                <Card bg='light' border="secondary" >
                    <Card.Header><b>Mint</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            <b>10,000</b> unique coin templates can be minted for the equivalent of each coin’s nominal value, paid with <i>EMOJIs</i> [ERC20 token].
                            Each Minter will be granted the status of Original Minter (OM) of the coin and thereafter become eligible for the Minter Bonus.<br/>
                        </Card.Text>  
                     </Card.Body>
                    <Card.Header><b>Minter Bonus</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            OMs will receive a financial bonus for certain actions performed on given coin after he or she sells it on the secondary market. Bonus value is 10% of each action’s price.
                            <br/>
                            <i>E.g. John mints an Emoji Coin and sells it to Peter. John will receive 10% of stake rewards, that Peter will claim in the future.</i>
                        </Card.Text>  
                    </Card.Body>
                    <Card.Header><b>Clone</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            Coins above the <b>MS60</b> grade can be cloned by its owner. The price for cloning is equal to twice of  coin’s nominal value and it doubles with each clone created.
                            This process reduces the <b>Grade</b> of both coins by 2 points each time a clone is made.<br/>
                        </Card.Text>                         
                        <Table striped bordered size="sm">
                            <thead>
                                <tr>
                                    <th style={{width:'250px'}}>Coin Type</th>
                                    <th>Coin Count</th>
                                    <th>Max Coppies per Coin</th>
                                </tr>
                            </thead>                            
                            <tbody>
                                <tr>
                                    <td>Gold Limited Edition</td>
                                    <td>10</td>
                                    <td>Can not be cloned</td>
                                </tr>
                                <tr>
                                    <td>Gold</td>
                                    <td>70</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>Gold / Silver Bi-Metal</td>
                                    <td>70</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>Silver Limited Edition</td>
                                    <td>50</td>
                                    <td>Can not be cloned</td>
                                </tr>   
                                <tr>
                                    <td>Silver Gold-Plated</td>
                                    <td>200</td>
                                    <td>4</td>
                                </tr>  
                                <tr>
                                    <td>Silver</td>
                                    <td>1000</td>
                                    <td>5</td>
                                </tr>  
                                <tr>
                                    <td>Limited Edition</td>
                                    <td>130</td>
                                    <td>Can not be cloned</td>
                                </tr>                                                                                                                                           
                                <tr>
                                    <td>Gold-Plated</td>
                                    <td>1000</td>
                                    <td>5</td>
                                </tr>                                                                                                                                           
                                <tr>
                                    <td>Silver-Plated</td>
                                    <td>2000</td>
                                    <td>6</td>
                                </tr>                                                                                                                                           
                                <tr>
                                    <td>Copper</td>
                                    <td>5470</td>
                                    <td>10</td>
                                </tr>                                                                                                                                           
                            </tbody>
                        </Table> 
                        <Card.Text className="text-justify">    
                            <i>* Limited Edition coins can not be cloned </i>
                        </Card.Text>  
                    </Card.Body>
                    <Card.Header><b>Burn</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            Selling on the secondary market isn't going as planned? Burning Emoji Coin will allow to re-gain 90% of coin’s nominal value in EMOJI tokens. After the last copy of a coin is burned, the coin will be lost forever, and can neither be minted nor cloned anymore. <br/><br/>
                            <i>* There is a cool-down period of (1 month) since coin's creation. A coin can not be burned during cool-down period.</i><br/>
                            <i>* A penalty of 10%  con nominal value is enabled to discourage pointless burning. The penalty may be updated/removed in the future. </i><br/>
                            <i>* During initial phases of the project, burning may be disabled.</i>   
                            <br/>                      
                        </Card.Text>                         
                    </Card.Body>
                    <Card.Header><b>Coin Grading</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            All coins are graded in respect of their current condition.<br/><br/>

                        </Card.Text>                         
                        <Table striped bordered size="sm">
                            <thead>
                                <tr>
                                    <th style={{width:'200px'}}>Grade code</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>                            
                            <tbody>
                                <tr>
                                    <td>P-1</td>
                                    <td>Poor</td>
                                </tr>
                                <tr>
                                    <td>FR-2</td>
                                    <td>Fair</td>
                                </tr>
                                <tr>
                                    <td>AG-3</td>
                                    <td>About Good</td>
                                </tr>       
                                <tr>
                                    <td>G-4</td>
                                    <td>Good</td>
                                </tr>   
                                <tr>
                                    <td>VG-5</td>
                                    <td>Very Good</td>
                                </tr>  
                                <tr>
                                    <td>F-12</td>
                                    <td>Fine</td>
                                </tr>  
                                <tr>
                                    <td>VF-20</td>
                                    <td>Very Fine</td>
                                </tr>  
                                <tr>
                                    <td>VF-30</td>
                                    <td>Choice Very Fine</td>
                                </tr> 
                                <tr>
                                    <td>EF-40</td>
                                    <td>Extremely Fine</td>
                                </tr>    
                                <tr>
                                    <td>EF-45</td>
                                    <td>Choice Extremely Fine</td>
                                </tr>  
                                <tr>
                                    <td>AU-50</td>
                                    <td>About Uncirculated</td>
                                </tr>   
                                <tr>
                                    <td>AU-55, AU-58</td>
                                    <td>Choice About Uncirculated</td>
                                </tr>  
                                <tr>
                                    <td>MS-60, MS-61, MS-62</td>
                                    <td>Mint State - Uncirculated</td>
                                </tr>  
                                <tr>
                                    <td>MS-63, MS-64</td>
                                    <td>Mint State - Choice Uncirculated</td>
                                </tr>  
                                <tr>
                                    <td>MS-65, MD-66</td>
                                    <td>Mint State - Gem Uncirculated</td>
                                </tr>  
                                <tr>
                                    <td>MS-67, MS-68, MS-69</td>
                                    <td>Mint State - Superb Gem Uncirculated</td>
                                </tr>  
                                <tr>
                                    <td>MS-70</td>
                                    <td>Mint State - Perfect Uncirculated</td>
                                </tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                            </tbody>
                        </Table>                             
                    </Card.Body>                    
                    <Card.Header><b>Want to make it more personal?</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            An owner can change coin's name and description on the block-chain. <br/>
                            Change name cost 0.5x coin's nominal value. Max 32 alpha-numeric symbols can be used. <br/>
                            Change description cost 1x of coin's nominal value. Max 256 alpha-numeric symbols can be used. <br/><br/>   
                            <i>* Updating coin's name/description does not affect cloned coins - they keep original name/description.</i> <br/><br/>
                        </Card.Text>                         
                    </Card.Body>
                </Card>  
            </div>
        );
    }
}