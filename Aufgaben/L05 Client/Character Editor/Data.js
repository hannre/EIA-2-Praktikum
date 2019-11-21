"use strict";
var L05_CharacterEditor;
(function (L05_CharacterEditor) {
    L05_CharacterEditor.data = {
        Accessoires: [{ type: "select", Items: [{ name: "Kette", weight: 0.3 },
                    { name: "Ring", weight: 0.2 },
                    { name: "Ohrringe", weight: 0.3 },
                    { name: "Gürtel", weight: 0.5 },
                    { name: "Handtasche", weight: 1.5 }
                ]
            }
        ],
        Weapons: [{ type: "radio", Items: 
                // Einhändige Waffen: 
                [{ name: "Schwert", weight: 2.0 },
                    { name: "Pistole", weight: 4.0 },
                    { name: "Messer", weight: 1.0 },
                    { name: "Schlagstock", weight: 3.0 },
                    // Beidhändige Waffen
                    { name: "Doppel-Schwert", weight: 4.0 },
                    { name: "Schleuder", weight: 2.0 },
                    { name: "Doppel-Messer", weight: 1.0 },
                    { name: "Bazooka", weight: 7.0 }
                ]
            }
        ]
    };
})(L05_CharacterEditor || (L05_CharacterEditor = {}));
//# sourceMappingURL=Data.js.map