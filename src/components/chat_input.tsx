import * as React from "react";
import * as socketio  from "socket.io-client";

export class Input extends React.Component<{}, { value: string }>{
private socket:any = socketio.connect();
  constructor(props:any){
    super(props);
    this.state = {value: ''};
     this.send = this.send.bind(this);

  }

send(){

  this.socket.emit('chat message', this.state.value);
  this.state = {value: ''};

}
render() {
  return (
    <form onSubmit = {() => this.send()}>
    <input type="text" placeholder="Enter Message Here" value={this.state.value}/>
    <button type="submit">Send </button>
    </form>
    );
}


}
