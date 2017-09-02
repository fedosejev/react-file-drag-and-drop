'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');

var style = {
  width: '100%',
  height: '100%'
};

var FileDragAndDrop = (function (_React$Component) {
  _inherits(FileDragAndDrop, _React$Component);

  function FileDragAndDrop() {
    _classCallCheck(this, FileDragAndDrop);

    _get(Object.getPrototypeOf(FileDragAndDrop.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(FileDragAndDrop, [{
    key: 'handleDragStart',
    value: function handleDragStart(event) {
      if (typeof this.props.onDragStart === 'function') {
        this.props.onDragStart(event);
      }
    }
  }, {
    key: 'handleDrag',
    value: function handleDrag(event) {
      if (typeof this.props.onDrag === 'function') {
        this.props.onDrag(event);
      }
    }
  }, {
    key: 'handleDragEnter',
    value: function handleDragEnter(event) {
      if (typeof this.props.onDragEnter === 'function') {
        this.props.onDragEnter(event);
      }
    }
  }, {
    key: 'handleDragLeave',
    value: function handleDragLeave(event) {
      if (typeof this.props.onDragLeave === 'function') {
        this.props.onDragLeave(event);
      }
    }
  }, {
    key: 'handleDragOver',
    value: function handleDragOver(event) {
      event.preventDefault();

      if (typeof this.props.onDragOver === 'function') {
        this.props.onDragOver(event);
      }
    }
  }, {
    key: 'handleDrop',
    value: function handleDrop(event) {
      event.preventDefault();
      event.stopPropagation();

      if (event.dataTransfer.files.length > 0) {
        if (typeof this.props.onDrop === 'function') {
          this.props.onDrop(event.dataTransfer);
        }
      }
    }
  }, {
    key: 'handleDragEnd',
    value: function handleDragEnd(event) {
      if (typeof this.props.onDragEnd === 'function') {
        this.props.onDragEnd(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
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
  }]);

  return FileDragAndDrop;
})(React.Component);

;

FileDragAndDrop.propTypes = {
  onDragStart: PropTypes.func,
  onDrop: PropTypes.func.isRequired,
  onDragEnter: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragEnd: PropTypes.func
};

module.exports = FileDragAndDrop;