import React from 'react';

export class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
              <div className="form">
                <form className="register-form">
                  <p className="message-two">Create an account</p>
                  <br />
                  <input type="name" placeholder="first name"/>
                  <input type="name" placeholder="last name"/>
                  <input type="text" placeholder="email"/>
                  <input type="password" placeholder="new password"/>
                  <input type="password" placeholder="confirm password"/>
                  <button>create</button>
                  <p className="incorrect">password must be the same</p>
                </form>
              </div>
        )
    }
}