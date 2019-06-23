import React, { Component } from "react";
import Auth from "@aws-amplify/auth";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  componentDidMount() {
    Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => {
      this.setState({ username: user.username });
    });
  }

  signOut() {
    Auth.signOut()
      .then(data => window.location.reload())
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            {" "}
            <img
              className="mainlogo img-responsive"
              src="img/logomaverickwhite.png"
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  HOME <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  FEATURES
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="#"
                  onClick={this.signOut}
                >
                  Sign out {this.state.username}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
