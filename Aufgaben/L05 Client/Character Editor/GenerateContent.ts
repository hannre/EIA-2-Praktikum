namespace L05_CharacterEditor {

 
    export function generateContent(_data: Data): void {
        console.log(_data);

        for (let category in _data) {
            //console.log (category);
            let items: Category[] = _data[category];
            

            let group: HTMLElement | null = null;

            switch (category) {
                case "Accessoires":
                    group = createSelect(items, category);
                    break;
                case "Weapons":
                    group = createSingle(items, category);
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

    function createSelect(_items: Category[], _category: string): HTMLElement | null {
        //console.log("createSelect funktioniert!");
        let group: HTMLDivElement = document.createElement("div");
        let select: HTMLSelectElement = document.createElement("select");
        for (let item of _items) {
            
            let option: HTMLOptionElement = document.createElement("option");
            //select.selectedOptions: HTMLCollectionOf<HTMLOptionElement>();
            option.value = item.Items.name;
            option.setAttribute("weight", item.Items.weight.toFixed(2));
            select.name = _category;
            option.id = item.Items.name;

            let label: HTMLLabelElement = document.createElement("label");      // label ist der Name des Item der auf der Seite angezeigt wird
            label.textContent = item.Items.name;
            label.htmlFor = item.Items.name;

            select.appendChild(option);
            option.appendChild(label);
            group.appendChild(select);
        }
        
        
        return group;
    }
    function createSingle(_items: Category[], _category: string): HTMLElement | null {
        //console.log("createSelect funktioniert!");
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let radio: HTMLInputElement = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("weight", item.weight.toFixed(2));
            radio.value = item.Items.name;
            radio.name = _category;
            radio.id = item.Items.name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(radio);
            group.appendChild(label);
        }
        return group;
    }
   


} 