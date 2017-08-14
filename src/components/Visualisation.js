import React, { Component } from 'react';
import { QuestionResults } from '../components';
import _ from 'underscore';

class Visualisation extends Component {
  render() {

    const displayResults = () => {

      let results = this.props.results.data.map(result => {
        return result;
      });
      let keys = this.props.results.data.map(result => {
        return _.keys(result);
      });
      keys = _.uniq(_.flatten(keys));

      let data = {};
      keys.map(question => {
        data[question] = _.pluck(results, question);
      });
      console.log(data)

      return this.props.results.data.map((result, index) => {
        return <div key={index}><p>{result['What is your sexuality?']}</p><QuestionResults results={data} /></div>;
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
