import React, { Component } from 'react';
import '../styles/message.scss'
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { Card, Avatar, Input, Typography } from 'antd';
import '../styles/message.scss';

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
      user: this.state.userName
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
      <div>
        <div className="main-container" id='wrapper'>
          {this.state.isLoggedIn ?
            <div>
              <div className="title">
                <Text className="main-heading" type="secondary" >LawyerUp Messaging: {this.state.userName}</Text>
              </div>
              <div className="message-text">
                {this.state.messages.map(message =>
                  <Card key={message.msg} style={{ color: 'grey', alignSelf: this.state.userName === message.user? 'flex-end' : 'flex-start' }} loading={false}>
                    <Meta
                      avatar={
                        <Avatar>{message.user[0].toUpperCase()}</Avatar>
                      }
                      title={message.user + ":"}
                      description={message.msg}
                    />
                  </Card>
                )}
              </div>
              <div className="bottom">
                <Search
                  placeholder="input message and send"
                  enterButton="Send"
                  value={this.state.searchVal}
                  size="large"
                  onChange={(e) => this.setState({ searchVal: e.target.value })}
                  onSearch={value => this.onButtonClicked(value)}
                />
              </div>
            </div>
            :
            <div className="search-box">
              <Search
                placeholder="Enter Username"
                enterButton="Login"
                size="large"
                onSearch={value => this.setState({ isLoggedIn: true, userName: value })}
              />
            </div>
          }
        </div>
      </div>
    )
  }
}
export default MessageChatBox;

// import React, { useState, useEffect } from 'react';
// import '../styles/message.scss'
// import { w3cwebsocket as W3CWebSocket } from "websocket";
// import { Card, Avatar, Input, Typography } from 'antd';
// import '../styles/message.scss';

// const { Search } = Input;
// const { Text } = Typography;
// const { Meta } = Card;

// const client = new W3CWebSocket('ws://127.0.0.1:8001');
// //const client = new W3CWebSocket('ws://127.0.0.1:8001');
// //use .ENV for the backend connection 
// //let client;

// export default function MessageChatBox(props) {
//   const [state, setState] = useState({
//     userName: '',
//     isLoggedIn: false,
//     messages: []
//   })

//   useEffect(() => {
//     // Anything in here is fired on component mount.
   
    
//     return () => {
//       // Anything in here is fired on component unmount.
//       client.onopen = () => {
//         console.log('WebSocket Client Connected');
//       };
      
//       client.onmessage = (message) => {
//         const dataFromServer = JSON.parse(message.data);
//         console.log('got reply from server!', dataFromServer);
//         if (dataFromServer.type === "message") {
//           setState((state) => (
//             {
//               messages: [...state.messages,
//                 {
//                   msg: dataFromServer.msg,
//                   user: dataFromServer.user
//                 }]
//               }
//               ))
//             }
//           };
//         }
//       }, [])
      
//       const onButtonClicked = (value) => {
//         client.send(JSON.stringify({
//           type: "message",
//           msg: value,
//           user: state.userName
//         }));
//         setState({ searchVal: '' })
//       }

//     return (
//       <section className="wrapper">
//       <div className="main-container" id='wrapper'>
//         <div>
//             <div className="message-box">
//               <div className="title">
//                 <Text className="main-heading" type="secondary" >LawyerUp Messaging: {state.userName}</Text>
//               </div>
//               <div className="message-text">
//                 {state.messages ? state.messages.map(message =>
//                   <Card key={message.msg} style={{ color:'darkblue', alignSelf: state.userName === message.user? 'flex-end' : 'flex-start' }} loading={false}>
//                     <Meta
//                       avatar={
//                         <Avatar style={{
//                           backgroundColor: '#f56a00',
//                         }}>{message.user}</Avatar>
//                       }
//                       description={message.msg}
//                     />
//                   </Card>
//                 ) : 0}
//               </div>
//               <div className="bottom">
//                 <Search className='user-input'
//                   placeholder="input message and send"
//                   enterButton="Send"
//                   value={state.searchVal}
//                   size="small"
//                   onChange={(e) => setState({ searchVal: e.target.value })}
//                   onSearch={value => onButtonClicked(value)}
//                 />
//               </div>
//             </div>
//         </div>
//       </div>
//       </section>
//     )
// }
