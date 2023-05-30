import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import redditData from "./data.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home", { name: "home" });
});

app.get("/cats", (req, res) => {
  const cats = ["caki", "soso", "susi"];
  res.render("cats", { cats, name: "cats" });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const subs = redditData[subreddit];
  if (subs) {
    res.render("subreddit", { ...subs });
  } else {
    res.render("subNotFound", { subreddit });
  }
});

app.get("/random", (req, res) => {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  res.render("random", { randomNum: randomNum, name: "random" });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
