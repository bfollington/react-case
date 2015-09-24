"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function isTrue(test) {
    var didMatch = false;

    if (test) {
        if (test.call) {
            //it's a function
            didMatch = test();
        } else {
            didMatch = test;
        }
    }

    return didMatch ? true : false;
}

var Condition = (function (_React$Component) {
    _inherits(Condition, _React$Component);

    function Condition(props) {
        _classCallCheck(this, Condition);

        _get(Object.getPrototypeOf(Condition.prototype), "constructor", this).call(this, props);
    }

    _createClass(Condition, [{
        key: "render",
        value: function render() {

            var childToRender = null;

            var child;
            for (var i = 0; i < this.props.children.length; i++) {
                child = this.props.children[i];

                if (isTrue(child.props.test) || child.props["default"]) {
                    childToRender = child;
                    break;
                }
            }

            return childToRender;
        }
    }]);

    return Condition;
})(_react2["default"].Component);

exports.Condition = Condition;

var Case = (function (_React$Component2) {
    _inherits(Case, _React$Component2);

    function Case(props) {
        _classCallCheck(this, Case);

        _get(Object.getPrototypeOf(Case.prototype), "constructor", this).call(this, props);

        this.match = false;
    }

    _createClass(Case, [{
        key: "didMatch",
        value: function didMatch() {
            return this.match;
        }
    }, {
        key: "render",
        value: function render() {

            this.match = isTrue(this.props.test) || this.props["default"];

            if (!this.match) {
                return null;
            }

            return _react2["default"].createElement(
                "span",
                null,
                this.props.children
            );
        }
    }]);

    return Case;
})(_react2["default"].Component);

exports.Case = Case;

