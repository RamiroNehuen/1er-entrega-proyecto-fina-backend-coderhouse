const { Router } = require("express");

const database = require("../services/database");

const products = Router();

products.get("/:id?", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    // Es  list
    const productList = await database.listProducts();

    res.send(productList);
    return;
  }

  // Es getById
  res.send("Unimplemented endpoint");
});

products.post("/", async (req, res) => {
  const product = {
    product: req.body.item,
    price: req.body.price,
    img: req.body.imgUrl,
  };

  const productList = await database.saveProduct(product);

  res.send(productList);
});

products.put("/:id", (req, res) => {
  res.send("Unimplemented endpoint");
});

products.delete("/:id", (req, res) => {
  res.send("Unimplemented endpoint");
});

module.exports = products;
