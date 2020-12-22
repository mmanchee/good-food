import React from 'react';
import PropTypes from 'prop-types';
import * as Issues from './SeedIssues';

function HealthChart(props) {
  return (
    <React.Fragment>
      <form>
        <p>Issues</p>
        <table>
          {Issues.map((issue, index) =>
            <tr>
              <td><a ></a>issue.issue</td>
              <td><input name="" type="range" min="0" max="1" value="0" /></td>
            </tr>
          )}
        </table>
        <button>Submit List</button>
      </form>
    </React.Fragment>
  )
}

HealthChart.propTypes = {
  foodList: PropTypes.array.apply
}

export default HealthChart;