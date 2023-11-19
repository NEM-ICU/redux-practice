import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const posts = [
  {
    id: 0,
    title: "initial post",
    content: "sample post",
    userId: 0,
  },
  {
    id: 1,
    title: "second post",
    content: "just sample post ",
    userId: 1,
  },
  {
    id: 2,
    title: "third post",
    content: "just third post ",
    userId: 2,
  },
];

const users = [
  { id: "0", name: "Nethsara" },
  { id: "1", name: "Sithum" },
  { id: "2", name: "Jayan" },
  { id: "4", name: "Abheetha" },
  { id: "5", name: "Lasidu" },
  { id: "6", name: "Achala" },
  { id: "7", name: "Geba" },
];

app.get("/api/posts", (req, res) => {
  setTimeout(() => {
    res.send(posts);
  }, [2000]);
});

app.post("/api/posts", (req, res) => {
  setTimeout(() => {
    res.send(req.body);
  }, [2000]);
});

app.get("/api/users", (req, res) => {
  setTimeout(() => {
    res.send(users);
  }, [2000]);
});

const server = app.listen(8000, () => {
  console.log(`Server running on port ${server.address().port}`);
});
