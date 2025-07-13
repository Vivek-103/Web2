function detectType(val:number | string){
    if(typeof val === "string"){
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id:string | null){
    if(!id){
        console.log("Please Provide ID");
        return;
    }
    id.toLowerCase()
}