namespace L05_CharacterEditor {

    export interface Item {
        name: string;
        weight: number;
    }

    export interface Category {   
        type: string;
        Items: Item[];
        
    }

    export interface Data {
        [category: string]: Category[];
    }
 
    export function generateContent(_data: Data): void {
        console.log(_data);
        let groups: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        groups.id = "groupsWeapon";
        
        let select: HTMLSelectElement = document.createElement("select");

        let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#Weapon");
        if (fieldset)
                fieldset.appendChild(groups);

        console.log(fieldset);

        for (let category in _data) {
            //console.log (category);
            let items: Category[] = _data[category];
      

            let group: HTMLElement | null = null;
            
            

            

            switch (category) {
                case "Accessoires":
                    group = createSelect(items, category);
                    break;
                case "Singlehanded":
                
                case "Twohanded":
                    

                    group = createSelectWeapon(items, category, groups, select); 

                    break;

                default:
                    break;
            }

            // let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#Extras" + category);
            if (category == "Accessoires") {
                let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
                if (fieldset && group)    // group muss hier ein HTMLElement sein
                fieldset.appendChild(group);
                console.log(fieldset);

            /* let accessoires: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#Accessoires");
            console.log(accessoires);
            let divelement: HTMLDivElement = <HTMLDivElement>document.querySelector("div#div");
            console.log(divelement); */
        }

            /* if (category == "Singlehanded" || category == "Twohanded") {
                let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#weapon");
                if (fieldset && group)    // group muss hier ein HTMLElement sein
                    fieldset.appendChild(group);
                console.log(fieldset);

            } */

        }

    }

    function createSelect(_items: Category[], _category: string): HTMLElement | null {
        console.log("createSelect funktioniert!");
        let group: HTMLDivElement = document.createElement("div");
        group.id = "groupAccessoires"; 
        let select: HTMLSelectElement = document.createElement("select");
        
        
           
        for (let category of _items) {
            console.log (category);
            let label: HTMLLabelElement = document.createElement("label"); 
            label.textContent = _category + ": ";
            label.htmlFor = _category;
            group.appendChild(label);
            
            //select.selectedOptions: HTMLCollectionOf<HTMLOptionElement>();
            for (let i: number = 0; i < category.Items.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.value = category.Items[i].name;
            option.setAttribute("weight", category.Items[i].weight.toFixed(1));
            select.name = _category;
            option.id = category.Items[i].name;

            let label: HTMLLabelElement = document.createElement("label");      // label ist der Name des Item der auf der Seite angezeigt wird
            label.textContent = category.Items[i].name;
            label.htmlFor = category.Items[i].name;


            select.appendChild(option);
            option.appendChild(label);
            group.appendChild(select);    
            }

            
           
        }
        return group;
    }



    function createSelectWeapon(_items: Category[], _category: string, _group: HTMLDivElement, _select: HTMLSelectElement): HTMLElement | null {
        console.log("createSingle funktioniert!");

        //console.log(_group);
        let group: HTMLDivElement = <HTMLDivElement>document.querySelector("div#groupsWeapon");
        //console.log(group);
        
        

        if (_category == "Singlehanded") {
            
            let label: HTMLLabelElement = document.createElement("label"); 
            label.textContent = "Weapons: ";
            label.htmlFor = "weapon";
            group.appendChild(label);

            for (let category of _items) {
            //console.log(category);        
            let optiongroup: HTMLOptGroupElement = document.createElement("optgroup");
            optiongroup.label = _category;
            _select.appendChild(optiongroup);

            for (let i: number = 0; i < category.Items.length; i++) {
                
                let option: HTMLOptionElement = document.createElement("option");
                option.value = category.Items[i].name;
                option.setAttribute("weight", category.Items[i].weight.toFixed(1));
                _select.name = "weapon";
                option.id = category.Items[i].name;
        
                let label: HTMLLabelElement = document.createElement("label");      // label ist der Name des Item der auf der Seite angezeigt wird
                label.textContent = category.Items[i].name;
                label.htmlFor = category.Items[i].name;
        
                
                _select.appendChild(option);
                
                option.appendChild(label);
                group.appendChild(_select);  }
        
           }

        

        }

        if (_category == "Twohanded") {

        for (let category of _items) {
                //console.log(category);        
                let optiongroup: HTMLOptGroupElement = document.createElement("optgroup");
                optiongroup.label = _category;
                _select.appendChild(optiongroup);

                for (let i: number = 0; i < category.Items.length; i++) {
                    
                    let option: HTMLOptionElement = document.createElement("option");
                    option.value = category.Items[i].name;
                    option.setAttribute("weight", category.Items[i].weight.toFixed(1));
                    _select.name = "weapon";
                    option.id = category.Items[i].name;
            
                    let label: HTMLLabelElement = document.createElement("label");      // label ist der Name des Item der auf der Seite angezeigt wird
                    label.textContent = category.Items[i].name;
                    label.htmlFor = category.Items[i].name;
            
                    
                    _select.appendChild(option);
                    option.appendChild(label);
                    group.appendChild(_select);  }
            
               } 
            }


        return group;
        }

        
     
          
       /*   let radio: HTMLInputElement = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("weight", category.Items[i].weight.toFixed(1));
            radio.value = category.Items[i].name;
            radio.name = _category;
            radio.id = category.Items[i].name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = category.Items[i].name;
            label.htmlFor = category.Items[i].name;

            group.appendChild(radio);
            group.appendChild(label); */
       
   
}

 