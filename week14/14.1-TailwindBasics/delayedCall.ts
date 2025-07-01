//Create a function that takes another function as input, and runs it after 3 second.
function delayedCall(fn:()=>void){
    setTimeout(fn,3000);
}

delayedCall(function(){
    console.log("Hello World")
})