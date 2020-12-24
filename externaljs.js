document.querySelectorAll('.btn1').forEach(
    (item) => {
        item.addEventListener('click', () => {alert('Exetrnal Javascript!!')})
    }
);
//document.write({name:'jyothi'});
//alert({name:'jyothi'});
//console.log({name:'jyothi'});

let fullName= "Jyothi S";
fullName = "Jyothi";
console.log(fullName);
//Usinf const - can't re-assign.
//Can't do const last; You have to assign a value for const variable.
const last = "Srikantaiah";
console.log(fullName + " " + last);

//String concatination
let website = "google";
website = "udemy"
const url ="https://"+ website +".com";
console.log(url);

const number = 33;
console.log(number);

const a = 'jo';
const b = 12;
const c = true;
const d = false;
const e = null; // typeof null is object not null as this was implemented during javascript creation.
let f;
/*
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);*/

const friends = ['shilpa','puttu','appa','amma',3,6,23,47]

console.log(friends);
console.log(friends[8]); //Accessing array greator than its length will display undefined.

//Function Declaration - Functions is used to hold repeating code which can be used anywhere in the app by invoking it.
function printName(){
    console.log("Hi Jyothi");
    console.log("Hi Raghu");
}

//Some code 
printName()
//Some Code
printName()
//Some code
printName()

//Greet Jyothi Raghu seperately

function greetR(){
    console.log("Hello Raghu");
}

function greetJ(){
    console.log("Hello Jyothi");
}

greetR();
greetJ();

//Instead of two functions use one.

function greetUser(user){
    console.log("Helloooo.....     " + user);
}

//Cannot access user outside a function.
//console.log(user); // Uncaught ReferenceError: user is not defined as this is local to function.


greetUser("Jyothiiiii");greetUser("Raaggggg");
greetUser(); // Displays undefined in console while pritning user.
greetUser("jjj","rrr");//Second parameter is  not considered

// 1inch = 2.54cm
const calWidth = 13;
function calculateInCms(value){
    console.log("In cms : "+ (value*2.54)+"cm");
    //If there is no return statement then function si not returning anything. Invoking the function will return undefined.
    return value*2.54;

    console.log("this line is ignored");
    console.log("Anything after return is ignored");
}

const height = calculateInCms(100);
const width = calculateInCms(calWidth);

const dimension = [height , width];
console.log(dimension);

//Function Expression

const add = function addNumbers(num1,num2){
    return num1+num2;
}

console.log(add(1,2))

//Arrow Functions

const multiply = (num3,num4) => num3*num4;
console.log(multiply(2,6));

//For loop - Increment by 3 or decrement by 3. Increment or decrement then assign the value to i.

for(let i=0;i<10;i+=3){
    console.log(i);
}

for(let i=10;i>1;i-=3){
    console.log(i);
}

//String operations

let stringOp = ' Jyothi is Best   ';
let splitString = 'hi+how+are+you'
console.log(stringOp.toUpperCase());
console.log(stringOp.toLowerCase());
console.log(stringOp.substring(3,5));
console.log(stringOp.substr(2));
console.log(stringOp.strike());
document.write(stringOp.strike());
console.log(stringOp.startsWith('Best',10));
console.log(stringOp.trim());
console.log(stringOp.indexOf('z'));//If exists returns position else retruns -1.
console.log(stringOp.italics());
console.log(stringOp.length);
console.log(stringOp.charAt(9));
console.log(stringOp.includes('thi'));
console.log(stringOp.fontcolor('green'));
document.write(stringOp.fontcolor('green'));
document.write(stringOp.blink());
document.write('<br>');
console.log(stringOp.slice(8,10));
//Simple way to convert a string to an array. Split method retruns an array.
console.log(splitString.split('+')); //Input 'hi+how+are+you' and returns ["hi", "how", "are", "you"] with length: 4
console.log(stringOp.repeat(100));// prints the string 100 times
console.log(splitString.replaceAll('+','*'));
console.log('Google'.link('https://google.com'));
console.log('Hassan'.split("").reverse().join(""));

console.log(`Understand difference between slice , substring and substr.`);
//Understand difference between substring , substr and slice.
console.log(stringOp.substring(3,5));
console.log(stringOp.substr(3,5));
console.log(stringOp.slice(3,5));
//Template String
let degree = -12;
let tmp = `Hi , it's Jyothi... Isn't it chilling , ${degree} Degrees. Coat cost's ${12*123}.`
console.log(tmp);

//Array Properties

