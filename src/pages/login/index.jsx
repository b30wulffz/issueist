import React from 'react';
import AppBar from '../../components/app-bar';
import GitHubLogin from '../../components/github-login-button';

export default class LoginPage extends React.Component {
  onSuccess = (response) => {
    fetch(`http://localhost:9999/authenticate/${response.code}`).then(function(response) {
      return response.json();
    }).then(console.log);
  }

  onFailure = (response) => {
    console.log(response)
  }

  render() {
    return (
      <React.Fragment>
        <AppBar/>
        <GitHubLogin scopes={'repo'} clientId={process.env.REACT_APP_GITHUB_CLIENT_ID} onSuccess={this.onSuccess} onFailure={this.onFailure}/>
      </React.Fragment>
    );
  }
}