// import React, { Component } from 'react';

// import { w3cwebsocket as W3CWebSocket } from "websocket";

// const client = new W3CWebSocket('ws://127.0.0.1:8001');

// export default class Socket extends Component {

//   onButtonClicked = (value) => {
//     client.send(JSON.stringify({
//       type: "message",
//       msg: value
//     }));
//   }
//   componentWillMount() {
//     client.onopen = () => {
//       console.log('WebSocket Client Connected');
//       // let data = {"type": "contentchange", "utf8Data": "test"};
//       // client.send(JSON.stringify({
//       //   data,
//       //   type: "text"
//       // }))
//     };
//     client.onmessage = (message) => {
//       const dataFromServer = JSON.parse(message.data);
//       console.log('got reply from server!', dataFromServer);
//     };
//   }

//   render() {
//     return(
//     <div>
//       <button onClick={() => this.onButtonClicked("Hi")}>Send Message</button>
//     </div>
//     )
//   }
// }
