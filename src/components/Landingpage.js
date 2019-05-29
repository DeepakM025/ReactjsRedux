import React from "react";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <section className="landingpage__wrap">
          <div className="navbar__custom">
            <div className="logo_wrap">
              <p>Logo</p>
            </div>
            <div className="login_btn_wrap">
              <Link to="/signin">Sign Up Now</Link>
            </div>
          </div>
          <div className="container">
            <h1 className="pt-5 pl-5 ml-5 mt-5">A Collective Data</h1>
            <h3 className="pb-5 pl-5 ml-5 mb-5">data Visualization</h3>
          </div>
        </section>
        <div className="d-flex footer">
          <div className="container">
            <div className="getInTouch">
              <h2>For more details get in touch or sign up</h2>
              <p>Please use the form below to write to us</p>
              <div className="touchForm">
                <form >
                  <div className="touchInput">
                    <label htmlFor="">Purpose</label>
                    <input
                      name="txtPurpose"
                      type="text"
                      placeholder="Enter here"
                    />
                  </div>
                  <div className="touchInput">
                    <label htmlFor="">Your e-mail or Phone</label>
                    <input
                      name="txtEmail"
                      type="text"
                      placeholder="Enter here"
                    />
                  </div>
                  <div className="sendButton">
                    <button id="btnSendConnect" type="button" name="button">
                      Send
                    </button>
                  </div>
                </form>
                {this.props.purpose}<br />{this.props.emailorphone}
              </div>
            </div>
            <div className="float-left">
              <div className="copyrights">Copyright 2019</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default LandingPage;
