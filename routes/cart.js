const { Router } = require("express");

const cart = Router();

cart.post("/", (req, res) => {
  res.send("Unimplemented endpoint");
});

cart.delete("/:id", (req, res) => {
  res.send("Unimplemented endpoint");
});

cart.get("/:id/products", (req, res) => {
  res.send("Unimplemented endpoint");
});

cart.post("/:id/products", (req, res) => {
  res.send("Unimplemented endpoint");
});

cart.delete("/:id/products/:id_prod", (req, res) => {
  res.send("Unimplemented endpoint");
});

module.exports = cart;
