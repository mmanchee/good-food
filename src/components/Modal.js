import React, { Component } from 'react';

export default class Modal extends Component {
  listenKeyboard(event) {
    if(event.key === 'Escape' || event.keyCode === 27) {
      this.props.onClose();
    }
  }
  componentDidMount() {
    if (this.props.onClose) {
      window.addEventListener('keydown', this.listenKeyboard.bind(this), true);
    }
  }
  componentWillUnmount() {
    if (this.props.onClose) {
      window.removeEventListener('keydown', this.listenKeyboard.bind(this), true);
    }
  }
  onOverLayClick() {
    this.props.onClose();
  }
  onDialogClick(event) {
    event.stopPropagation();
  }
  render() {
    return (
      <div>
        <div className="modal-overlay" />
        <div className="modal-content" onClick={this.onOverLayClick.bind(this)}>
          <div className="modal-dialog" onClick={this.onDialogClick}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}