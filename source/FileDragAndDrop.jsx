var React = require('react');

var style = {
  width: '100%',
  height: '100%'
};

var FileDragAndDrop = React.createClass({

  propTypes: {
    onDragStart: React.PropTypes.func,
    onDrop: React.PropTypes.func.isRequired,
    onDragEnter: React.PropTypes.func,
    onDragLeave: React.PropTypes.func,
    onDragOver: React.PropTypes.func,
    onDragEnd: React.PropTypes.func
  },

  handleDragStart: function (event) {
    if (typeof this.props.onDragStart === 'function') {
      this.props.onDragStart(event);
    }
  },

  handleDrag: function (event) {
    if (typeof this.props.onDrag === 'function') {
      this.props.onDrag(event);
    }
  },

  handleDragEnter: function (event) {
    if (typeof this.props.onDragEnter === 'function') {
      this.props.onDragEnter(event);
    }
  },

  handleDragLeave: function (event) {
    if (typeof this.props.onDragLeave === 'function') {
      this.props.onDragLeave(event);
    }
  },

  handleDragOver: function (event) {
    event.preventDefault();

    if (typeof this.props.onDragOver === 'function') {
      this.props.onDragOver(event);
    }
  },

  handleDrop: function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.files.length > 0) {
      if (typeof this.props.onDrop === 'function') {
        this.props.onDrop(event.dataTransfer);
      }
    }
  },

  handleDragEnd: function (event) {
    if (typeof this.props.onDragEnd === 'function') {
      this.props.onDragEnd(event);
    }
  },

  render: function () {
    return (
      <div
        onDragStart={this.handleDragStart}
        onDrag={this.handleDrop}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
        onDragEnd={this.handleDragEnd}
        style={style}>

        {this.props.children}

      </div>
    );
  }
});

module.exports = FileDragAndDrop;
