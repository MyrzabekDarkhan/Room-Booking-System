import * as React from 'react';
import { useState } from 'react';
import './style.scss';
import loginImg from './../../login.svg';
import history from '../../history';

export class Register extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    username: "",
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
  fetch('http://localhost:3000/users',options)
  .then(response => response.json())
  .then(user => {
    localStorage.setItem('user',JSON.stringify(user));
    console.log('us id: '+ JSON.stringify({user}))
    //
    //window.location.reload();
    //history.push("/home");
    
  })

  }

  

  render() {
    return (
      <div className="base-container">
        <div className="header">Register</div>
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
               onChange={this.handleChange}
               />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
              type="password" 
              name="password"
               placeholder="password" 
               onChange={this.handleChange}
               />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btnMain" onClick={this.handleSubmit}>
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
