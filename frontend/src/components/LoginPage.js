import React, { Component } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import './LoginPage.css';

class Login extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      message: '',
      email: '',
      password: '',
      redirect: false,
      
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  
  handleSubmit = async () => {
    const url = "http://localhost:8080/api/auth";

    try {
        const response = await axios.post(url, {
            email: this.state.email,
            password: this.state.password
        });
        console.log(response.data.data);
        this.setState({
            message: response.data.message,
            redirect: true
        });
    } catch (error) {
        this.setState({
            message: error.response.data.message
        }, () => {
            alert(this.state.message);
        });
    }
};


  render() {
    if (this.state.redirect) {
      return <Navigate to="/home" />;
    }

    return (
      // <div className='loginbox'>
      //   <h1>Login</h1>
      // </div>
      <body>
      <div className='center'>
        <div className='loginbox'>
          <div className='lefthalf'>
          <img src='assets/logo2.jpg' alt='hi' height={300}></img>
          </div>
          <div className='righthalf'>
            <h1 style={{ textAlign: 'center' }}>LOGIN</h1><br></br>
            <form className='loginform'>
              <label style={{ margin: '5px' }}>Email address
              <input 
                value={this.state.email} 
                onChange={this.handleChange} 
                name="email" 
                type="text" 
                className="email" 
                placeholder="qwerty@domain.com" 
                style={{ margin: '5px', height:'40px', borderRadius:'4px', width:'300px'}} 
              /><br />
              </label>
              
              <label style={{ margin: '5px' }}>Password
              <input 
                value={this.state.password} 
                onChange={this.handleChange} 
                name="password" 
                type="password" 
                className="password" 
                placeholder="$JohnDoe1234" 
                style={{ marginLeft: '5px' , height:'40px' , borderRadius:'4px', width: '300px' }} 
              /><br />
              </label>
              
              
              <button 
                type="button" 
                onClick={this.handleSubmit} 
                className='login-button' 
                style={{ margin: 'auto', display: 'block'  }}
              >
                Log in
              </button>
            </form>
            
            <br></br>
            <span>
            Don't have an account?&nbsp;
            <a href="/signup" >Sign up here!</a>
            </span>
            
          </div>
        </div>
      </div>
    </body>
    );
  }
}

export default Login;
