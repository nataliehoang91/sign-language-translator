import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Title from "./components/Description";
import PoweredByAmplify from "./components/PoweredByAmplify";

import Auth from "@aws-amplify/auth";
import Analytics from "@aws-amplify/analytics";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';

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
        <PoweredByAmplify />
      </div>
    );
  }
}

export default withAuthenticator(App, {});
