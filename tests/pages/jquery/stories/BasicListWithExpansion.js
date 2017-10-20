import React from 'react';

export default class BasicListWithExpansion extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.pfList();
  }

  render() {
    return (
      <div ref={el => this.el = el} className="list-pf">
        <div className="list-pf-item">
          <div className="list-pf-container" tabIndex="0">
            <div className="list-pf-chevron">
              <span className="fa fa-angle-right"></span>
            </div>
            <div className="list-pf-content">
              First line
            </div>
          </div>
          <div className="list-pf-expansion collapse">
            <div className="list-pf-container" tabIndex="0">
              <div className="list-pf-chevron">
                <span className="fa fa-angle-right"></span>
              </div>
              <div className="list-pf-content">
                This is a first level section
              </div>
            </div>
            <div className="list-pf-expansion collapse">
              <div className="list-pf-container" tabIndex="0">
                <div className="list-pf-content">
                  This is a second level section
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-pf-item active">
          <div className="list-pf-container" tabIndex="0">
            <div className="list-pf-chevron">
              <span className="fa fa-angle-down"></span>
            </div>
            <div className="list-pf-content">
              This item is open by default
            </div>
          </div>
          <div className="list-pf-expansion collapse in">
            <div className="list-pf-container" tabIndex="0">
              <div className="list-pf-chevron">
                <span className="fa fa-angle-down"></span>
              </div>
              <div className="list-pf-content">
                This is a first level section
              </div>
            </div>
            <div className="list-pf-expansion collapse in">
              <div className="list-pf-container" tabIndex="0">
                <div className="list-pf-content">
                  This is a second level section
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};