import React from "react";
import {connect} from 'react-redux';

class SampleSignin extends React.Component{
  render(){
    return (
      <div className="App">
        <form onSubmit={this.props.inputSubmit}>
          <input type="email" name="email" value={this.props.emailinput} onChange={this.props.emailChanged} />
          <input type="text" name="password" value={this.props.passwordinput} onChange={this.props.passwordChanged} />
          <button>Submit</button>
        </form>
        <div>
          {this.props.emailsubmit} 
          {this.props.passwordsubmit}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    // age: state.age,
    emailinput: state.emailinput,
    passwordinput: state.passwordinput,
    emailsubmit: state.emailsubmit,
    passwordsubmit: state.passwordsubmit
  }
}

const mapDispachToProps = (dispach) => {
  return{
    emailChanged: (e) => {
      console.log('changed=', e.target.value );
      const action = {type : 'EMAIL_CHANGE', text: e.target.value};
      dispach(action);
    },
    passwordChanged: (e) => {
      console.log('changed=', e.target.value );
      const action = {type : 'PASSWORD_CHANGE', text: e.target.value};
      dispach(action);
    },
    inputSubmit : (e) => {
      e.preventDefault();

      const action = {type : 'EMAIL_SUBMIT', text: e.target.querySelector('input[name=email]').value};
      const action1 = {type : 'PASSWORD_SUBMIT', text: e.target.querySelector('input[name=password]').value};
      dispach(action);
      dispach(action1);

    }
  }
}

export default connect(mapStateToProps, mapDispachToProps)(SampleSignin);


// import React from "react";
// import { Link } from "react-router-dom";
// import store from "../store/reducer";
// import {connect} from 'react-redux';

// class LoginSignUp extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         errormsg: false,
//         successmsg: false,
//         errormsgemail: false,
//         errormsgpassword: false,
//         flag: false
//       }
//       this.emailerrorshow = this.emailerrorshow.bind(this);
//       this.emailerrorhide = this.emailerrorhide.bind(this);
//       this.errormsgshow = this.errormsgshow.bind(this);
//       this.errormsghide = this.errormsghide.bind(this);
//     }

//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     errormsg: false,
//   //     successmsg: false,
//   //     errormsgemail: false,
//   //     errormsgpassword: false,
//   //     signupdetails: {
//   //       firstname: "",
//   //       lastname: "",
//   //       email: "",
//   //       password: "",
//   //       repeatpassword: ""
//   //     },
//   //     signindetails: {
//   //       email: "",
//   //       password: ""
//   //     },
//   //   };
//   //   this.handleChangeFor = this.handleChangeFor.bind(this);
//   //   this.handleSubmit = this.handleSubmit.bind(this);
//   //   this.handleChangeSignin = this.handleChangeSignin.bind(this);
//   //   this.handleSubmitSignin = this.handleSubmitSignin.bind(this);
//   // }

//   // handleChangeSignin(propertyName, event) {
//   //   const { signindetails } = this.state;
//   //   const newsignindetails = {
//   //     ...signindetails,
//   //     [propertyName]: event.target.value
//   //   };
//   //   this.setState({ signindetails: newsignindetails });
//   // }

//   // handleSubmitSignin(event) {
//   //   // alert('A name was submitted: ' + this.state.signupdetails);
//   //   console.log("user", this.state.signindetails);
//   //   this.state.signindetails.email !== this.state.signupdetails.email
//   //     ? this.setState({ errormsgemail: true })
//   //     : (this.state.signindetails.password !== this.state.signupdetails.password
//   //         ? this.setState({ errormsgpassword: true })
//   //         : this.setState({ errormsgemail: false }),
//   //       this.setState({
//   //         errormsgemail: false
//   //       }),
//   //       this.props.history.push("/home"));
//   //   event.preventDefault();
//   // }

//   // handleChangeFor(propertyName, event) {
//   //   const { signupdetails } = this.state;
//   //   const newsignupdetails = {
//   //     ...signupdetails,
//   //     [propertyName]: event.target.value
//   //   };
//   //   this.setState({ signupdetails: newsignupdetails });
//   // }

//   // handleSubmit(event) {
//   //   // alert('A name was submitted: ' + this.state.signupdetails);
//   //   console.log("user", this.state.signupdetails);
//   //   this.state.signupdetails.password !==
//   //   this.state.signupdetails.repeatpassword
//   //     ? this.setState({ errormsg: true })
//   //     : this.setState({ errormsg: false, successmsg: true });
//   //   event.preventDefault();
//   // }
//   emailerrorshow(){
//     this.setState({
//       errormsgemail: true,
//     }) 
//     console.log('entered');
//   }
//   emailerrorhide(){
//     this.state.flag ? 
//     this.setState({
//       errormsgemail: false,
//     }) (this.props.history.push("/home"))
//     : this.setState({
//       flag: true
//     });
    
//     console.log('entered false');
//   }
//   errormsgshow(){
//     this.setState({
//       errormsg: true,
//     }) 
//   }
//   errormsghide(){
//     this.setState({
//       errormsg: false,
//     }) 
//   }

//   render() {
//     return (
//       <div className="login_main__wrap">
//         <div className="container text-center">
//           <div className="signin__wrap">
//             <ul className="nav nav-tabs">
//               <li className="nav-item">
//                 <a className="nav-link active" data-toggle="tab" href="#signin">
//                   Sign In
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" data-toggle="tab" href="#signup">
//                   Sign Up
//                 </a>
//               </li>
//             </ul>
//             <div className="tab-content">
//               <div className="tab-pane container active" id="signin">
//                 <form onSubmit={this.props.inputSubmit}>
//                   <input
//                     type="email"
//                     placeholder="Email ID"
//                     name="email"
//                     // value={this.props.emailinput} onChange={this.props.emailChanged}
//                     // onChange={event => this.handleChangeSignin("email", event)}
//                     // value={this.state.signindetails.email}
//                   />
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     name="password"
//                     // value={this.props.passwordinput} onChange={this.props.passwordChanged}
//                     // onChange={event =>
//                     //   this.handleChangeSignin("password", event)
//                     // }
//                     // value={this.state.signindetails.password}
//                   />
//                   {/* <Link to="/home">Sign In</Link> */}
//                   <button onClick={
//                       this.props.emailsubmit !== this.props.emailsignup || this.props.passwordsubmit != this.props.passwordsignup ? this.emailerrorshow : this.emailerrorhide
//                     // console.log(this.props.emailsubmit +"===="+ this.props.emailsignup)


//                   }>Sign in</button>
//                 </form>
//                 <div>
//                   {this.props.emailsubmit}
//                   {this.props.passwordsubmit}
//                 </div>
//                 <div
//                   className={
//                     this.state.errormsgemail
//                       ? "error_password show"
//                       : "error_password"
//                   }
//                 >
//                   Email is not registered
//                 </div>
//                 <div
//                   className={
//                     this.state.errormsgpassword
//                       ? "error_password show"
//                       : "error_password"
//                   }
//                 >
//                   Password Doesnt Match
//                 </div>
//               </div>
//               <div className="tab-pane container fade" id="signup">
//                 <form onSubmit={this.props.signupSubmit}>
//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     name="fname"
//                     // onChange={event => this.handleChangeFor("firstName", event)}
//                     // value={this.state.signupdetails.firstName}
//                     required
//                   />
//                   <input
//                     type="text"
//                     placeholder="Last Name"
//                     name="lname"
//                     // onChange={event => this.handleChangeFor("lastname", event)}
//                     // value={this.state.signupdetails.lastname}
//                     required
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     name="emailsignup"
//                     // onChange={event => this.handleChangeFor("email", event)}
//                     // value={this.state.signupdetails.email}
//                     required
//                   />
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     name="passwordsignup"
//                     // onChange={event => this.handleChangeFor("password", event)}
//                     // value={this.state.signupdetails.password}
//                     required
//                   />
//                   <input
//                     type="password"
//                     placeholder="Repeat Password"
//                     name="repeatp"
//                     // onChange={event =>
//                     //   this.handleChangeFor("repeatpassword", event)
//                     // }
//                     // value={this.state.signupdetails.repeatpassword}
//                     required
//                   />
//                   {/* <Link to="/home">Sign Up</Link> */}
//                   <button onClick={
//                     this.props.passwordsignup == this.props.repeatpsignup ? this.errormsghide :this.errormsgshow
//                   }>Sign up</button>
//                 </form>
//                 <div>
//                   {this.props.fnamesignup}<br />
//                   {this.props.lnamesignup}<br />
//                   {this.props.emailsignup}<br />
//                   {this.props.passwordsignup}<br />
//                   {this.props.repeatpsignup}
//                 </div>
//                 <div
//                   className={
//                     this.state.errormsg
//                       ? "error_password show"
//                       : "error_password"
//                   }
//                 >
//                   Password Doesnt match
//                 </div>
//                 <div
//                   className={
//                     this.state.successmsg ? "success_msg show" : "success_msg"
//                   }
//                 >
//                   Successfully registered! <br />
//                   You can Login now.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return{
//     // age: state.age,
//     // emailinput: state.emailinput,
//     // passwordinput: state.passwordinput,
//     emailsubmit: state.emailsubmit,
//     passwordsubmit: state.passwordsubmit,
//     fnamesignup: state.fnamesignup,
//     lnamesignup: state.lnamesignup,
//     emailsignup: state.emailsignup,
//     passwordsignup: state.passwordsignup,
//     repeatpsignup: state.repeatpsignup,
//   }
// }

// const mapDispachToProps = (dispach) => {
//   return{
//     // emailChanged: (e) => {
//     //   console.log('changed=', e.target.value );
//     //   const action = {type : 'EMAIL_CHANGE', text: e.target.value};
//     //   dispach(action);
//     // },
//     // passwordChanged: (e) => {
//     //   console.log('changed=', e.target.value );
//     //   const action = {type : 'PASSWORD_CHANGE', text: e.target.value};
//     //   dispach(action);
//     // },
//     inputSubmit : (e) => {
//       e.preventDefault();

//       const action = {type : 'EMAIL_SUBMIT', text: e.target.querySelector('input[name=email]').value};
//       const action1 = {type : 'PASSWORD_SUBMIT', text: e.target.querySelector('input[name=password]').value};
//       dispach(action);
//       dispach(action1);

//     },

//     signupSubmit : (e) => {
//       e.preventDefault();

//       const action = {type : 'SIGNUP_FNAME', text: e.target.querySelector('input[name=fname]').value};
//       const action1 = {type : 'SIGNUP_LNAME', text: e.target.querySelector('input[name=lname]').value};
//       const action2 = {type : 'SIGNUP_EMAIL', text: e.target.querySelector('input[name=emailsignup]').value};
//       const action3 = {type : 'SIGNUP_PASSWORD', text: e.target.querySelector('input[name=passwordsignup]').value};
//       const action4 = {type : 'SIGNUP_REPEATP', text: e.target.querySelector('input[name=repeatp]').value};
//       dispach(action);
//       dispach(action1);
//       dispach(action2);
//       dispach(action3);
//       dispach(action4);

//     }
//   }
// }

// // export default LoginSignUp;
// export default connect(mapStateToProps, mapDispachToProps)(LoginSignUp);
