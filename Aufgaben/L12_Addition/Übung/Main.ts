namespace L12_Übung {

    interface Greet {
        greet: string;
    }

    let greets: Greet[] = [{ greet: "Hi"}, { greet: "Hallo"}, { greet: "Servus" }];

    let input: string | null = prompt("Lass dich grüßen!", "Gib hier eine Zahl ein");
    let greet: string = greets[Number(input)].greet;
    alert(greet);
    console.log("Done");





}