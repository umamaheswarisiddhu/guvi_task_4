//16.)Give the Actual cost and Sold cost, Calculate Discount Of Product
function discount(){
    var p = pricevalue;
    var s = seasonvalue;
    var d;
    if(s=="summer"){
        console.log("The discount is 10%");
        d=(p-(p*0.1));
    }
    else if(s=="newyear"){
        console.log("The discount is 5%");
        d=(p-(p*0.05));
    }
    else if(s=="clearance"){
        console.log("The discount is 15%");
        d=(p-(p*0.15));
    }
    result = ("The discounted price : Rs "+d);
    console.log(result);
}


//17.) Given their radius of a circle and find its diameter, circumference and area.

var r, d, c, a;
    
// r = radius
// d = diameter
// c = circumference
// a = area

/* Calculation of diameter, circumference and area */

r = 10;
d = 2 * 10;
c = 2 * 3.14 * 10;
a = 3.14 * (10 * 10);

console.log("Diameter = " + d + " units");
console.log("Circumference = " + c + " units");
console.log("Area = " + a + " sq. units");



//18.)Given two numbers and perform all arithmetic operations.
var p, q;
var sum, sub, mul, div, mod;
p = 8;
q = 6;

/* Perform all arithmetic operations */
sum = p + q;
console.log("sum")
sub = p - q;
console.log("sub")
mul = p * q;
console.log("mul")
div = p / q;
console.log("div")
mod = p % q;
console.log("mod")


//19.)Display the asterisk pattern as shown below(No loop needed):
let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    string += "*";
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);


//Calculate electricity bill?
//20.) a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?

let unitperhourinwatt=100
let hour=1
let unitrate=10
letkwh=(unitperhourinwatt*hour)/1000
let monthUsage=30*kwh
let costofbill=unitrate*monthUsage
console.log(costofbill) 




//21.)Program To Calculate CGPA
 
function CgpaCalc( marks, n)
{
      
    // Variable to store the grades in
    // every subject
    let grade = Array.from({length: n}, (_, i) => 0);
  
    // Variables to store CGPA and the
    // sum of all the grades
    let cgpa, sum = 0;
  
    // Computing the grades
    for(let i = 0; i < n; i++)
    {
        grade[i] = (marks[i] / 10);
    }
  
    // Computing the sum of grades
    for(let i = 0; i < n; i++)
    {
        sum += grade[i];
    }
  
    // Computing the CGPA
    cgpa = sum / n;
  
    return cgpa;
}
 
// Driver Code
     
    let n = 5;
        let marks
            = [ 90, 80, 70, 80, 90 ];
  
        let cgpa = CgpaCalc(marks, n);
  
        document.write(
            "CGPA = " + cgpa + "<br/>");
        document.write(
            "CGPA Percentage = " + (cgpa * 9.5).toFixed(2));
 
       
// Task 3: Simple Programs todo for Condition , Looping and Arrays

//Making A Triangle
let triangle = ‘#’ ;
do { (triangle + triangle);
} while (triangle.length !== 7);
console.log(triangle);



//write a code to count the elements in the array . Don’t use length property
Declare an empty array;
var my array=[11,22,33,44,55]
function addvalue(arr,value){
    arr.push(value)
    return..
}
console.log(addvalue([11,22,33,44,55]));


//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let food=[hyderabhad briyani,masaladosa,uttapam,idli,vada,upma,appam,rasam,sambar,payasam,chicken65,chickenchentinadu,curdrice,chickencurry,kerala prawncurry,cocounut chunty,fish molee,lemonrice,thali,southindian filtercoffee,];


//Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
let foods=[hyderabhad briyani,masaladosa,uttapam,idli,vada,upma,appam,rasam,sambar,payasam,chicken65,chickenchentinadu,curdrice,chickencurry,kerala prawncurry,cocounut chunty,fish molee,lemonrice,thali,southindian filtercoffee,];
];
let length =  foods.length;
const foods = foods.slice(5);


