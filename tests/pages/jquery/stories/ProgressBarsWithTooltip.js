import React from 'react';

export default class ProgressBarsWithTooltip extends React.Component {
  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  render() {
    return (
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}} data-toggle="tooltip" title="" data-original-title="60% Used">
          <span className="sr-only">60% Used</span>
        </div>
        <div className="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}} data-toggle="tooltip" title="" data-original-title="40% Available">
          <span className="sr-only">40% Available</span>
        </div>
      </div>
    );
  }
};