"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var L13_Abschlussaufgabe;
(function (L13_Abschlussaufgabe) {
    let highscore;
    let databaseURL;
    let dbName = "Vogelhaus";
    let dbCollection = "score";
    databaseURL = "mongodb+srv://Test13:hallo11@eia2-8pl7g.mongodb.net/test?retryWrites=true&w=majority";
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    startServer(port);
    console.log("Server starting on port: " + port);
    connectToDatabase(databaseURL);
    function startServer(_port) {
        let server = Http.createServer();
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        highscore = mongoClient.db(dbName).collection(dbCollection);
        console.log("Database connection is ", highscore != undefined);
    }
    async function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            // for (let key in url.query) {
            //     _response.write(key + ":" + url.query[key] + "<br/>");
            // }
            if (url.query["command"] == "retrieve") {
                let report = await retrieveOrders();
                if (report == "We encountered tecnical problems. Please try again later")
                    _response.write(report);
                else
                    _response.write(JSON.stringify(report));
            }
            else {
                console.log("urlQuery: ", url.query);
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                highscore.insert(url.query); //sagt was in der Collection eingetragen werden soll
                console.log(jsonString);
            }
        }
        _response.end();
    }
    async function retrieveOrders() {
        // console.log("Asking DB about Orders ", highscore.find());
        let cursor = await highscore.find().sort({ score: -1 });
        let answer = await cursor.toArray();
        console.log("DB CursorToArray", answer);
        if (answer != null) {
            return answer;
        }
        else
            return "We encountered tecnical problems. Please try again later";
    }
})(L13_Abschlussaufgabe = exports.L13_Abschlussaufgabe || (exports.L13_Abschlussaufgabe = {}));
//# sourceMappingURL=Server.js.map