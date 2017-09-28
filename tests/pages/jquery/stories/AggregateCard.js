import React from 'react';

export default class AggregateCard extends React.Component {
  componentDidMount() {
    // matchHeight the contents of each .card-pf and then the .card-pf itself
    $(".row-cards-pf > [className*='col'] > .card-pf .card-pf-title").matchHeight();
    $(".row-cards-pf > [className*='col'] > .card-pf > .card-pf-body").matchHeight();
    $(".row-cards-pf > [className*='col'] > .card-pf > .card-pf-footer").matchHeight();
    $(".row-cards-pf > [className*='col'] > .card-pf").matchHeight();
    // initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();
  }

  render() {
    return (
      <div className="cards-pf">
        <div className="container-fluid container-cards-pf">
          <div className="row row-cards-pf">
            <div className="col-xs-6 col-sm-4 col-md-4">
              <div className="card-pf card-pf-accented card-pf-aggregate-status">
                <h2 className="card-pf-title">
                  <span className="fa fa-shield"></span><span className="card-pf-aggregate-status-count">0</span> Ipsum
                </h2>
                <div className="card-pf-body">
                  <p className="card-pf-aggregate-status-notifications">
                    <span className="card-pf-aggregate-status-notification"><a href="#" className="add" data-toggle="tooltip" data-placement="top" title="Add Ipsum"><span className="pficon pficon-add-circle-o"></span></a></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-4">
              <div className="card-pf card-pf-accented card-pf-aggregate-status">
                <h2 className="card-pf-title">
                  <a href="#"><span className="fa fa-shield"></span><span className="card-pf-aggregate-status-count">20</span> Amet</a>
                </h2>
                <div className="card-pf-body">
                  <p className="card-pf-aggregate-status-notifications">
                    <span className="card-pf-aggregate-status-notification"><a href="#"><span className="pficon pficon-error-circle-o"></span>4</a></span>
                    <span className="card-pf-aggregate-status-notification"><a href="#"><span className="pficon pficon-warning-triangle-o"></span>1</a></span>
                  </p>
                </div>
              </div>
      
            </div>
            <div className="col-xs-6 col-sm-4 col-md-4">
              <div className="card-pf card-pf-accented card-pf-aggregate-status">
                <h2 className="card-pf-title">
                  <a href="#"><span className="fa fa-shield"></span><span className="card-pf-aggregate-status-count">9</span> Adipiscing</a>
                </h2>
                <div className="card-pf-body">
                  <p className="card-pf-aggregate-status-notifications">
                    <span className="card-pf-aggregate-status-notification"><span className="pficon pficon-ok"></span></span>
                  </p>
                </div>
              </div>
      
            </div>
          </div>
        </div><div className="container-fluid container-cards-pf">
        <div className="row row-cards-pf">
          <div className="col-xs-6 col-sm-4 col-md-4">
            <div className="card-pf card-pf-accented card-pf-aggregate-status">
              <h2 className="card-pf-title">
                <span className="fa fa-shield"></span><span className="card-pf-aggregate-status-count">0</span> Ipsum
              </h2>
              <div className="card-pf-body">
                <p className="card-pf-aggregate-status-notifications">
                  <span className="card-pf-aggregate-status-notification"><a href="#" className="add" data-toggle="tooltip" data-placement="top" title="Add Ipsum"><span className="pficon pficon-add-circle-o"></span></a></span>
                </p>
              </div>
            </div>
      
          </div>
          <div className="col-xs-6 col-sm-4 col-md-4">
            <div className="card-pf card-pf-accented card-pf-aggregate-status">
              <h2 className="card-pf-title">
                <a href="#"><span className="fa fa-shield"></span><span className="card-pf-aggregate-status-count">20</span> Amet</a>
              </h2>
              <div className="card-pf-body">
                <p className="card-pf-aggregate-status-notifications">
                  <span className="card-pf-aggregate-status-notification"><a href="#"><span className="pficon pficon-error-circle-o"></span>4</a></span>
                  <span className="card-pf-aggregate-status-notification"><a href="#"><span className="pficon pficon-warning-triangle-o"></span>1</a></span>
                </p>
              </div>
            </div>
      
          </div>
          <div className="col-xs-6 col-sm-4 col-md-4">
            <div className="card-pf card-pf-accented card-pf-aggregate-status">
              <h2 className="card-pf-title">
                <a href="#"><span className="fa fa-shield"></span><span className="card-pf-aggregate-status-count">9</span> Adipiscing</a>
              </h2>
              <div className="card-pf-body">
                <p className="card-pf-aggregate-status-notifications">
                  <span className="card-pf-aggregate-status-notification"><span className="pficon pficon-ok"></span></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
 };