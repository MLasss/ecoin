import React, { Component } from 'react';
import queryString from 'query-string';
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Title from './components/Title'
import About from './components/About'
import Distribution from './components/Distribution'
import Contracts from './components/Contracts'
import Staking from './components/Staking'
import Mint from './components/Mint'
import Roadmap from './components/Roadmap'
import Help from './components/Help'
import BTC from './components/BTC'
import FAQ from './components/FAQ'
import Showcase from './components/Showcase'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import TextPrinter from './components/TextPrinter'


const defaultGateway = "https://ipfs.io";

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
        title: 'Emoji Coins',
        selectedTab: 'home'
      };
    }

    componentDidMount() {
        const sTab = queryString.parse(window.location.search);

        if (sTab.tab != null) 
        {
            if (sTab.tab == 'collectibles' && this.state.selectedTab != sTab.tab)
            {
                this.changeTab('collectibles');
            }
        }
    }

    changeTab(tab)
    {
        this.setState({ selectedTab: tab })
    }

    render() {
        return (
            <Container className="p-3 mainContainer">
                <div className="home-box">
                    <div className="banner">
                        <div className="bannerOpensea">
                            <a href="https://opensea.io/collection/emojicoins/" title="Buy on OpenSea" target="_blank">
                                <img className="bannerOpenseaImg" src="https://storage.googleapis.com/opensea-static/Logomark/Badge%20-%20Available%20On%20-%20Dark.png" alt="Available on OpenSea" />
                            </a>
                        </div>
                        <div className="bannerTitle">
                            <TextPrinter jsonFileName="banner_text" delay={50} sentenceDelay={10000} />
                        </div>                        
                    </div>
                    <Title />
                    <Tabs activeKey={this.state.selectedTab} onSelect={(k) => this.changeTab(k)}>
                        <Tab eventKey="home" title="About">
                            <About changeTab={(k) => this.changeTab(k)} />
                        </Tab>
                        <Tab eventKey="showcase" title="Showcase" mountOnEnter={true}>
                            <Showcase />
                        </Tab>                          
                        <Tab eventKey="mint" title="Mint/Burn" mountOnEnter={true}>
                            <Mint />
                        </Tab>                      
                        <Tab eventKey="staking" title="Stake" mountOnEnter={true}>
                            <Staking />
                        </Tab>                      
                        <Tab eventKey="distribution" title="Distribution" mountOnEnter={true}>
                            <Distribution />
                        </Tab>                     
                        <Tab eventKey="roadmap" title="Roadmap" mountOnEnter={true}>
                            <Roadmap />
                        </Tab>
                        <Tab eventKey="btc" title="BTC" mountOnEnter={true}>
                            <BTC />
                        </Tab> 
                        <Tab eventKey="faq" title="FAQ" mountOnEnter={true}>
                            <FAQ />
                        </Tab>                                                
                        <Tab eventKey="help" disabled mountOnEnter={true}>
                            <Help />
                        </Tab>
                        <Tab eventKey="contracts" disabled mountOnEnter={true}>
                            <Contracts />
                        </Tab>    
                    </Tabs>
                    <div className="footer">
                        <div className="footerColumn">
                            <b>Dapps</b><br/>
                            <Button variant="dark" size="sm" active href="http://gallery.emojicoins.org/" className="footerItem"> 
                                <b>EmojiCoins Gallery</b><Badge bg="danger" className="footerBadge">NEW</Badge>
                            </Button>                                
                            <Button variant="dark" size="sm" active href="http://stake.emojicoins.org/" className="footerItem"> 
                                <b>EmojiCoins Stake</b><Badge bg="danger" className="footerBadge">NEW</Badge>
                            </Button>    
                            <Button variant="dark" size="sm" active href="http://mint.emojicoins.org/"  className="footerItem"> 
                                <b>EmojiCoins Mint</b><Badge bg="danger" className="footerBadge">NEW</Badge>
                            </Button>    
                        </div>
                        <div className="footerColumn">
                            <b>Other Resources</b><br/>
                            <Button variant="dark" size="sm" active onClick={(k) => this.changeTab('contracts')} className="footerItem"> 
                                <b>Contracts</b>
                            </Button>    
                            <Button variant="dark" size="sm" active href={defaultGateway + '/ipfs/QmX24gZT2Ar33d7DDPdEYxQPcgJ1evvvP4zRJx8TiydLZd' } className="footerItem"> 
                                <b>Ownership</b>
                            </Button>                               
                        </div>
                        <div className="footerColumn">
                            <b>Contacts</b><br/>
                            <Button variant="dark" size="sm" active href="mailto:emojicoins@protonmail.com" className="footerItem" > 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0d6efd" className="bi bi-envelope-fill" viewBox="0 0 20 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                </svg>
                                <b>emojicoins@protonmail.com</b>
                            </Button> 
                            <Button variant="dark" size="sm" active href="https://twitter.com/emoji_coins" className="footerItem" > 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2081E2"  className="bi bi-twitter" viewBox="0 0 20 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                                <b>@emoji_coins</b>
                            </Button>  
                            <Button variant="dark" size="sm" active href="#" className="footerItem" > 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2081E2" className="bi bi-discord" viewBox="0 0 20 16">
                                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                                </svg>
                                <b>EmojiCoins</b><Badge bg="danger" className="footerBadge">COMING</Badge>
                            </Button>  
                            <Button variant="dark" size="sm" active href="https://opensea.io/collection/emojicoins/" className="footerItem" > 
                                <svg width="20" height="20" viewBox="0 0 110 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M90 45C90 69.8514 69.8514 90 45 90C20.1486 90 0 69.8514 0 45C0 20.1486 20.1486 0 45 0C69.8566 0 90 20.1486 90 45Z" fill="#2081E2"/>
                                    <path d="M22.2011 46.512L22.3953 46.2069L34.1016 27.8939C34.2726 27.6257 34.6749 27.6535 34.8043 27.9447C36.76 32.3277 38.4475 37.7786 37.6569 41.1721C37.3194 42.5683 36.3948 44.4593 35.3545 46.2069C35.2204 46.4612 35.0725 46.7109 34.9153 46.9513C34.8413 47.0622 34.7165 47.127 34.5824 47.127H22.5432C22.2196 47.127 22.0301 46.7756 22.2011 46.512Z" fill="#1a1e21"/>
                                    <path d="M74.38 49.9149V52.8137C74.38 52.9801 74.2783 53.1281 74.1304 53.1928C73.2242 53.5812 70.1219 55.0052 68.832 56.799C65.5402 61.3807 63.0251 67.932 57.4031 67.932H33.949C25.6362 67.932 18.9 61.1727 18.9 52.8322V52.564C18.9 52.3421 19.0803 52.1618 19.3023 52.1618H32.377C32.6359 52.1618 32.8255 52.4022 32.8024 52.6565C32.7099 53.5072 32.8671 54.3764 33.2693 55.167C34.0461 56.7435 35.655 57.7283 37.3934 57.7283H43.866V52.675H37.4673C37.1391 52.675 36.9449 52.2959 37.1345 52.0277C37.2038 51.9214 37.2824 51.8104 37.3656 51.6856C37.9713 50.8257 38.8358 49.4895 39.6958 47.9684C40.2829 46.9421 40.8516 45.8463 41.3093 44.746C41.4018 44.5472 41.4758 44.3438 41.5497 44.1449C41.6746 43.7936 41.804 43.4653 41.8965 43.1371C41.9889 42.8597 42.0629 42.5684 42.1369 42.2956C42.3542 41.3617 42.4467 40.3723 42.4467 39.3459C42.4467 38.9437 42.4282 38.523 42.3912 38.1207C42.3727 37.6815 42.3172 37.2423 42.2617 36.8031C42.2247 36.4147 42.1554 36.031 42.0814 35.6288C41.9889 35.0416 41.8595 34.4591 41.7115 33.8719L41.6607 33.65C41.5497 33.2478 41.4573 32.864 41.3278 32.4618C40.9626 31.1996 40.5418 29.9698 40.098 28.8186C39.9362 28.3609 39.7512 27.9217 39.5663 27.4825C39.2935 26.8213 39.0161 26.2203 38.7619 25.6516C38.6324 25.3927 38.5214 25.1569 38.4105 24.9165C38.2857 24.6437 38.1562 24.371 38.0268 24.112C37.9343 23.9132 37.8279 23.7283 37.754 23.5434L36.9634 22.0824C36.8524 21.8836 37.0374 21.6478 37.2546 21.7079L42.2016 23.0487H42.2155C42.2247 23.0487 42.2294 23.0533 42.234 23.0533L42.8859 23.2336L43.6025 23.437L43.866 23.511V20.5706C43.866 19.1512 45.0034 18 46.4089 18C47.1116 18 47.7496 18.2866 48.2073 18.7536C48.665 19.2206 48.9517 19.8586 48.9517 20.5706V24.935L49.4787 25.0829C49.5204 25.0968 49.562 25.1153 49.599 25.143C49.7284 25.2401 49.9133 25.3835 50.1491 25.5591C50.3341 25.7071 50.5329 25.8874 50.7733 26.0723C51.2495 26.4561 51.8181 26.9508 52.4423 27.5194C52.6087 27.6628 52.7706 27.8107 52.9185 27.9587C53.723 28.7076 54.6245 29.5861 55.4845 30.557C55.7249 30.8297 55.9607 31.1071 56.2011 31.3984C56.4415 31.6943 56.6958 31.9856 56.9177 32.2769C57.209 32.6652 57.5233 33.0674 57.7961 33.4882C57.9256 33.687 58.0735 33.8904 58.1984 34.0892C58.5497 34.6209 58.8595 35.1711 59.1554 35.7212C59.2802 35.9755 59.4097 36.2529 59.5206 36.5257C59.8489 37.2608 60.1078 38.0098 60.2742 38.7588C60.3251 38.9206 60.3621 39.0963 60.3806 39.2535V39.2904C60.436 39.5124 60.4545 39.7482 60.473 39.9886C60.547 40.756 60.51 41.5235 60.3436 42.2956C60.2742 42.6239 60.1818 42.9336 60.0708 43.2619C59.9598 43.5763 59.8489 43.9045 59.7056 44.2143C59.4282 44.8569 59.0999 45.4996 58.7115 46.1006C58.5867 46.3225 58.4388 46.5583 58.2908 46.7802C58.129 47.016 57.9626 47.238 57.8146 47.4553C57.6112 47.7327 57.3939 48.0239 57.172 48.2828C56.9732 48.5556 56.7697 48.8284 56.5478 49.0688C56.2381 49.434 55.9422 49.7808 55.6324 50.1137C55.4475 50.331 55.2487 50.5529 55.0452 50.7517C54.8464 50.9736 54.643 51.1724 54.4581 51.3573C54.1483 51.6671 53.8894 51.9075 53.6721 52.1063L53.1635 52.5733C53.0896 52.638 52.9925 52.675 52.8908 52.675H48.9517V57.7283H53.9079C55.0175 57.7283 56.0716 57.3353 56.9223 56.6141C57.2136 56.3598 58.485 55.2594 59.9876 53.5997C60.0384 53.5442 60.1032 53.5026 60.1771 53.4841L73.8668 49.5265C74.1211 49.4525 74.38 49.6467 74.38 49.9149Z" fill="#1a1e21"/>
                                </svg>
                                <b>OpenSea</b>
                            </Button>                                  
                            <Button variant="dark" size="sm" active onClick={(k) => this.changeTab('help')} className="footerItem"> 
                                <b>Your Contribution</b>
                            </Button>                         
                        </div>
                    </div>
                    <div className="footerCopyrights">
                        © 2021 - 2022 EmojiCoins
                    </div>

                </div>
            </Container>
        );
    }
}