const express = require("express");

const app = express();
const PORT = 3000;

// Basic Route
app.get("/", (req, res) => {
    res.send("Welcome to ExpressJS Routing");
});

// Route Parameter
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Query Parameters
app.get("/search", (req, res) => {
    const query = req.query.q;
    const limit = req.query.limit;

    res.send(`Searching for '${query}', limit ${limit}`);
});

// URL Building using req.originalUrl
app.get("/url", (req, res) => {
    res.send(`Original URL: ${req.originalUrl}`);
});

// Redirect Example
app.get("/home", (req, res) => {
    res.redirect("/");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});