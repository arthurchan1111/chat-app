import * as React from "react";

export class Login extends React.Component{
login(uname, pwd){
  alert(uname);
  alert(pwd);

}

render() {
return(
<div>
<form action= "POST">

<label>Username: </label>
<input type="text">

<label>Password: </label>
<input type="password">

<button type="submit" onClick={()=> this.login()}></button>

</div>

);


}


}
