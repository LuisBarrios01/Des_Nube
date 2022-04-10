const DATA = [
  {
    nombre: "audifono",
    categoria: "tecnologia",
    precio: 30,
  },
  {
    nombre: "toalla",
    categoria: "limpieza",
    precio: 100,
  },
  {
    nombre: "taladro",
    categoria: "construccion",
    precio: 500,
  },
];

export const getProductos = (req, res) => {
  return res.status(200).json({
    ok: true,
    data: DATA,
  });
};
