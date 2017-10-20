import React from 'react';

export default function Kebab(props) {
  return (
    <div className={ props.dropmenuType + ' ' +  props.dropmenuPosition + ' ' + props.dropmenuVariation }>
      <button className="btn btn-link dropdown-toggle" type="button" id={props.dropmenuId} data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        <span className="fa fa-ellipsis-v"></span>
      </button>
      <ul className={'dropdown-menu ' + props.dropdownPosition} aria-labelledby={props.dropmenuId}>
        <li><a href="#">Action</a></li>
        <li><a href="#">Another Action</a></li>
        <li><a href="#">Something Else Here</a></li>
        <li role="separator" className="divider"></li>
        <li><a href="#">Separated Link</a></li>
      </ul>
    </div>
  );
}
