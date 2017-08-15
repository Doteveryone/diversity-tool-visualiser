import React, { Component } from 'react';
import { VictoryBar, VictoryLabel } from 'victory';
import _ from 'underscore';

class QuestionResults extends Component {
  render() {

    const prepData = () => {
      let idx = 0;
      return _.map(this.props.results, (result, label) => {
        idx++;
        return { x: idx, y: result, label: label };
      });
    }

    return (
      <div className="results">
        <VictoryBar
          data={prepData()}
          labelComponent={
            <VictoryLabel angle={90} verticalAnchor="middle" textAnchor="end"/>
          }
        />
      </div>
    );
  }
}

export default QuestionResults;