let fruits = ['mango','apple','banana','guava','melon','orange','grapes','jackfruit','chikku'];
console.log(fruits);
console.log(`Fruits ${fruits.length}`);
console.log(`6th Fruit : ${fruits[5]}`);
console.log(` ${fruits.reverse()}`);
console.log(`${fruits.concat('butterfruit')}`);
console.log(`After concat : ${fruits}`);
console.log(`${fruits.fill('12',3,4)}`);
fruits.push('strawberry');
console.log(`Push Strawberry to the existing array: ${fruits}`);
console.log(`Pop : ${fruits.pop()}`);
console.log(`After pop : ${fruits}`);
fruits.shift();
console.log(`Shift : ${fruits}`);
fruits.unshift('blueberry');
console.log(`Unshift : ${fruits}`);
fruits.splice(3,2);//Mutates the same array.
console.log(`After splice 3rd position and 2 fruits : ${fruits}`);

//array iteration

let flowers = [
    {flName : 'Rose' , color : 'Red' , cost : 10, id:1},
    {flName : 'Lily' , color : 'Yellow' , cost : 20, id:2},
    {flName : 'Morning Glory' , color : 'Blue' , cost : 30, id:3},
    {flName : 'Sun Flower' , color : 'crimson' , cost : 40, id:4},
    {flName : 'Jasmine' , color : 'White' , cost : 50, id:5},
    {flName : 'Marigold' , color : 'Orange' , cost : 20, id:6},
];

//Array.forEach()
function showFlower(flower){
    document.write(`<br> Color of ${flower.flName} is <b>${flower.color}</b> and it costs Rs.${flower.cost}`);
}


flowers.forEach(showFlower);

//Array.map()

const flow = flowers.map(function(flower){
    return `<h1>${flower.flName}</h1>`;
})

document.write(flow.join(''));

//Array.filter()

//Filter flowers which costs less than Rs.25
//Returns a list of matching flowers which gets filtered with the condition.

const cheapFlowers =  flowers.filter(function(flower){
    return flower.cost <= 25;
});
cheapFlowers.forEach(showFlower);

//Array.find()
//Returns one object , or number , or one array.
const oneFlower =  flowers.find(function(flower){
    return flower.cost <= 25;
});
document.write(`<br><br>Finding the first flower which is the cheapest <b> ${oneFlower.flName}</b>.`);

//Difference between filter and find - Filter returns a list of matching items with the condition whereas find returns the first matching item.

//Array.reduce()


//Math Object

const numb = 3.3333333333333333333;

document.write(`<br>
<br> Math.Floor(3.3333) =  ${Math.floor(numb)}
<br> Sqrt(3) ${Math.sqrt(9)}


`);


//Date Object

const date = new Date();
document.write(`
<br> Today's Date : ${date} 
<br> Month : ${date.getMonth()} 
<br> Get Today's Date : ${date.getDate()}
<br> Day : ${date.getDay()}
<br> Get Year : ${date.getFullYear()}
<br> Get Minutes : ${date.getMinutes()}
<br> Get Seconds : ${date.getSeconds()}
`);

// DOM traverse

//getElementById
//getElementsByTagName

const fruitsList = document.getElementsByTagName('li');

console.log(fruitsList);

//We can pass any css to both these methods
//querySelector
//querySelectorAll


//.childnodes will give children plus the whitespaces. Hence to get child nodes use .children.
//find all li within ul with id = result , first child and last child , parentElement
//Chaining parentelement can get the highest parent , for the last element parent will be null.
 

//previousSibling
//nextSibling
//return whitespace
//nextElementSibling - Whitespace is not considered
//previousElementsSibling - Whitespace is not considered

//nodeValue
//textContent

//getAttribute
//setAttribute

//className
//ClassList

//document.createElement('div)
//document.createTextNode('Text within the element')
//parentElem.appendChild(childElem)
//insertBefore(element,location)
//replaceChild('new','old') replace an element with other.

//prepend
//innerText can be used instead of createTextNode

//element.remove();
//parentElem.removeChild(childElem)

//innerHTML()
//textContent()


//mouse events
//mouseEnter() , mouseLeave(), mouseup(), mousedown(),click()

//key events
//keypress(), keydown(), keyup()

//events
//pass event as function parameter
//watch the event in console.log
//event.currentTarget
//event.Type
//event.preventDefault() 

//difference between target and currentTarget

//event bubbling and event propogation , capture : true

//form submit preventing using event.preventDefault()

//web storage local storage

//JSON.stringify();
//JSO.parse();