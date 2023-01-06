import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

export default class Contracts extends Component {

    render() {
        return (
            <div>
                <Card bg='light' border="secondary" >
                    <Card.Header><b>Risk Warning for EmojiCoins Dapps and Contracts</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            It is important to note that none of the contracts associated with EmojiCoins have been audited. 
                            While I have used out-of-the-box OpenZeppelin code wherever possible, I cannot guarantee that the contracts or dapps are completely secure and free of bugs. 
                            If the project becomes more popular, contract security will be given higher priority.  <br/>
                            In the meantime, please <b>use EmojiCoins dapps and contracts at your own risk</b>.
                        </Card.Text>  
                    </Card.Body>
                    <Card.Header><b>Emoji Coins [ERC721]</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            Contract Address: 0xfF880d9dC4ed76Fe657B4457607AA684237D6124 <br/>
                            Standard ERC721 contract from OpenZepelin, with custom burning, minting and token meta-data logic.<br/>
                        </Card.Text>  
                    </Card.Body>
                    <Card.Header><b>Emoji Tokens (EMOJIS) [ERC20]</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            Contract Address: 0x3CA90c2b93d66f86FE70c0E7623bcbbAD18f2A14 <br/>
                            Standard ERC721 contract from OpenZepelin, with custom burning and minting logic.<br/>
                        </Card.Text>  
                    </Card.Body>   
                    <Card.Header><b>Storage</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            Contract Address: 0xB3307a62888d6cA879D6A09b7d6e4928E0789902 <br/>
                            Contains all meta-data for Emoji Coin templates and instances.<br/>
                            <i>Does not contain token ownership detail, this is kept on ERC721.</i>
                        </Card.Text>  
                    </Card.Body>   
                    <Card.Header><b>Logic</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            Contract Address: 0xbeDfCd1e7cC0D32863a08bC0218e6347A23C6Ad2 <br/>
                            Mainly responsible for ERC721 meta-data structure, logic was extracted to separate contract, so it could be easily updated if needed.
                        </Card.Text>  
                    </Card.Body>   
                    <Card.Header><b>User Access</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            Contract Address: 0xE6b6CcE5C0B175ed66C7766c81466772d10B70CD <br/>
                            Allows minting, cloning, burning, changing Emoji Coin's name and description.
                        </Card.Text>  
                    </Card.Body>  
                    <Card.Header><b>Staking</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            Contract Address: 0x2e8539e2268CDF5509A162c65bde0158E67ec714 <br/>
                            All Staking related functionality.
                        </Card.Text>  
                    </Card.Body>  
                    <Card.Header><b>Administrator</b></Card.Header>
                    <Card.Body>
                        <Card.Text className="text-justify">
                            Contract Address: 0x4a788492c90880B94537591d6541e471a72a705d <br/>
                            Batch minting, airdrops, etc.
                        </Card.Text>  
                    </Card.Body>                                                     
                </Card>  
            </div>
        );
    }
}