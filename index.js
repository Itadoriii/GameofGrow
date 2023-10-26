const express = require('express')
const app = express()
const port = 3000
var XLXS = require('xlsx')
/*
const productos = [
    {
        id:1,
        name: "Nombre",
        precio: 50,
        imagen: "img/img carrusel/carrusel 3.jpg",
        stock: 30,
        tipo: "seeds"
    },
    {
        id:2,
        name: "Dark Devil Auto",
        precio: 25990,
        imagen: "img/img carrusel/carrusel 3.jpg",
        stock: 30,
        tipo: "seeds"
    },
    {
        id:3,
        name: "Dark k Auto",
        precio: 25777,
        imagen: "img/img carrusel/carrusel 3.jpg",
        stock: 30,
        tipo: "seeds"
    }
] */
const ExcelAJson = () =>{
  const excel = XLXS.readFile("Tienda/datasheet productos.xlsx");
  const data_productos = excel.SheetNames;
  let datos =  XLXS.utils.sheet_to_json(excel.Sheets[data_productos[0]])//SEMILLAS
  return datos;
 
};
const productos  = ExcelAJson();

app.get('/api/productos', (req, res) => {
  res.send(productos)
});

app.use('/',express.static("Tienda"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});