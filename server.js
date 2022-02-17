const express = require("express");
const morgan = require("morgan");

const productsRouter = require("./routes/products");
const cartRouter = require("./routes/cart");

const app = express();

const port = process.env.PORT || 8080;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productsRouter);

app.use("/api/cart", cartRouter);

app.listen(port, () => {
  console.log(`Escuchando en esta url http://localhost:${port}`);
});
