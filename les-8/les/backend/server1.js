import express from "express"
const app = express()
app.get("/api", (req, res) => {

    console.log('hallo');

});
app.listen(3001, () => {
    console.log("start");
});