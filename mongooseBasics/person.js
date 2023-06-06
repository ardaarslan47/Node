const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/movieApp");
  console.log("connection accepted");
}

const personSchema = new mongoose.Schema({
  first: {
    required: true,
    type: String,
  },
  last: {
    required: true,
    type: String,
  },
});

personSchema.virtual("fullName").get(function (){
  return `${this.first} ${this.last}`;
});

personSchema.pre('save', async function () {
    console.log(this);
})

personSchema.post('save', async function () {
    console.log(this);
})

const Person = mongoose.model("Person", personSchema);

