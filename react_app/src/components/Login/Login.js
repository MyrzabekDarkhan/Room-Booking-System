import * as React from 'react';
import { useState } from 'react';
import './style.scss';
import loginImg from './../../login.svg';
import history from '../../history';


export class Login extends React.Component {
  constructor(props) {
    super(props);
  

  this.state = {
    name: "",
    password: "",
  };

  // this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  // handleSuccessfulAuth(data) {
  //   this.props.handleLogin(data);
  //   this.props.history.push("/home");
  // }


  handleSubmit(event){
 
    event.preventDefault();
   // console.log("User name" + this.state.username)
    //console.log("User Email :"  + this.state.password)
    const data = { name:this.state.name, password:this.state.password }
    
  const options = {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(data)

  };
  fetch('http://localhost:3000/users/auth',options)
  .then(response => response.json())
  .then((user) => {
    if ( !user  ) {
      console.log("User doesn't exists. Show error message"+JSON.stringify(user.name));
      return;
     } else {
      console.log("User exists. Go to the login page"+user.name);
      localStorage.setItem('user',JSON.stringify(user));
      console.log('us id: '+ JSON.stringify({user}))
      //window.location.reload();
      history.push("/home");
     }
    // if(!user){
    //   console.log('error')
    //   return
    //
  })

  }

  render() {
    return (
      <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="name">Username</label>
              <input 
              type="text" 
              name="name" 
              placeholder="name" 
              value={this.state.username}
              onChange={this.handleChange}
              required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
              type="password" 
              name="password" 
              placeholder="password" 
              value={this.state.password}
              onChange={this.handleChange}
              required
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btnMain" onClick={this.handleSubmit}>
            Login
          </button>
        </div>
      </div>
    );
  }

}
export default Login;
