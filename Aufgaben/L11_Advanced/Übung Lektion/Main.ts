namespace L11_Übung {

    console.log(SubClass);
    let a: SuperClass = new SuperClass();
    a.greetPublic();

    let b: SubClass = new SubClass();
    b.greetPublic();
    
    console.log(a.x);
    // a.x = 5; --> funktioniert nicht wegen "readonly"

    let subi: SubClass = new SubClass();
    subi.isHit();



}