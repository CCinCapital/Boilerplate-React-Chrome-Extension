/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */

import React, { PureComponent } from 'react';
import { node, func } from 'prop-types';

import './Modal.css';

class Modal extends PureComponent {
  static propTypes = {
    children: node,
    onClose: func,
    onKeyPress: func,
  };

  static defaultProps = {
    children: undefined,
    onClose: () => {},
    onKeyPress: () => {},
  };

  stopPropagation = e => {
    e.stopPropagation();
  };

  render() {
    return (
      <div
        id="injected_modal"
        onClick={this.props.onClose}
        onKeyPress={this.props.onKeyPress}
        role="button"
        tabIndex="0"
      >
        <div className="card" onClick={this.stopPropagation}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
