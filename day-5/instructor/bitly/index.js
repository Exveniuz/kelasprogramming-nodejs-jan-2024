import express from "express";
import Home from "./controller/home.js";
import Dashboard from "./controller/dashboard.js";

const app = express();
const PORT = 3000;

// handle static public files
app.use(express.static("public"));

// handle body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", Home);
app.post("/shorten", function (req, res) {
  console.log(req.body);
  res.send("Shorten");
});
app.get("/dashboard", Dashboard);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
