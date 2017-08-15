import React, { Component } from 'react';

class QuestionResults extends Component {
  render() {

    const displayResults = () => {
      console.log(this.props)
    }
    return (
      <div className="results">
        {displayResults()}
      </div>
    );
  }
}

export default QuestionResults;
