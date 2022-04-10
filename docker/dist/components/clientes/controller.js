"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClientes = void 0;
var DATA = [{
  nombre: "Luis",
  apellido: "Barrios",
  telefono: 95745224
}, {
  nombre: "Elias",
  apellido: "Puchoc",
  telefono: 945585224
}, {
  nombre: "Cecilia",
  apellido: "Casas",
  telefono: 957477424
}];

var getClientes = function getClientes(req, res) {
  return res.status(200).json({
    ok: true,
    data: DATA
  });
};

exports.getClientes = getClientes;