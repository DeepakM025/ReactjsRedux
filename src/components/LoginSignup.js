import React from "react";
import {connect} from 'react-redux';

class LoginSignUp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        errormsg: false,
        successmsg: false,
        errormsgemail: false,
        errormsgpassword: false,
        flag: false
      }
      this.emailerrorshow = this.emailerrorshow.bind(this);
      this.emailerrorhide = this.emailerrorhide.bind(this);
      this.errormsgshow = this.errormsgshow.bind(this);
      this.errormsghide = this.errormsghide.bind(this);
    }

  emailerrorshow(){
    this.setState({
      errormsgemail: true,
    }) 
  }
  emailerrorhide(){
    this.state.flag ? 
    this.setState({
      errormsgemail: false,
    }) (this.props.history.push("/home"))
    : this.setState({
      flag: true
    });
  }
  errormsgshow(){
    this.setState({
      errormsg: true,
    }) 
  }
  errormsghide(){
    this.setState({
      errormsg: false,
    }) 
  }

  render() {
    return (
      <div className="login_main__wrap">
        <div className="container text-center">
          <div className="signin__wrap">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#signin">
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#signup">
                  Sign Up
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane container active" id="signin">
                <form onSubmit={this.props.inputSubmit}>
                  <input
                    type="email"
                    placeholder="Email ID"
                    name="email"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                  <button onClick={
                      this.props.emailsignup ? this.props.emailsubmit !== this.props.emailsignup || this.props.passwordsubmit != this.props.passwordsignup ? this.emailerrorshow : this.emailerrorhide : this.emailerrorshow
                  }>Sign in</button>
                </form>
                <div
                  className={
                    this.state.errormsgemail
                      ? "error_password show"
                      : "error_password"
                  }
                >
                  Email is not registered
                </div>
                <div
                  className={
                    this.state.errormsgpassword
                      ? "error_password show"
                      : "error_password"
                  }
                >
                  Password Doesnt Match
                </div>
              </div>
              <div className="tab-pane container fade" id="signup">
                <form onSubmit={this.props.signupSubmit}>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="emailsignup"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="passwordsignup"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Repeat Password"
                    name="repeatp"
                    required
                  />
                  <button onClick={
                    this.props.passwordsignup == this.props.repeatpsignup ? this.errormsghide :this.errormsgshow
                  }>Sign up</button>
                </form>
                <div
                  className={
                    this.state.errormsg
                      ? "error_password show"
                      : "error_password"
                  }
                >
                  Password Doesnt match
                </div>
                <div
                  className={
                    this.state.successmsg ? "success_msg show" : "success_msg"
                  }
                >
                  Successfully registered! <br />
                  You can Login now.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    emailsubmit: state.emailsubmit,
    passwordsubmit: state.passwordsubmit,
    fnamesignup: state.fnamesignup,
    lnamesignup: state.lnamesignup,
    emailsignup: state.emailsignup,
    passwordsignup: state.passwordsignup,
    repeatpsignup: state.repeatpsignup,
  }
}

const mapDispachToProps = (dispach) => {
  return{
    inputSubmit : (e) => {
      e.preventDefault();

      const action = {type : 'EMAIL_SUBMIT', text: e.target.querySelector('input[name=email]').value};
      const action1 = {type : 'PASSWORD_SUBMIT', text: e.target.querySelector('input[name=password]').value};
      dispach(action);
      dispach(action1);

    },

    signupSubmit : (e) => {
      e.preventDefault();

      const action = {type : 'SIGNUP_FNAME', text: e.target.querySelector('input[name=fname]').value};
      const action1 = {type : 'SIGNUP_LNAME', text: e.target.querySelector('input[name=lname]').value};
      const action2 = {type : 'SIGNUP_EMAIL', text: e.target.querySelector('input[name=emailsignup]').value};
      const action3 = {type : 'SIGNUP_PASSWORD', text: e.target.querySelector('input[name=passwordsignup]').value};
      const action4 = {type : 'SIGNUP_REPEATP', text: e.target.querySelector('input[name=repeatp]').value};
      dispach(action);
      dispach(action1);
      dispach(action2);
      dispach(action3);
      dispach(action4);

    }
  }
}

export default connect(mapStateToProps, mapDispachToProps)(LoginSignUp);
