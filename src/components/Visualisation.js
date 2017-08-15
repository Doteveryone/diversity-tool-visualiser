import React, { Component } from 'react';
import { QuestionResults } from '../components';
import _ from 'underscore';

class Visualisation extends Component {
  render() {

    const pullOutKeys = (objects) => {
      let keys = objects.map(result => {
        return _.keys(result);
      });
      return _.uniq(_.flatten(keys));
    }

    const pullOutResults = (objects) => {
      return this.props.results.data.map(result => {
        return result;
      });
    }

    const prepDataObject = (keys, results) => {
      let data = {};
      keys.map(question => {
        let values = _.pluck(results, question);
        values = values.map(value => {
          return value.split(';');
        });
        data[question] = _.countBy(_.flatten(values));
      });
      return data;
    }

    const parseResults = () => {
      let results = pullOutResults(this.props.results.data);
      let keys = pullOutKeys(this.props.results.data);
      return prepDataObject(keys, results); 
    }

    const renderQuestionResults = () => {
      let data = parseResults();
      return _.map(data, (result, key) => {
        return <div key={key}><QuestionResults results={result} question={key} /></div>;
      });
    }

    return (
      <div className="visualisation">
        {renderQuestionResults()}
      </div>
    );
  }
}

export default Visualisation;
