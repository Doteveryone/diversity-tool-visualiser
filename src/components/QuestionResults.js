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

    return (
      <div className="results">
        <h2>{this.props.question}</h2>
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
            tickValues={[0, 1, 2, 3, 4]}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default QuestionResults;
