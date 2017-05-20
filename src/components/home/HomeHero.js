// @flow
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class HomeHeroComponent extends Component {
  static defaultProps = {
    disabled: false,
  };

  props: {
    headline: string,
    subhead: string,
    disabled?: boolean,
    btnLabel: string,
    onBtnClick: Function,
  };

  render() {
    return (
      <div
        className="mdl-cell mdl-cell--6-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--middle"
        style={{ color: '#fff', textAlign: 'center' }}
      >
        <h1 style={{ fontSize: '3rem', marginTop: 0 }}>
          {this.props.headline}
        </h1>
        <h3 style={{ fontSize: '1.5rem' }}>{this.props.subhead}</h3>
        <RaisedButton
          label={this.props.btnLabel}
          secondary
          disabled={this.props.disabled}
          onTouchTap={this.props.onBtnClick}
        />
      </div>
    );
  }
}
