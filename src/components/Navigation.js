import React, { Component } from "react";

class Navigation extends Component {
  constructor() {
    super();

    this.state = {};

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll = () => {
    this.setState({ scroll: window.scrollY });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            {" "}
            <img
              class="mainlogo img-responsive"
              src="img/logomaverickwhite.png"
              alt="logo"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  HOME <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  FEATURES
                </a>
              </li>
          
              <li class="nav-item">
                <a
                  class="nav-link text-white"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                 PRICING
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