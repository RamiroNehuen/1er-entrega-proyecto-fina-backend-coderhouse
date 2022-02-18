class Product {
  // generateNewId = () => {
  //   let idIndex = Math.floor(Math.random() * 9999) + 1;
  //   if (Object.keys(productsList).includes(idIndex) == idIndex) {
  //     idIndex = generateNewId();
  //   }
  //   return idIndex;
  // };

  constructor(description, code, name, img, stock) {
    //this.id = generateNewId();
    //this.timestamp = timestamp;
    this.name = name;
    this.description = description;
    this.code = code;
    this.img = img;
    this.stock = stock;
  }
}

module.exports = { Product };
