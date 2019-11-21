namespace L04_CocktailBar {

  
    export function generateContent(_data: Data): void {
        console.log(_data);

        for (let category in _data) {
            //console.log (category);
            let items: Item[] = _data[category];

            let group: HTMLElement | null = null;

            switch (category) {
                case "Drink":
                    group = createSelect(items, category);
                    break;
                case "Container":
                    group = createSingle(items, category);
                    break;
                case "Extras":
                    group = createMultiple(items, category);
                    //console.log(group);
                    break;

                default:
                    break;
            }

            // let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#Extras" + category);
            
            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)    // goup muss hier ein HTMLElement sein
                fieldset.appendChild(group);
            console.log(fieldset);

        }

    }

    function createSelect(_items: Item[], _category: string): HTMLElement | null {
        //console.log("createSelect funktioniert!");
        let group: HTMLDivElement = document.createElement("div");
        let select: HTMLSelectElement = document.createElement("select");
        for (let item of _items) {
            
            let option: HTMLOptionElement = document.createElement("option");
            //select.selectedOptions: HTMLCollectionOf<HTMLOptionElement>();
            option.value = item.name;
            option.setAttribute("price", item.price.toFixed(2));
            select.name = _category;
            option.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");      // label ist der Name des Item der auf der Seite angezeigt wird
            label.textContent = item.name;
            label.htmlFor = item.name;

            select.appendChild(option);
            option.appendChild(label);
            group.appendChild(select);
        }
        
        
        return group;
    }
    function createSingle(_items: Item[], _category: string): HTMLElement | null {
        //console.log("createSelect funktioniert!");
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let radio: HTMLInputElement = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("price", item.price.toFixed(2));
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(radio);
            group.appendChild(label);
        }
        return group;
    }
    function createMultiple(_items: Item[], _category: string): HTMLElement | null {
        //console.log("halloooooo");
        let group: HTMLDivElement = document.createElement("div");                         // diese group gilt nur in createMultiple (nicht das gleiche group wie in function generateContent)
        for (let item of _items) {          // "for of"-schleife gibt gleich die Elemente (bzw. die Werte) raus und "for in"-schleife gibt die Namen raus (also 0, 1, 2, 3 etc.)
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));      //toFixed(2) --> zwei Nachkkommastellen
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;

        //console.log(checkbox);
            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }



}