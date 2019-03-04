var beerData = require("../data/beers");

module.exports = (app) => {
    app.get("/api/beers", (req, res) => {
        res.json(beerData);
    });
    app.post("/api/beers", (req, res) => {
        var userData = req.body;
        
    })
};