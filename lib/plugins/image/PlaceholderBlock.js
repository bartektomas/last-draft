'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BlockContent = require('../block/BlockContent');

var _BlockContent2 = _interopRequireDefault(_BlockContent);

var _BlockInput = require('../block/BlockInput');

var _BlockInput2 = _interopRequireDefault(_BlockInput);

var _Block = require('../block/Block');

var _Block2 = _interopRequireDefault(_Block);

var _Buttons = require('../../components/Buttons/');

var _Buttons2 = _interopRequireDefault(_Buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageBlock = function (_Component) {
  _inherits(ImageBlock, _Component);

  function ImageBlock(props) {
    _classCallCheck(this, ImageBlock);

    var _this = _possibleConstructorReturn(this, (ImageBlock.__proto__ || Object.getPrototypeOf(ImageBlock)).call(this, props));

    _this.actions = [{
      key: 'delete',
      icon: _Buttons2.default.CloseIcon,
      action: _this.props.container.remove
    }];
    return _this;
  }

  _createClass(ImageBlock, [{
    key: 'handleCaptionChange',
    value: function handleCaptionChange(event) {
      event.stopPropagation();
      this.props.container.updateData({ caption: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var ImageBlockStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        verticalAlign: 'middle',
        opacity: 0.4
      };

      return _react2.default.createElement(
        _Block2.default,
        _extends({}, this.props, { actions: this.actions }),
        _react2.default.createElement(
          _BlockContent2.default,
          null,
          _react2.default.createElement('img', { style: ImageBlockStyle, src: this.props.data.src, alt: '', className: 'ld-image-placeholder-block' })
        ),
        _react2.default.createElement(_BlockInput2.default, {
          placeholder: 'Caption',
          value: this.props.data.caption,
          onChange: this.handleCaptionChange.bind(this) })
      );
    }
  }]);

  return ImageBlock;
}(_react.Component);

exports.default = ImageBlock;