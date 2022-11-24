"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _FinText = _interopRequireDefault(require("./core/FinText.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Container = /*#__PURE__*/function () {
  function Container() {
    _classCallCheck(this, Container);

    this.array = [];
  }

  _createClass(Container, [{
    key: "in",
    value: function _in(reader) {
      while (!reader.fileEmpty()) {
        var tmp = reader.readLine();
        var setText = new _FinText["default"]();
        setText["in"](tmp, setText, this.array);
      }
    }
  }, {
    key: "getArray",
    value: function getArray(tmp) {
      this.array.push(tmp);
      return this.array;
    }
  }, {
    key: "out",
    value: function out(writer) {
      var c = this.array.length;
      writer.writeLine("Container contains: ".concat(c, ", elements!"));
      if (c > 0) for (var i = 0; i < c; i++) {
        this.array[i].out(writer);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.array = [];
    }
  }]);

  return Container;
}();

exports["default"] = Container;