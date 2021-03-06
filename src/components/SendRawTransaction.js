import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import JSONPretty from 'react-json-pretty';

class SendRawTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hex: '',
      highfees: '',
      data: 'null'
    };
  }

  handleHighFeesChange(e) {
    this.setState({
      highfees: !this.state.highfees
    });
  }

  handleInputChange(e) {
    let value = e.target.value;
    this.setState({
      hex: value
    });
  }

  handleSubmit(e) {
    this.props.bitbox.RawTransactions.sendRawTransaction(this.state.hex, this.state.highfees).then((result) => {
      this.setState({
        data: result
      })
    }, (err) => { console.log(err); });
    e.preventDefault();
  }


  render() {
    return (
      <div className="SendRawTransaction">
        <h1 className="SendRawTransaction-title">SendRawTransaction</h1>
        <form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit.bind(this)}>
          <fieldset>
            <div className="pure-control-group">
              <label>Transaction*</label>
              <input onChange={this.handleInputChange.bind(this)} id="hex" type="text" placeholder="Hex transaction"/>
            </div>
            <div className="pure-control-group">
              <label>Allow High Fees*</label>
              <input onChange={this.handleHighFeesChange.bind(this)} id="highfeetrue"  type="radio" name="highfee" value="true" checked={this.state.highfees}/> true
              <input onChange={this.handleHighFeesChange.bind(this)} type="radio" name="highfee" id="highfeefalse" value="false" checked={this.state.highfees}/> false
            </div>
            <div className="pure-controls">
              <button type="submit" className="pure-button pure-button-primary">Submit</button>
            </div>
          </fieldset>
        </form>
        <h2>Command Result</h2>
        <JSONPretty id="json-pretty" json={this.state.data}></JSONPretty>
        <h2>RPC Help</h2>
        <SyntaxHighlighter language='bash' style={ocean}>{`
  Submits raw transaction (serialized, hex-encoded) to local node and network.

  Also see createrawtransaction and signrawtransaction calls.

  Arguments:
  1. "hexstring"    (string, required) The hex string of the raw transaction)
  2. allowhighfees    (boolean, optional, default=false) Allow high fees

  Result:
  "hex"             (string) The transaction hash in hex

  Examples:

  Create a transaction
  > bitcoin-cli createrawtransaction "[{\"txid\" : \"mytxid\",\"vout\":0}]" "{\"myaddress\":0.01}"
  Sign the transaction, and get back the hex
  > bitcoin-cli signrawtransaction "myhex"

  Send the transaction (signed hex)
  > bitcoin-cli sendrawtransaction "signedhex"

  As a json rpc call
  > curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "sendrawtransaction", "params": ["signedhex"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/
        `}</SyntaxHighlighter>
      </div>
    );
  }
}

export default SendRawTransaction;
