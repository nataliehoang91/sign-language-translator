import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import TextDisplay from "./components/TextDisplay";
import WebcamDisplay from "./components/WebcamArea";
import Title from "./components/Description";
import Auth from "@aws-amplify/auth";
import Analytics from "@aws-amplify/analytics";
import awsconfig from "./aws-exports";

Auth.configure(awsconfig);
Analytics.configure(awsconfig);

class App extends React.Component {
  componentDidMount() {
    Analytics.record("app_start").then(evt => {
      console.log(evt);
    });
  }

  render() {
    return (
      <div className="container">
        <Navigation />
        <Title />
        <div>
          <TextDisplay />
        </div>
        <div>
          <WebcamDisplay />
        </div>
      </div>
    );
  }
}

export default App;
