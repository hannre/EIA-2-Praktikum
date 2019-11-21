namespace L05_CocktailBar {
    window.addEventListener("load", handleLoad);

    async function handleLoad (_event: Event): Promise<void> {
        console.log("Test");

        let response: Response = await fetch("Data.json");
        let offer: string = await response.text();
        // tslint:disable-next-line: typedef
        let data = JSON.parse(offer);
        generateContent(data);


        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
        let reset: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=reset");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        submit.addEventListener("click", sendOrder);
        reset.addEventListener("click", resetOrder);

        displayOrder();
    }

    function resetOrder(): void {
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "...";

        console.log("Bestellung wurde geleert");
    }




    
    async function sendOrder(_event: MouseEvent): Promise<void> {
        console.log("SendOrder");
        let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form"));
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("index.html?" + query.toString());
        alert("Order sent!");
    }


    function handleChange (_event: Event): void {

        displayOrder();
    }

    function displayOrder(): void {
        //console.log("hallo");
        //let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        //console.log(drink.value);

        //let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        //console.log(inputs);
        let price: number = 0;
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";



        let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form"));
        //console.log (formData);
        for (let entry of formData) {
            //console.log (entry);
            
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']"); // "[name='" + entry[0] + "'][value='" + entry[1] + "']";
            //console.log(item);
            let itemPrice: number = Number(item.getAttribute("price"));   // Number: Price wird jetzt als Number und nicht als String ausgegeben
           // console.log (price);
            switch (entry[0]) {   // entry[0] ist name also Category (drink, container etc.); entry[1] ist value also z.b. Caipirinha, Mojito etc.
                case "Amount":
                    break;
                case "Drink":
                    let amount: number = Number(formData.get("Amount"));
                    itemPrice = amount * itemPrice;
                    order.innerHTML += amount + " L " + item.value + ": €" + itemPrice.toFixed(2) + "<br>";
                    break;
                default:
                    order.innerHTML += item.value + ": €" + itemPrice.toFixed(2) + "<br>";

            }

            price += itemPrice;
        }

        order.innerHTML += "<p><strong>Total: €" + price.toFixed(2);
     
    }

    function displayAmount (_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);  // parseFloat--> string wird als Zahlenwert interpretiert
    }

}