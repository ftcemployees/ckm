import React from 'react';
import axios from 'axios';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            pwd: ''
        }
        this.handleUserNameInput = this.handleUserNameInput.bind(this);
        this.handlePwdInput = this.handlePwdInput.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    
    componentDidMount() {
        document.title = 'Login';
    }
    
    handleUserNameInput(e) {
        this.setState({user_name: e.target.value});
    }
    
    handlePwdInput(e) {
        this.setState({pwd: e.target.value});
    }
    
    handleLogin() {
        axios.post('/login', {
            user_name: this.state.user_name,
            pwd: this.state.pwd
          })
          .then(function (response) {
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    render() {
        return (
            <div className="login-page">
                <div className="form">
                <form className="login-form">
                    <p class="message-two">Login</p>
                    <br />
                    <input type="text" placeholder="email" onChange={this.handleUserNameInput} value={this.state.user_name} />
                    <input type="password" placeholder="password" onChange={this.handlePwdInput} value={this.state.pwd} />
                    <button onClick={this.handleLogin}>login</button>
                    <p className="message">Not registered? <a href="#">Create an account</a></p>
                    <p class="incorrect">Email or Password is incorrect</p>
                </form>
                </div>
            </div>
            ); 
    }
}

