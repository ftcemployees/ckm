import React from 'react';
import EmailValidator from 'email-validator';
import axios from 'axios';

export class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            nameFirst: '',
            nameLast: '',
            pwd: '',
            pwdRepeat: '',
            errorMessage: ''
        };
        this.handleNameFirstInput = this.handleNameFirstInput.bind(this);
        this.handleNameLastInput = this.handleNameLastInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePwdInput = this.handlePwdInput.bind(this);
        this.handlePwdRepeatInput = this.handlePwdRepeatInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    validateForm() {
        let errorMessage = '';
        if (this.state.pwd !== this.state.pwdRepeat) {
            errorMessage = 'Passwords must be the same';  
        } else if (this.state.pwd.length < 6) {
            errorMessage = 'Password must be at least 6 characters long';
        } else if (!EmailValidator.validate(this.state.email)) {
            errorMessage = 'Please enter a valid email';
        } else if (this.state.nameFirst.length < 1 || this.state.nameLast.length < 1) {
            errorMessage = 'Empty fields are not allowed';
        }
        this.setState({errorMessage: errorMessage});
        console.log(this.state.errorMessage);
        return !errorMessage
    }
    
    handleSubmit(e) {
        e.preventDefault();
        if (!this.validateForm()) {
            //return false;
        }
        if (this.state.errorMessage){
            console.log('errorrrrr');
        }
        axios.post('/new_user', {
            email: this.state.email,
            nameFirst: this.state.nameFirst,
            nameLast: this.state.nameLast,
            pwd: this.state.pwd
        })
        .then((response) => {
            
        })
        .catch((error) => {
            if (error)
                console.log(error);
        })
       
    }
    
    handleNameFirstInput(e) {
        const nameFirst = e.target.value;
        this.setState({nameFirst: nameFirst})
    }

    handleNameLastInput(e) {
        const nameLast = e.target.value;
        this.setState({nameLast: nameLast})
    }

    handleEmailInput(e) {
        const email = e.target.value;
        this.setState({email: email})
    }

    handlePwdInput(e) {
        const pwd = e.target.value;
        this.setState({pwd: pwd})
    }

    handlePwdRepeatInput(e) {
        const pwdRepeat = e.target.value;
        this.setState({pwdRepeat: pwdRepeat})
    }
    
    render() {
        return (
              <div className="form">
                <form className="register-form">
                  <p className="message-two">Create an account</p>
                  <br />
                  <input type="name" placeholder="first name" onChange={this.handleNameFirstInput} value={this.state.nameFirst}/>
                  <input type="name" placeholder="last name" onChange={this.handleNameLastInput} value={this.state.nameLast}/>
                  <input type="text" placeholder="email" onChange={this.handleEmailInput} value={this.state.email}/>
                  <input type="password" placeholder="new password" onChange={this.handlePwdInput} value={this.state.pwd}/>
                  <input type="password" placeholder="confirm password" onChange={this.handlePwdRepeatInput} value={this.state.pwdRepeat}/>
                  <button onClick={this.handleSubmit}>create</button>
                  <p className="incorrect">{this.state.errorMessage}</p>
                </form>
              </div>
        )
    }
}