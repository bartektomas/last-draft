'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background-color: transparent;\n  border: none;\n  color: #fafafa !important;\n  font-size: 14px;\n  height: auto;\n  line-height: 1.2rem;\n  margin: 0;\n  padding: 20px;\n  width: 250px;\n\n  &:focus {\n    outline: none;\n  }\n'], ['\n  background-color: transparent;\n  border: none;\n  color: #fafafa !important;\n  font-size: 14px;\n  height: auto;\n  line-height: 1.2rem;\n  margin: 0;\n  padding: 20px;\n  width: 250px;\n\n  &:focus {\n    outline: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 0;\n  color: inherit;\n  cursor: pointer;\n  border: 0;\n  height: 46px;\n  width: 40px;\n  background: transparent;\n  padding-right: 16px;\n'], ['\n  padding: 0;\n  color: inherit;\n  cursor: pointer;\n  border: 0;\n  height: 46px;\n  width: 40px;\n  background: transparent;\n  padding-right: 16px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-block;\n  color: #ccc;\n  &:hover {\n    color: #fff;\n  }\n'], ['\n  display: inline-block;\n  color: #ccc;\n  &:hover {\n    color: #fff;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Buttons = require('../Buttons/');

var _Buttons2 = _interopRequireDefault(_Buttons);

var _linkifyIt = require('linkify-it');

var _linkifyIt2 = _interopRequireDefault(_linkifyIt);

var _tlds = require('tlds');

var _tlds2 = _interopRequireDefault(_tlds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styled = require('styled-components').default;


var linkify = (0, _linkifyIt2.default)();
linkify.tlds(_tlds2.default);

var Link = function (_Component) {
  _inherits(Link, _Component);

  function Link(props) {
    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

    _this.state = { url: props && props.url || '' };
    return _this;
  }

  _createClass(Link, [{
    key: 'setLink',
    value: function setLink(event) {
      var url = this.state.url;


      if (!linkify.match(url)) {
        this.props.setError('Invalid Link');
        _reactDom2.default.findDOMNode(this.refs.textInput).focus();
        return;
      }

      this.props.setEntity({ url: url });
      this.reset();
      event.target.blur();
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.setState({ url: '' });
      this.props.cancelEntity();
    }
  }, {
    key: 'onLinkChange',
    value: function onLinkChange(event) {
      event.stopPropagation();
      var url = event.target.value;

      if (url === '') {
        this.props.cancelError();
      }

      this.setState({ url: url });
    }
  }, {
    key: 'onLinkKeyDown',
    value: function onLinkKeyDown(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.setLink(event);
      } else if (event.key === 'Escape') {
        event.preventDefault();
        this.reset();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _reactDom2.default.findDOMNode(this.refs.textInput).focus();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { whiteSpace: 'nowrap' } },
        _react2.default.createElement(LinkToolbarInput, {
          className: 'ld-link-toolbar-input',
          ref: 'textInput',
          type: 'text',
          onChange: this.onLinkChange.bind(this),
          value: this.state.url,
          onKeyDown: this.onLinkKeyDown.bind(this),
          placeholder: 'Type the link and press enter' }),
        _react2.default.createElement(
          LinkToolbarItem,
          { style: { verticalAlign: 'bottom' }, className: 'ld-link-toolbar-item' },
          _react2.default.createElement(
            LinkToolbarButton,
            {
              className: 'ld-link-toolbar-button',
              onClick: this.props.removeEntity,
              type: 'button'
            },
            this.props.entity ? _react2.default.createElement(_Buttons2.default.UnlinkIcon, null) : _react2.default.createElement(_Buttons2.default.CloseIcon, null)
          )
        )
      );
    }
  }]);

  return Link;
}(_react.Component);

exports.default = Link;


var LinkToolbarInput = styled.input(_templateObject);

var LinkToolbarButton = styled.button(_templateObject2);

var LinkToolbarItem = styled.span(_templateObject3);