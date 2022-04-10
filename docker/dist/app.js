"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _components = require("./components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // * middlewares

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/productos", _components.productos);
app.use("/clientes", _components.clientes);
var _default = app;
exports["default"] = _default;