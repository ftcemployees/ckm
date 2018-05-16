import React from 'react';
import axios from 'axios';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pwd: '',
            incorrect: false
        }
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePwdInput = this.handlePwdInput.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    
    componentWillMount() {
        if (sessionStorage.getItem('name_first')){
            sessionStorage.setItem('name_first', '');
            axios.post('/log_out')
            .catch(function(error) {
                if (error)
                console.log(error);
            })
            this.props.history.push('/')
        }
    }
    
    componentDidMount() {
        document.title = 'Login';
    }
    
    handleEmailInput(e) {
        this.setState({email: e.target.value});
    }
    
    handlePwdInput(e) {
        this.setState({pwd: e.target.value});
    }
    
    async handleLogin(e) {
        e.preventDefault();
        await axios.post('/login', {
            email: this.state.email,
            pwd: this.state.pwd
          })
          .then(function (response) {
            if (response.data) {
                console.log(response.data);
                sessionStorage.setItem("name_first", response.data);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        
        if (sessionStorage.getItem('name_first')) {
            this.props.history.push('/')
        } else {
            this.setState({incorrect: true});
        }
    }
    
    render() {
        return (
            <div className="login-page">
                <div className="form">
                <form className="login-form">
                    <p className="message-two">Login</p>
                    <br />
                    <input type="text" placeholder="email" onChange={this.handleEmailInput} value={this.state.email} />
                    <input type="password" placeholder="password" onChange={this.handlePwdInput} value={this.state.pwd} />
                    <button onClick={this.handleLogin}>login</button>
                    <p className="message">Not registered? <a href="/new_user">Create an account</a></p>
                    <p className="incorrect" style={this.state.incorrect ? {} : {visibility: 'hidden'}}>Email or Password is incorrect</p>
                </form>
                </div>
            </div>
            ); 
    }
}

