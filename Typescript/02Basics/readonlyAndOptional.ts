type Users = {
    readonly _id:string;
    name:string;
    email:string;
    isActive:boolean;
    creditcardDetails ?: number // here we have said card details as optional
}

let myUser : Users = {
    _id:"12345",
    name :"V",
    email :"dev@",
    isActive:false

}

type cardNumber = {
    cardnumber : string
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
} // & is used to combine all details i.e in cardDetails we have cardNumber & cardDate combined + we also created a CVV.

myUser.email = "v@dev.com"
myUser._id="2233"// error here as can-not change the id 
