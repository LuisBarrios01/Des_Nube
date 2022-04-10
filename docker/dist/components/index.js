"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "clientes", {
  enumerable: true,
  get: function get() {
    return _network2["default"];
  }
});
Object.defineProperty(exports, "productos", {
  enumerable: true,
  get: function get() {
    return _network["default"];
  }
});

var _network = _interopRequireDefault(require("./productos/network"));

var _network2 = _interopRequireDefault(require("./clientes/network"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }