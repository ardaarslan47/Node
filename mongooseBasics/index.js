const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/movieApp");
  console.log("connection accepted");
}

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
});

movieSchema.methods.greet = function () {
  console.log(this);
};

movieSchema.statics.deleteAll = function () {
  return this.deleteMany({}).then((res) => console.log(res));
};

movieSchema.statics.findByTitle = function (title) {
  return this.findOne({ title: title }).then((m) => console.log(m));
};

const Movie = mongoose.model("Movie", movieSchema);
// const amadeus = new Movie({
//   title: "Amadeus",
//   year: 1986,
//   score: 9.6,
// });

Movie.insertMany([
  { title: "Star Wars", year: 1978, score: 8.9 },
  { title: "Inside Out", year: 2018, score: 8 },
])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

const findMovie = async (title) => {
  const foundMovie = await Movie.findOne({ title: title });
  foundMovie.greet();
};

// findMovie('Star Wars')
