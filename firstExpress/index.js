import express from "express";

const app = express();

// app.use((req, res) => {
//     res.send('<h1>Got Ya!<h1/>')
// })

app.get("/r/:subreddit/comment/:commentId", (req, res) => {
  const { subreddit, commentId } = req.params;
  const { q } = req.query;
  if(!q){
    res.send(`<h1>Viewing ${commentId} by ${subreddit}<h1/>`)
  }
  res.send(
    `<h1>Viewing ${commentId} by ${subreddit}<h1/><p>Search result for ${q} uuu<p/>`
  );
});

// app.get("/cats", (req, res) => {
//   res.send("<h1>MEOW!<h1/>");
// });

// app.get("/dogs", (req, res) => {
//   res.send("<h1>Bark<h1/>");
// });

// app.get("/", (req, res) => {
//   res.send("<h1>Got Ya!<h1/>");
// });

// app.get("*", (req, res) => {
//   res.send("404 not found");
// });

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
