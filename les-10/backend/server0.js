import express from "express";
const app = express();

app.get("/api", (req, res) => {
  console.log("hallo");

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("start");
});
