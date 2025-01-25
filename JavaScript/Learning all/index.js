console.log("Mahesh");

let num1 = 10;
let num2 = 20;

let str1 = "Mom";
let str2 = "Dad";

console.log(num1)
console.log(num2)
console.log(str1)
console.log(str2)

//global var decl
let Name = "apple";

//func def
function Myvariable() {
    //local var decl
    let num = 20;
    //display global var
    console.log(Name);
    //display local
    console.log(num);
}
//fun call
Myvariable();



//js operators
let x,y,sum;
x = 23;
y = 3;
sum = x + y;
console.log(sum);

//expression js oper
let z,num,mum;
x = 23;
y = 3;
num = x / 2;
mum = x + y;
console.log(num + "\n" +mum);

// var decl single -line comm
let a, b;
//assing values 
a = 10;
b = 10;
/* expresssion to add*/ //multi-line comm
add = a + b;
console.log(add);


// it store object data 
let student = {
    firstName: "Rakes",
    lastName: "Diaz",
    age:30,
    mark:"blueEye"
}

// functions



function sum(a, b) {
    let result = a + b;
  
    return result;
  }


  let sum = function(a, b) {
    let result = a + b;       //function expresion
  
    return result;
  };

  // expression on the right side
let sum = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:
let sum = (a, b) => {
  // ...
  return a + b;
}

// without arguments
let sayHi = () => console.log("Hello");

// with a single argument
let double = n => n * 2;

function Myfunction() {
    let a = 45;
    let b = 40;
    add = a + b;
    console.log(add);  
}
 Myfunction();
 Myfunction();


 //global var
 let petName = 'Rocky';
 function myFunction() {
     //local var
     fruit = 'apple';
     Name = 'mahesh';
     console.log(typeof petName +  '- ' + 'my pet name is' + petName);
     console.log(typeof fruit +  '- ' + 'my fruit is ' + fruit);
     console.log(typeof Name +  '- ' + 'my name is' + Name); 
 }
 myFunction();



 //while – The condition is checked before each iteration.
//do..while – The condition is checked after each iteration.
//for (;;) – The condition is checked before each iteration, additional settings available.
 
 // while loop 
 let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log( i );
  i++;
}


//  A switch statement can replace multiple if checks.
 

