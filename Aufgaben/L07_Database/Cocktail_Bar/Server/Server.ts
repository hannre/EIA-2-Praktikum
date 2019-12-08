

import * as Http from "http";    // hier: importiere mir alles (*) aus dem Module http und nenne es Http
import * as Url from "url";     // Module von node werden über das import-Statement eingebunden
import * as Mongo from "mongodb";

export namespace L07_CocktailBar {

// connection-String MongoDB: mongodb+srv://Testuser:<password>@eia2-8pl7g.mongodb.net/test?retryWrites=true&w=majority



    interface Order {
        [type: string]: string | string[];
    }



    let orders: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)  //wenn ich einen Port habe, hat mir die Maschine also einen zugeteilt
        port = 5001;       // wenn ich keinen Port habe, wie hier (undefined), such ich mir selber einen aus


    // vorher: let databaseUrl: string = "mongodb://localhost:27017";
    let databaseUrl: string = "mongodb+srv://Testuser:<password>@eia2-8pl7g.mongodb.net/test?retryWrites=true&w=majority";
    startServer(port);

    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        console.log(server);



        console.log("Server starting on port:" + _port);

        server.listen(_port);  //hier: Server horch (listen) auf einen bestimmten Port (und gucke ob da irgendwelche Nachrichten reinkommen)
        server.addListener("request", handleRequest);   // wenn dann eine Nachricht kommt, dann soll eine bestimmte Funktion aufgerufen werden
    }


    async function connectToDatabase(_url: string): Promise<void> {

        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        orders = mongoClient.db("CocktailBar").collection("Orders");
        //orders.insert({drink: "Mojito", Container: "Wide", Extras: "Orange", Amount: "0.6"});
        console.log("Database connection ", orders != undefined);  // ist orders ungleich undefined, ist es also definiert worden --> dann steht hinten dran einfach "true" (Collection wurde gefunden) oder andernfalls steht da "false"

    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("What's up?");

        _response.setHeader("content-type", "text/html, charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            console.log(url.query);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");

            }
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

            storeOrder(url.query);
        }

        _response.write("this is my response");
        _response.end();

    }

    function storeOrder(_order: Order): void {
        orders.insert(_order);
    }

}