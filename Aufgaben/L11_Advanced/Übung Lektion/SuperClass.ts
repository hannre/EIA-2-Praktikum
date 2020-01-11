namespace L11_Übung {

    export  class SuperClass {
    public readonly x: number = 10;


    public static greetStatic(): void {
        console.log("Hello from SuperClass");
    }

    public greetPublic(): void {
        this.greetPrivate();
    }

    protected greetProtected(): void {
        this.greetPrivate();
    }


    private greetPrivate(): void {
        console.log("Hello from an Instance of SuperClass");
    }

    }






}