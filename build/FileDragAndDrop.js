'use strict';

var React = require('react');

var style = {
  width: '100%',
  height: '100%'
};

var FileDragAndDrop = React.createClass({
  displayName: 'FileDragAndDrop',

  propTypes: {
    onDragStart: React.PropTypes.func,
    onDrop: React.PropTypes.func.isRequired,
    onDragEnter: React.PropTypes.func,
    onDragLeave: React.PropTypes.func,
    onDragOver: React.PropTypes.func,
    onDragEnd: React.PropTypes.func
  },

  handleDragStart: function handleDragStart(event) {
    if (typeof this.props.onDragStart === 'function') {
      this.props.onDragStart(event);
    }
  },

  handleDrag: function handleDrag(event) {
    if (typeof this.props.onDrag === 'function') {
      this.props.onDrag(event);
    }
  },

  handleDragEnter: function handleDragEnter(event) {
    if (typeof this.props.onDragEnter === 'function') {
      this.props.onDragEnter(event);
    }
  },

  handleDragLeave: function handleDragLeave(event) {
    if (typeof this.props.onDragLeave === 'function') {
      this.props.onDragLeave(event);
    }
  },

  handleDragOver: function handleDragOver(event) {
    event.preventDefault();

    if (typeof this.props.onDragOver === 'function') {
      this.props.onDragOver(event);
    }
  },

  handleDrop: function handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.files.length > 0) {
      if (typeof this.props.onDrop === 'function') {
        this.props.onDrop(event.dataTransfer);
      }
    }
  },

  handleDragEnd: function handleDragEnd(event) {
    if (typeof this.props.onDragEnd === 'function') {
      this.props.onDragEnd(event);
    }
  },

  render: function render() {
    return React.createElement(
      'div',
      {
        onDragStart: this.handleDragStart,
        onDrag: this.handleDrop,
        onDragEnter: this.handleDragEnter,
        onDragLeave: this.handleDragLeave,
        onDragOver: this.handleDragOver,
        onDrop: this.handleDrop,
        onDragEnd: this.handleDragEnd,
        style: style },
      this.props.children
    );
  }
});

module.exports = FileDragAndDrop;