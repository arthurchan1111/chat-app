import * as React from "react";

export class Login extends React.Component{
login(){


}

render() {
return(

<form action= "POST">

<label>Username: </label>
<input type="text"/>

<label>Password: </label>
<input type="password"/>

<button type="submit" onClick={()=> this.login()}></button>
</form>


);


}


}
