import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

export default class Mint extends Component {

    render() {
        return (
            <div>
                <Card bg='light' border="secondary" >
                    <Card.Header><b>Minting [Find the EmojiCoins Mint Dapp in the Footer]</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            For a payment of <i>EMOJI</i> tokens (<i>EMOJIS</i>) [ERC20], unique coin templates can be minted at a rate of one template per coin's nominal value. 
                            There is a limit of <b>10,000</b> templates that can be minted. 
                            The person who mints the coin will be designated as the Original Minter (OM) of the coin and will be eligible for the Minter Bonus.
                        </Card.Text>  
                     </Card.Body>
                    <Card.Header><b>Minter Bonus</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            Original Minters (OMs) will receive a financial bonus for certain actions performed on a coin after it has been sold on the secondary market. The bonus is equal to 10% of the price of each action. <br/>
                            <i>For example, if John mints an Emoji Coin and sells it to Peter, John will receive 10% of the staking rewards that Peter claims in the future.</i>
                        </Card.Text>  
                    </Card.Body>
                    <Card.Header><b>Cloning [Find the EmojiCoins Gallery Dapp in the Footer]</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            Most coins with a grade above <b>MS60</b> can be cloned by their owner. The cost of cloning a coin is equal to twice its nominal value, and this cost doubles with each additional clone that is created. 
                            This process <b>reduces the grade</b> of both the original coin and the clone by 2 points each time a clone is made.<br/>
                        </Card.Text>                         
                        <Table striped bordered size="sm">
                            <thead>
                                <tr>
                                    <th style={{width:'250px'}}>Coin Template Type</th>
                                    <th>Coin Template Count</th>
                                    <th>Max Coins per Template</th>
                                </tr>
                            </thead>                            
                            <tbody>
                                <tr>
                                    <td>Gold Limited Edition</td>
                                    <td>10</td>
                                    <td>1 (Can not be cloned)</td>
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
                                    <td>1 (Can not be cloned)</td>
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
                                    <td>1 (Can not be cloned)</td>
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
                    <Card.Header><b>Burning [Find the EmojiCoins Gallery Dapp in the Footer]</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            If you are having trouble selling your Emoji Coin on the secondary market, you can burn the coin to receive 90% of its nominal value in <i>EMOJI</i> tokens. 
                            However, please note that burning a coin is a permanent action and the coin will be lost forever, so it cannot be minted or cloned again.<br/><br/>
                            <i>Please also note the following restrictions on burning:</i><br/>
                            <i>* There is a one-month "cool-down" period after the coin is created, during which it cannot be burned.</i><br/>
                            <i>* A penalty of 10% of the nominal value is applied to discourage unnecessary burning. This penalty may be updated or removed in the future.</i><br/>
                            <i>* During the initial phase of the project, burning may be disabled.</i><br/>
                        </Card.Text>                         
                    </Card.Body>
                    <Card.Header><b>Coin Grading</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            All coins are graded based on their current condition using the grading scale established by the Professional Coin Grading Service (PCGS).<br/>
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
                    <Card.Header><b>Add a Personal Touch [Find the EmojiCoins Gallery Dapp in the Footer]</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            As the owner of a coin, you can change its name and description on the blockchain. <br/>
                            It costs 0.5 times the coin's nominal value to change the name (maximum 32 alpha-numeric characters), 
                            and it costs 1 times the coin's nominal value to change the description (maximum 256 alpha-numeric characters). <br/>  
                            <i>Please note that updating the name or description of a coin does not affect any clones of the coin, which will retain their original name and description.</i> <br/><br/>
                        </Card.Text>                         
                    </Card.Body>
                </Card>  
            </div>
        );
    }
}