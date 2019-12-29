namespace L06_NodeAPI {
    console.log("Hallo");

    let x: number = 0;
    console.log(x);
    x++;
    console.warn(x);

    console.log(process.env.COMPUTERNAME);
    console.log(process.env.USERNAME);
    console.log(process.env.PORT);

    console.log(process.argv);      //arg steht für Argument; siehe Terminal --> argv ist ein Array von Informationen


    process.addListener("exit", handleExit);   //exit tritt ein wenn der Prozess beendet ist

    function handleExit(_code: number): void {
        console.log("Tschüss!");
    }

    setTimeout(handleTimeout, 2000);

    function handleTimeout(_event: Event): void {
        console.log("Timeout");
    }



}