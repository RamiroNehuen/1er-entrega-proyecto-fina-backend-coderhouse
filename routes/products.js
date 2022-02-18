const { Router } = require("express");

const database = require("../services/database");

const product = require("../models/Product");

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
  const newProduct = new product.Product(
    req.body.description,
    req.body.code,
    req.body.name,
    req.body.img
  );

  const productList = await database.saveProduct(newProduct);

  res.send(productList);
});

products.put("/:id", (req, res) => {
  res.send("Unimplemented endpoint");
});

products.delete("/:id", (req, res) => {
  res.send("Unimplemented endpoint");
});

module.exports = products;
