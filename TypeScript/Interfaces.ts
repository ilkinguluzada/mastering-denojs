interface Person { 
   firstName:string, 
   lastName:string, 
   sayHi: ()=>string 
} 

var customer:Person = { 
   firstName:"Ilkin",
   lastName:"Guluzada", 
   sayHi: ():string =>{return "Hi there"} 
} 

console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi()) 