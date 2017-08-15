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
      return objects.map(result => {
        return result;
      });
    }

    const prepDataObject = (keys, results) => {
      let data = {};
      keys.map(question => {
        let multipleAnswersPerResponse;
        let values = _.pluck(results, question);
        values = values.map(value => {
          if (value.indexOf(';') !== -1) {
            console.log(value)
            multipleAnswersPerResponse = true;
          }
          return value.split(';');
        });
        data[question] = {};
        data[question].data = _.countBy(_.flatten(values));
        data[question].meta = { multipleAnswersPerResponse: multipleAnswersPerResponse, responseCount: values.length };
      } );
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
        if (key === 'Timestamp') { return; }
        return <div key={key}><QuestionResults results={result.data} meta={result.meta} question={key} /></div>;
      });
    }

    return (
      <article className="visualisation main">
        <header>
          <h1>This is how your company is doing.</h1>
        </header>
        <p>Hello some text? Maybe we need to write a little bit here about what’s going on.</p>
        {renderQuestionResults()}
      </article>
    );
  }
}

export default Visualisation;
