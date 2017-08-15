import React, { Component } from 'react';
import { VictoryBar, VictoryLabel, VictoryChart, VictoryAxis } from 'victory';
import { DiversityTheme } from '../components';
import _ from 'underscore';

class QuestionResults extends Component {
  render() {

    const prepData = () => {
      return _.map(this.props.results, (result, label) => {
        return { y: result, label: label };
      });
    }

    const multipleAnswers = () => {
      if (this.props.meta.multipleAnswersPerResponse) {
        return <p>Some respondents selected more than one answer.</p>;
      }
    }

    const responseCount = () => {
      return <p>This question received {this.props.meta.responseCount} responses.</p>;
    }

    const range = n => Array.from({length: n}, (value, key) => key)

    return (
      <div className="results">
        <h2>{this.props.question}</h2>
        <aside>
          {responseCount()}
          {multipleAnswers()}
        </aside>
        <VictoryChart theme={DiversityTheme}>
          <VictoryBar
            data={prepData()}
            labels={(d) => d.y}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
            labelComponent={
              <VictoryLabel text={(d) => d.y} verticalAnchor="middle" textAnchor="middle"/>
            }
          />
          <VictoryAxis
            tickFormat={_.pluck(prepData(), 'label')}
            tickValues={range(Object.keys(this.props.results).length)}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default QuestionResults;
