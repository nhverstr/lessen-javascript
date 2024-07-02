const express = require("express");
const axios = require("axios");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
  res.send("Hello from Server 3");
});

app.get("/data", (req, res) => {
  res.json({ message: "Data from Server 3" });
});

app.listen(port, () => {
  console.log(`Server 3 running on http://localhost:${port}`);

  // Make a request to Server 1
  setInterval(async () => {
    try {
      const response = await axios.get("http://localhost:${port}/data");
      console.log("Server 3 received:", response.data);
    } catch (error) {
      console.error("Server 3 error:", error.message);
    }
  }, 1000);
});
