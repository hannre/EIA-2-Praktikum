"use strict";
var L05_CharacterEditor;
(function (L05_CharacterEditor) {
    function generateContent(_data) {
        console.log(_data);
        for (let category in _data) {
            //console.log (category);
            let items = _data[category];
            let group = null;
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
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group) // goup muss hier ein HTMLElement sein
                fieldset.appendChild(group);
            console.log(fieldset);
        }
    }
    L05_CharacterEditor.generateContent = generateContent;
    function createSelect(_items, _category) {
        //console.log("createSelect funktioniert!");
        let group = document.createElement("div");
        let select = document.createElement("select");
        for (let item of _items) {
            let option = document.createElement("option");
            //select.selectedOptions: HTMLCollectionOf<HTMLOptionElement>();
            option.value = item.Items.name;
            option.setAttribute("weight", item.Items.weight.toFixed(2));
            select.name = _category;
            option.id = item.Items.name;
            let label = document.createElement("label"); // label ist der Name des Item der auf der Seite angezeigt wird
            label.textContent = item.Items.name;
            label.htmlFor = item.Items.name;
            select.appendChild(option);
            option.appendChild(label);
            group.appendChild(select);
        }
        return group;
    }
    function createSingle(_items, _category) {
        //console.log("createSelect funktioniert!");
        let group = document.createElement("div");
        for (let item of _items) {
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("weight", item.weight.toFixed(2));
            radio.value = item.Items.name;
            radio.name = _category;
            radio.id = item.Items.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(radio);
            group.appendChild(label);
        }
        return group;
    }
})(L05_CharacterEditor || (L05_CharacterEditor = {}));
//# sourceMappingURL=GenerateContent.js.map