{
    // string
    let greetings: string = "Hello VIVEK";
    console.log("Greeting:", greetings);

    // number
    let userId: number = 3344.5;
    console.log("User ID:", userId);

    // boolean
    let isLoggedIn: boolean = false;
    console.log("Is Logged In:", isLoggedIn);

    // any (not a good practice in TypeScript)
    let hero: any;
    function getHero(): string {
        return "thor";
    }
    hero = getHero();
    console.log("Hero:", hero);
}
