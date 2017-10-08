import React, { Component } from 'react';
import { QuestionResults } from '../components';
import { QuestionProtected } from '../components';
import _ from 'underscore';

class Visualisation extends Component {
  render() {

    const privacyQuestion = 'Including my answer in a public dataset might compromise my privacy';

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
        if (protectPrivacy(result)) {
          return <div key={key}><QuestionProtected question={key} /></div>;
        } else {
          return <div key={key}><QuestionResults results={result.data} meta={result.meta} question={key} /></div>;
        }
      });
    }

    const protectPrivacy = (result) => {
      return result.data[privacyQuestion] > 0;
    }

    return (
      <article className="visualisation main">
        <header>
          <h1>This is how your company is doing</h1>
        </header>
        <p>Take screenshots of the relevant charts to share them publicly, in your internal documents and external communications.</p>
        {renderQuestionResults()}

        <h2>How to share your results</h2>
        <p>These visualisations are not available to others as a public web page.</p>
        <p>To share them publicly, take a screenshot of the graphs and include them in post on your organisation’s blog.</p>

        <h2>What to do next?</h2>
        <p>Here are <a href="/how-to-improve" target="_blank">some ideas for next steps</a> you can take.</p>
      </article>
    );
  }
}

export default Visualisation;
