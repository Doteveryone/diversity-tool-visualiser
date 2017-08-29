import React, { Component } from 'react';

class QuestionProtected extends Component {
  render() {

    return (
      <div className="results">
        <aside>
          <p>See <a href="#">our thinking</a> behind making this decision.</p>
        </aside>
        <h3>{this.props.question}</h3>
        <p>Due to respondents’ privacy concerns we can’t visualise results for public sharing.</p>
      </div>
    );
  }
}

export default QuestionProtected;
