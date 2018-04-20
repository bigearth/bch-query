import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom';

import AbandonTransaction from './components/AbandonTransaction';
import AddMultisigAddress from './components/AddMultisigAddress';
import AddNode from './components/AddNode';
import CreateMultisig from './components/CreateMultisig';
import CreateRawTransaction from './components/CreateRawTransaction';
import DecodeRawTransaction from './components/DecodeRawTransaction';
import DecodeScript from './components/DecodeScript';
import DumpPrivkey from './components/DumpPrivkey';
import EncryptWallet from './components/EncryptWallet';
import EstimateFee from './components/EstimateFee';
import EstimatePriority from './components/EstimatePriority';
import GetAccountAddress from './components/GetAccountAddress';
import GetAccount from './components/GetAccount';
import GetAddedNodeInfo from './components/GetAddedNodeInfo';
import GetAddressesByAccount from './components/GetAddressesByAccount';
import GetBalance from './components/GetBalance';
import GetRawTransaction from './components/GetRawTransaction';
import Homepage from './Homepage';
import SetTxFee from './components/SetTxFee';
import SignMessage from './components/SignMessage';
import SignRawTransaction from './components/SignRawTransaction';
import SubmitBlock from './components/SubmitBlock';
import ValidateAddress from './components/ValidateAddress';
import VerifyMessage from './components/VerifyMessage';
import VerifyTxOutProof from './components/VerifyTxOutProof';
import WalletLock from './components/WalletLock';
import WalletPassPhrase from './components/WalletPassPhrase';
import WalletPassPhraseChange from './components/WalletPassPhraseChange';

import './App.css';
let BITBOXCli = require('bitbox-cli/lib/bitboxcli').default;
let BITBOX = new BITBOXCli({
});


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Router>
        <div>
          <a href="#menu" id="menuLink" className="menu-link">
            <span></span>
          </a>

          <div id="menu">
            <div className="pure-menu">
              <NavLink
                activeClassName="pure-menu-selected"
                className="pure-menu-heading"
                to="/">
                BITBOX
              </NavLink>

              <ul className="pure-menu-list">
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/abandontransaction">
                    AbandonTransaction
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/addmultisigaddress">
                    AddMultisigAddress
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/addnode">
                    AddNode
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/createmultisig">
                    CreateMultisig
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/createrawtransaction">
                    CreateRawTransaction
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/decoderawtransaction">
                    DecodeRawTransaction
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/decodescript">
                    DecodeScript
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/dumpprivkey">
                    DumpPrivkey
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/encryptwallet">
                    EncryptWallet
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/estimatefee">
                    EstimateFee
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/estimatepriority">
                    EstimatePriority
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/getaccountaddress">
                    GetAccountAddress
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/getaccount">
                    GetAccount
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/getaddednodeinfo">
                    GetAddedNodeInfo
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/getaddressesbyaccount">
                    GetAddressesByAccount
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/getbalance">
                    GetBalance
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/getrawtransaction">
                    GetRawTransaction
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/settxfee">
                    SetTxFee
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/signmessage">
                    SignMessage
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/signrawtransaction">
                    SignRawTransaction
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/submitblock">
                    SubmitBlock
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/validateaddress">
                    ValidateAddress
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/verifymessage">
                    VerifyMessage
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/verifytxoutproof">
                    VerifyTxOutProof
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/walletlock">
                    WalletLock
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/walletpassphrase">
                    WalletPassPhrase
                  </NavLink>
                </li>
                <li className="pure-menu-item">
                  <NavLink
                    activeClassName="pure-menu-selected"
                    className="pure-menu-link"
                    to="/walletpassphrasechange">
                    WalletPassPhraseChange
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <Switch>
            <Route path="/abandontransaction" component={AbandonTransaction}/>
            <Route path="/addmultisigaddress" component={AddMultisigAddress}/>
            <Route path="/addnode" component={AddNode}/>
            <Route path="/createmultisig" component={CreateMultisig}/>
            <Route path="/createrawtransaction" component={CreateRawTransaction}/>
            <Route path="/decoderawtransaction" component={DecodeRawTransaction}/>
            <Route path="/decodescript" component={DecodeScript}/>
            <Route path="/dumpprivkey" component={DumpPrivkey}/>
            <Route path="/encryptwallet" component={EncryptWallet}/>
            <Route path="/estimatefee" component={EstimateFee}/>
            <Route path="/estimatepriority" component={EstimatePriority}/>
            <Route path="/getaccountaddress" component={GetAccountAddress}/>
            <Route path="/getaccount" component={GetAccount}/>
            <Route path="/getaddednodeinfo" component={GetAddedNodeInfo}/>
            <Route path="/getaddressesbyaccount" component={GetAddressesByAccount}/>
            <Route path="/getbalance" component={GetBalance}/>
            <Route path="/getrawtransaction" component={GetRawTransaction}/>
            <Route path="/settxfee" component={SetTxFee}/>
            <Route path="/signmessage" component={SignMessage}/>
            <Route path="/signrawtransaction" component={SignRawTransaction}/>
            <Route path="/submitblock" component={SubmitBlock}/>
            <Route path="/validateaddress" component={ValidateAddress}/>
            <Route path="/verifymessage" component={VerifyMessage}/>
            <Route path="/verifytxoutproof" component={VerifyTxOutProof}/>
            <Route path="/walletlock" component={WalletLock}/>
            <Route path="/walletpassphrase" component={WalletPassPhrase}/>
            <Route path="/walletpassphrasechange" component={WalletPassPhraseChange}/>
            <Route exact path="/" component={Homepage}/>
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
