namespace L04_CocktailBar {
    window.addEventListener("load", handleLoad);

    function handleLoad (_event: Event): void {
        console.log("Test");

        generateContent(data);


        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");
    
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);

        displayOrder();
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