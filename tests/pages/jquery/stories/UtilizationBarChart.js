import React from 'react';

export default class UtilizationBarChart extends React.Component {
  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  render() {
    return (
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '25%'}} data-toggle="tooltip" title="25% Used">
          <span className="sr-only">25% Used</span>
        </div>
        <div className="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}} data-toggle="tooltip" title="75% Available">
          <span className="sr-only">75% Available</span>
        </div>
      </div>
    );
  }
};