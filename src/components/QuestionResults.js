import React, { Component } from 'react';
import { VictoryBar, VictoryLabel, VictoryChart, VictoryAxis } from 'victory';
import { DiversityTheme } from '../components';
import _ from 'underscore';

class QuestionResults extends Component {
  render() {

    const colors = [
      "#BC4A35",
      "#D2781D",
      "#E5D219",
      "#A5C61B",
      "#55BF7E",
      "#41A9C5",
      "#416EC5",
      "#8A56BB",
      "#BB569D"
    ];

    const prepData = () => {
      let idx = 0;
      return _.map(this.props.results, (result, label) => {
        let data = { y: result, label: label, fill: colors[idx] };
        if (idx === colors.legth) {
          idx = 0;
        } else {
          idx++;
        }
        return data;
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
        <h3>{this.props.question}</h3>
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
