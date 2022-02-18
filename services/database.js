const { writeFile, readFile } = require("fs/promises");

const saveProduct = (product) => {
  readFile("./database.json", "utf-8")
    .then((content) => {
      const db = JSON.parse(content);
      const productList = db.products;
      productList.push(product);
      const productsText = JSON.stringify({ ...db, products: productList });
      try {
        writeFile("./database.json", productsText);
      } catch (err) {
        console.log("No se pudo escribir el archivo!");
      }
    })
    .catch((err) => {
      console.log("Error de Lectura", err);
    });
};

const listProducts = async () => {
  const content = await readFile("./database.json");
  const db = JSON.parse(content);
  const productList = db.products;
  return productList;
};

module.exports = { listProducts };

module.exports = { saveProduct };
