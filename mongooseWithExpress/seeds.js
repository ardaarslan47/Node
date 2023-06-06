const mongoose = require("mongoose");
const Product = require("./models/product");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
  console.log("connected to mongoose");
}

// const p = new Product({
//   name: "Grape Fruit",
//   price: 2.99,
//   category: "fruit",
// });
// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => console.log(e));

const seedProducts = [
  { name: "Fairy Eggplant", price: 1.4, category: "vegetable" },
  { name: "Organic Goddess Melon", price: 4.99, category: "fruit" },
  { name: "Organic Celery", price: 1.99, category: "vegetable" },
  { name: "Milk", price: 0.99, category: "dairy" },
];

Product.insertMany(seedProducts)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
