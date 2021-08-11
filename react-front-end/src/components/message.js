import React, { Component } from 'react';
import '../styles/message.scss'
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { Card, Avatar, Input, Typography } from 'antd';
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
                <div key={message.msg} style={{ color: 'white', alignSelf: this.state.userName === message.user ? 'flex-end' : 'flex-start' }} loading={false}>

                  <div style={{ color: 'black', backgroundColor: '#E9C46A'}}>{message.user + ":"}</div>
                  {message.msg}
                
                </div>
              )}
            </ScrollToBottom>
          </div>
          <div className="bottom">
            <Search className="input-box"
              placeholder="input message and send"
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

// import React, { Component } from 'react';
// import '../styles/message.scss'
// import { w3cwebsocket as W3CWebSocket } from "websocket";
// import { Card, Avatar, Input, Typography } from 'antd';
// import '../styles/message.scss';
// const { Search } = Input;
// const { Text } = Typography;
// const { Meta } = Card;

// const client = new W3CWebSocket('ws://127.0.0.1:8001');

// //use .ENV for the backend connection 

// class MessageChat extends Component {

//   state = {
//     userName: '',
//     isLoggedIn: false,
//     messages: []
//   }
//   onButtonClicked = (value) => {
//     client.send(JSON.stringify({
//       type: "message",
//       msg: value,
//       user: this.state.userName
//     }));
//     this.setState({ searchVal: '' })
//   }
//   componentWillMount() {
//     client.onopen = () => {
//       console.log('WebSocket Client Connected');
//     };
//     client.onmessage = (message) => {
//       const dataFromServer = JSON.parse(message.data);
//       console.log('got reply from server!', dataFromServer);
//       if (dataFromServer.type === "message") {
//         this.setState((state) => (
//           {
//             messages: [...state.messages,
//             {
//               msg: dataFromServer.msg,
//               user: dataFromServer.user
//             }]
//           }
//         ))
//       }
//     };
//   };
//   render() {
//     return (
//       <div>
//         <div className="main-container" id='wrapper'>
//           {this.state.isLoggedIn ?
//             <div>
//               <div className="title">
//                 <Text className="main-heading" type="secondary" >LawyerUp Messaging: {this.state.userName}</Text>
//               </div>
//               <div className="message-text">
//                 {this.state.messages.map(message =>
//                   <Card key={message.msg} style={{ color: 'grey', alignSelf: this.state.userName === message.user? 'flex-end' : 'flex-start' }} loading={false}>
//                     <Meta
//                       avatar={
//                         <Avatar>{message.user[0].toUpperCase()}</Avatar>
//                       }
//                       title={message.user + ":"}
//                       description={message.msg}
//                     />
//                   </Card>
//                 )}
//               </div>
//               <div className="bottom">
//                 <Search
//                   placeholder="input message and send"
//                   enterButton="Send"
//                   value={this.state.searchVal}
//                   size="large"
//                   onChange={(e) => this.setState({ searchVal: e.target.value })}
//                   onSearch={value => this.onButtonClicked(value)}
//                 />
//               </div>
//             </div>
//             :
//             <div className="search-box">
//               <Search
//                 placeholder="Enter Username"
//                 enterButton="Login"
//                 size="large"
//                 onSearch={value => this.setState({ isLoggedIn: true, userName: value })}
//               />
//             </div>
//           }
//         </div>
//       </div>
//     )
//   }
// }
// export default MessageChat;