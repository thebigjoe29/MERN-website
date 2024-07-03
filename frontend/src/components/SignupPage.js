import React, { Component } from 'react'
import axios from 'axios';
import "./LoginPage.css";
import { Navigate } from 'react-router-dom';


class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: '',
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      redirect: false,
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async () => {
    const url = "http://localhost:8080/api/register";

    try {
      const response = await axios.post(url, {
        firstName: this.state.firstname,
        lastName: this.state.lastname,
        email: this.state.email,
        password: this.state.password
      });
      this.setState({
        message: response.data.message,
        redirect: true
      }, () => {
        alert(this.state.message);
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

      return <Navigate to="/login" />;

    }
    return (
      <div className='center'>
        <div className='loginbox'>
          <div className='lefthalf'>
            <img src='assets/logo2.jpg' alt='hi' height={300}></img>
          </div>
          <div className='righthalf'>
            <h1 style={{ textAlign: 'center' }}>SIGNUP</h1><br></br>
            <form className='loginform'>
              <label style={{ margin: '5px' }}>First Name<sup>*</sup></label>
              <input value={this.state.firstname} onChange={this.handleChange} name="firstname" type="text" className="firstname" placeholder="John" style={{ margin: '5px', height: '40px', borderRadius: '4px', width: '300px' }} /><br />
              <label style={{ margin: '5px' }}>Last Name<sup>*</sup></label>
              <input value={this.state.lastname} onChange={this.handleChange} name="lastname" type="text" className="lastname" placeholder="Doe" style={{ margin: '5px', height: '40px', borderRadius: '4px', width: '300px' }} /><br />
              <label style={{ margin: '5px' }}>Email Address<sup>*</sup></label>

              <input value={this.state.email} onChange={this.handleChange} name="email" type="email" className="email" placeholder="qwerty@domain.com" style={{ marginLeft: '5px', height: '40px', borderRadius: '4px', width: '300px' }} /><br />

              <label style={{ margin: '5px' }}>Password<sup>*</sup></label>
              <input value={this.state.password} onChange={this.handleChange} name="password" type="password" className="password" placeholder="$JohnDoe1234" style={{ margin: '5px', height: '40px', borderRadius: '4px', width: '300px' }} /><br />

              <button type="button" onClick={this.handleSubmit} className='login-button' style={{ margin: 'auto', display: 'block' }}>Register</button>
            </form>
            <br></br>
            <span>
            Already have an account?&nbsp;
            <a href="/login" >Login here!</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup
