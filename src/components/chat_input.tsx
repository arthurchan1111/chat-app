import * as React from "react";

export class Input extends React.Component{
send(){
  alert("send");
}
render() {
  return (<div><form><input type="text" placeholder="Enter Message Here"/><button onClick={()=>this.send()} type="submit">Send </button></form>

  </div>);
}


}
