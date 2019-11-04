namespace L03_FormElements {
    window.addEventListener("load", handleLoad);

    function handleLoad (_event: Event): void {
        console.log("Test");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");
    
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    
    }

    function handleChange (_event: Event): void {
        //console.log(_event);
        //let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        //console.log(drink.value);

        //let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        //console.log(inputs);

        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";



        let formData: FormData = new FormData(document.forms[0]);
        //console.log (formData);
        for (let entry of formData) {
            //console.log (entry);
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
            //console.log(item);
            let price: number = Number(item.getAttribute("price"));   // Number: Price wird jetzt als Number und nicht als Strink ausgegeben
           // console.log (price);
            

            
      
            order.innerHTML += item.name + "  €" + price + "\n"; // "\n" erzeugt Umbruch

            

            
        }

        //let amount: string = (<HTMLInputElement>_event.target).value;
        //let total: number = parseFloat(amount) * Number(drink.getAttribute("price"));
        //order.innerHTML += total + " €";
    }

    function displayAmount (_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);  // parseFloat--> string wird als Zahlenwert interpretiert
    }

}