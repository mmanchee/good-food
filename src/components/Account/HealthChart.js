import React from 'react';

function HealthChart() {
  return (
    <React.Fragment>
      <form>
        <table>
          
        </table>
        <p>Allergies</p>
          <tr>
            <td>Fish</td>
            <td><input name="" type="range" min="0" max="1" value="0" /></td>
          </tr>
        <p>Intolerances</p>
        <tr>
            <td>Histamine</td>
            <td><input name="" type="range" min="0" max="1" value="0" /></td>
          </tr>
        <button>Submit List</button>
      </form>
    </React.Fragment>
  )
}

export default HealthChart;