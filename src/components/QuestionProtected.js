import React, { Component } from 'react';

class QuestionProtected extends Component {
  render() {

    return (
      <div className="results">
        <h3>{this.props.question}</h3>
        <aside>
          <p>See <a href="/protecting-individuals-privacy/" target="_blank">our thinking</a> behind making this decision.</p>
        </aside>
        <p>Due to respondents’ privacy concerns we can’t visualise results for public sharing.</p>
      </div>
    );
  }
}

export default QuestionProtected;
