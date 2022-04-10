"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductos = void 0;
var DATA = [{
  nombre: "audifono",
  categoria: "tecnologia",
  precio: 30
}, {
  nombre: "toalla",
  categoria: "limpieza",
  precio: 100
}, {
  nombre: "taladro",
  categoria: "construccion",
  precio: 500
}];

var getProductos = function getProductos(req, res) {
  return res.status(200).json({
    ok: true,
    data: DATA
  });
};

exports.getProductos = getProductos;