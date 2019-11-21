"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); // hier: importiere mir alles (*) aus dem Module http und nenne es Http
const Url = require("url"); // Module von node werden über das import-Statement eingebunden
var L06_CocktailBar;
(function (L06_CocktailBar) {
    let server = Http.createServer();
    console.log(server);
    let port = process.env.PORT;
    if (port == undefined) //wenn ich einen Port habe, hat mir die Maschine also einen zugeteilt
        port = 5001; // wenn ich keinen Port habe, wie hier (undefined), such ich mir selber einen aus
    console.log("Server starting on port:" + port);
    server.listen(port); //hier: Server horch (listen) auf einen bestimmten Port (und gucke ob das irgendwelche Nachrichten reinkommen)
    server.addListener("request", handleRequest); // wenn dann eine Nachricht kommt, dann soll eine bestimmte Funktion aufgerufen werden
    function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html, charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            console.log(url.query);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.write("this is my response");
        _response.end();
    }
})(L06_CocktailBar = exports.L06_CocktailBar || (exports.L06_CocktailBar = {}));
//# sourceMappingURL=Server.js.map