import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as getID } from "uuid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const comments = [
  {
    username: "Ozan",
    comment: "NABER!!!!!",
    id: getID(),
  },
  {
    username: "Arda",
    comment: "Sana ne",
    id: getID(),
  },
  {
    username: "Azize",
    comment: "Saman ye",
    id: getID(),
  },
  {
    username: "CAMAL",
    comment: "Ben tokum sen ye",
    id: getID(),
  },
  {
    username: "Volkan Konak",
    comment: "Merhaba ben volkan konak",
    id: getID(),
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/create");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const selectedObject = comments.find((x) => x.id === id);
  if (selectedObject) {
    res.render("comments/show", { selectedObject });
  } else {
    res.send("404");
  }
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newComment = req.body.comment;
  const _comment = comments.find((x) => x.id === id);
  _comment.comment = newComment;
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  if (username !== "" && comment !== "") {
    comments.push({ username, comment, id: getID() });
  }
  res.redirect("comments");
});

app.get("/tacos", (req, res) => {
  res.render("posttacos");
});

app.post("/tacos", (req, res) => {
  console.log(req.body);
  res.send("hi");
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});