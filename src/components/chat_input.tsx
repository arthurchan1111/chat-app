import * as React from "react";
import * as socketio  from "socket.io-client";

export class Input extends React.Component{


  private socket:any = socketio.connect();

send(){
  alert("send");
}
render() {
  return (
    <form onSubmit = {() => this.send()}>
    <input type="text" placeholder="Enter Message Here"/>
    <button type="submit">Send </button>
    </form>
    );
}


}
