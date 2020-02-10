"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); // hier: importiere mir alles (*) aus dem Module http und nenne es Http
const Url = require("url"); // Module von node werden über das import-Statement eingebunden
const Mongo = require("mongodb");
var L07_CocktailBar;
(function (L07_CocktailBar) {
    // connection-String MongoDB: mongodb+srv://Testuser:<password>@eia2-8pl7g.mongodb.net/test?retryWrites=true&w=majority
    let orders;
    let port = process.env.PORT;
    if (port == undefined) //wenn ich einen Port habe, hat mir die Maschine also einen zugeteilt
        port = 5001; // wenn ich keinen Port habe, wie hier (undefined), such ich mir selber einen aus
    // vorher: let databaseUrl: string = "mongodb://localhost:27017";
    let databaseUrl = "mongodb+srv://Testuser:<password>@eia2-8pl7g.mongodb.net/test?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log(server);
        console.log("Server starting on port:" + _port);
        server.listen(_port); //hier: Server horch (listen) auf einen bestimmten Port (und gucke ob da irgendwelche Nachrichten reinkommen)
        server.addListener("request", handleRequest); // wenn dann eine Nachricht kommt, dann soll eine bestimmte Funktion aufgerufen werden
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("CocktailBar").collection("Orders");
        //orders.insert({drink: "Mojito", Container: "Wide", Extras: "Orange", Amount: "0.6"});
        console.log("Database connection ", orders != undefined); // ist orders ungleich undefined, ist es also definiert worden --> dann steht hinten dran einfach "true" (Collection wurde gefunden) oder andernfalls steht da "false"
    }
    function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html, charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true); // assoziatives Array aus _request.url wird erstellt
            console.log(url.query);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            storeOrder(url.query);
        }
        _response.write("this is my response");
        _response.end();
    }
    function storeOrder(_order) {
        orders.insert(_order);
    }
})(L07_CocktailBar = exports.L07_CocktailBar || (exports.L07_CocktailBar = {}));
//# sourceMappingURL=Server.js.map