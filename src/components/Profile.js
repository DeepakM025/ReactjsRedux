import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { connect } from "react-redux";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagename: "Your Profile"
    };
  }
  render() {
    return (
      <div className="row m-0">
        <Sidebar />
        <div className="main__content row m-0">
          <Header page={this.state.pagename} />
          <div className="col-lg-6 pl-5">
            <div className="profile__wrap">
              <h1>
                {this.props.fnamesignup} {this.props.lnamesignup}
              </h1>
              <p>{this.props.emailsignup}</p>
              <div className="profile__edit m-0">
                <h2>You can update your details</h2>
                <form onSubmit={this.props.updateDetails}>
                  <input
                    type="text"
                    placeholder={"First Name: " + this.props.fnamesignup}
                    name="ufname"
                  />
                  <input
                    type="text"
                    placeholder={"Last Name: " + this.props.fnamesignup}
                    name="ulname"
                  />
                  <input
                    type="email"
                    placeholder={"Email Id: " + this.props.fnamesignup}
                    name="uemail"
                  />
                  <button>Save</button>
                </form>
              </div>
              {/* <div className="row m-0">
                <button>Edit Profile</button>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 pl-5" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fnamesignup: state.fnamesignup,
    lnamesignup: state.lnamesignup,
    emailsignup: state.emailsignup,
    passwordsignup: state.passwordsignup
  };
};

const mapDispachToProps = dispach => {
  return {
    updateDetails: e => {
      e.preventDefault();
      if (e.target.querySelector("input[name=ufname]").value) {
        const action = {
          type: "SIGNUP_FNAME",
          text: e.target.querySelector("input[name=ufname]").value
        };
        dispach(action);
      }

      if (e.target.querySelector("input[name=ulname]").value) {
        const action1 = {
          type: "SIGNUP_LNAME",
          text: e.target.querySelector("input[name=ulname]").value
        };
        dispach(action1);
      }

      if (e.target.querySelector("input[name=uemail]").value) {
        const action2 = {
          type: "SIGNUP_EMAIL",
          text: e.target.querySelector("input[name=uemail]").value
        };
        dispach(action2);
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Profile);
