import * as React from 'react';
import {  useState } from 'react';
import './style.scss';
import loginImg from './../../login.svg';


export class Login extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
    
      <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
          <img src={loginImg} />
          </div>
          <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username"/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password"/>
              </div>

          </div>

        </div>
        <div className="footer">
          <button type="button" className="btnMain">
            Login
          </button>
        </div>

      </div>

    )
  }


}
  
export default Login;
