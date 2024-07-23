import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

// use this library when initializing the server
app.use(cors());
app.use(bodyParser.text());

app.get("/api", (req, res) => {
  console.log("hallo");


  res.sendStatus(200);
});

app.post("/api", (req, res) => {
  console.log(req.body);


  res.sendStatus(200); //dit gaan we vervangen door fetchen en wachten op antwoord van openAI
})

app.listen(3000, () => {
  console.log("start");
});