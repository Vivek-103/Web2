function Geteven_numbers(numbers){
    let evennumbers = numbers.filter((number)=>number%2==0);
    return evennumbers;
}

let numbers = [1,2,3,4,34,46,76];
console.log(Geteven_numbers(numbers));