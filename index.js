const express = require('express')
const app = express()
const port = 3000
var XLXS = require('xlsx')

const ExcelAJson = (pagina) =>{
  const excel = XLXS.readFile("Tienda/datasheet productos.xlsx");
  const data_productos = excel.SheetNames;
  let datos =  XLXS.utils.sheet_to_json(excel.Sheets[data_productos[pagina]])
  return datos;
 
};
const semillas  = ExcelAJson(0);
const articulos  = ExcelAJson(1);
const utilidades  = ExcelAJson(2);


app.get('/api/semillas', (req, res) => {
  res.send(semillas)
});

app.get('/api/articulos', (req, res) => {
  res.send(articulos)
});




app.use('/',express.static("Tienda"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});