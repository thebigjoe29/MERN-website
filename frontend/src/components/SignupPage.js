import React, { Component } from 'react'
import axios from 'axios';
 class Signup extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message:'',
        email: '', 
        password: '',
        firstname:'',
        lastname:''
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
            message: response.data.message
          });
        } catch (error) {
          this.setState({
            message: error.response.data.message
          });
        }
      };
      render() {
        return (
          <div className='center'>
            <div className='loginbox'>
              <div className='lefthalf'></div>
              <div className='righthalf'>
                <h1 style={{ textAlign: 'center' }}>SIGNUP</h1><br></br>
                <form className='loginform'>
                  <label style={{ margin: '5px' }}>First Name</label>
                  <input value={this.state.firstname} onChange={this.handleChange} name="firstname" type="text" className="firstname" placeholder="John" style={{ margin: '5px', border:'none', height:'30px', borderRadius:'4px', width:'300px'}} /><br />
                  <label style={{ margin: '5px' }}>Last Name</label>
                  <input value={this.state.lastname} onChange={this.handleChange} name="lastname" type="text" className="lastname" placeholder="Doe" style={{ margin: '5px', border:'none', height:'30px', borderRadius:'4px', width:'300px'}} /><br />
                  <label style={{ margin: '5px' }}>Email Address</label>
                  
                  <input value={this.state.email} onChange={this.handleChange} name="email" type="email" className="email" placeholder="qwerty@domain.com" style={{ marginLeft: '35px' , border:'none', height:'30px' , borderRadius:'4px', width: '300px' }} /><br />
                  
                  <label style={{ margin: '5px' }}>Password</label>
                  <input value={this.state.password} onChange={this.handleChange} name="password" type="password" className="password" placeholder="$JohnDoe1234" style={{ margin: '5px', border:'none', height:'30px', borderRadius:'4px', width:'300px'}} /><br />
                  <br/>
                  <button type="button" onClick={this.handleSubmit} className='login-button' style={{ margin: 'auto', display: 'block'  }}>Register</button>
                </form>
                <h5>{this.state.message}</h5>
              </div>
            </div>
          </div>
        );
      }
}

export default Signup
