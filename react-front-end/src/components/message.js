import React, { Component } from 'react';
import '../styles/message.scss'
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { Card, Input, Typography } from 'antd';
import '../styles/message.scss';
import ScrollToBottom from "react-scroll-to-bottom";

const { Search } = Input;
const { Text } = Typography;
const { Meta } = Card;

const client = new W3CWebSocket('ws://127.0.0.1:8001');
//use .ENV for the backend connection 

class MessageChatBox extends Component {

  state = {
    userName: '',
    isLoggedIn: false,
    messages: []
  }

  onButtonClicked = (value) => {
    client.send(JSON.stringify({
      type: "message",
      msg: value,
      user: sessionStorage.name,
    }));
    this.setState({ searchVal: '' })
  }

  componentWillMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log('got reply from server!', dataFromServer);
      if (dataFromServer.type === "message") {
        this.setState((state) => (
          {
            messages: [...state.messages,
            {
              msg: dataFromServer.msg,
              user: dataFromServer.user
            }]
          }
        ))
      }
    };
  };

  render() {
    return (

      <div className="main-container" id='wrapper'>

        <div>
          <div className="title">
            <Text className="main-heading" type="secondary">LawyerUp Messaging: {this.state.userName}</Text>
          </div>
          <div className="message-text">
            <ScrollToBottom className="message-box">
              {this.state.messages.map(message =>
                <div key={message.msg} style={{ color: 'black', alignSelf: this.state.userName === message.user ? 'flex-end' : 'flex-start' }} loading={false}>

                  <div style={{ color: 'black', backgroundColor: '#E9C46A'}}>{message.user + ":"}</div>
                  {message.msg}
                
                </div>
              )}
            </ScrollToBottom>
          </div>
          <div className="bottom">
            <Search className="input-box"
              placeholder="Put your message here"
              enterButton="Send"
              value={this.state.searchVal}
              size="large"
              onChange={(e) => this.setState({ searchVal: e.target.value })}
              onSearch={value => this.onButtonClicked(value)}
            />
          </div>
        </div>

      </div>

    )
  }
}
export default MessageChatBox;
