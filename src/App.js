import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { FileUpload, Visualisation } from './components';

class App extends Component {
  render() {
    const resultsCallback = (results, history) => {
      this.setState({ results: results });
    }

    const pickComponent = () => {
      if (this.state && this.state.results) {
        return <Visualisation results={this.state.results} />
      } else {
        return <FileUpload resultsCallback={resultsCallback} />;
      }
    }

    return (
      <div>
        <Route exact path="/" render={() => pickComponent()} />
      </div>
    );
  }
}

export default App;
