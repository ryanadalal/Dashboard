import express from "express";

const app = express();
const port = process.env.PORT;;

app.get('/', (req, res) => {
    res.send("Test");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});