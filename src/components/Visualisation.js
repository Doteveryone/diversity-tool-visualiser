import React, { Component } from 'react';

class Visualisation extends Component {
  render() {

    const displayResults = () => {
      return this.props.results.data.map(result => {
        return <p>{result['What is your sexuality?']}</p>;
      });
    }

    return (
      <div className="visualisation">
        {displayResults()}
      </div>
    );
  }
}

export default Visualisation;
