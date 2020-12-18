import express from "express";

const app = express();

app.get("/", (req, res) => res.json({ name: "mounika" }));

app.listen(8080, () => console.log("server started at 8080"));
