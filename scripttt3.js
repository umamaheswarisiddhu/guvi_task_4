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




//write a code to count the elements in the array . Don’t use length property



//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let food=[hyderabhad briyani,masaladosa,uttapam,idli,vada,upma,appam,rasam,sambar,payasam,chicken65,chickenchentinadu,curdrice,chickencurry,kerala prawncurry,cocounut chunty,fish molee,lemonrice,thali,southindian filtercoffee,];


//Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
let foods=[hyderabhad briyani,masaladosa,uttapam,idli,vada,upma,appam,rasam,sambar,payasam,chicken65,chickenchentinadu,curdrice,chickencurry,kerala prawncurry,cocounut chunty,fish molee,lemonrice,thali,southindian filtercoffee,];
];
let length =  foods.length;
const foods = foods.slice(5);

Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friends = [
“Mari”,
“MaryJane”,
“CaptianAmerica”,
“Munnabai”,
“Jeff”,
“AAK chandran”
];
let friends=friends[0,1,2,3]
function dataHandling friends("ram","kumar","siddhu","priya",){
for (var i = 0; i < input.length; i++) {

}
}
dataHandling(friends);

//Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
const friends = [
“Mari”,
“MaryJane”,
“CaptianAmerica”,
“Munnabai”,
“Jeff”,
“AAK chandran”
];


const friends = [“Mari”,
    “MaryJane”,
    “CaptianAmerica”,
    “Munnabai”,
    “Jeff”,
    “AAK chandran”];
let text = "";
for (let i = 0; i < friends.length; i++) {
  text += friends[0,2];
}
console.log("text");

We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends1 = [
“Mari”,
“MaryJane”,
“CaptianAmerica”,
“Munnabai”,
“Jeff”,
“AAK chandran”
];
var friends2 = [
“Gabbar”,
“Rajinikanth”,
“Mass”,
“Spiderman”,
“Jeff
];


function mergeSortdArray(var friend1,var friend2){
	for(var i=0;i<var friend2.length;i++){
		var friend1.push(var friend2[i]);
	}
	//console.log(var friend1);
for(i=0;i<var friend1.length;i++)
    {
        for(j=i+1;j<var friend1.length;j++)
        {
            if(var friend1[i]>var friend1[j])
            {
                temp=var friend1[i];
                var friend1[i]=var friend1[j];
                var friend1[j]=temp;
            }
        }
    }
    return var friend1;
}
console.log(mergeSortedArray([“Mari”,
    “MaryJane”,
    “CaptianAmerica”,
    “Munnabai”,
    “Jeff”,
    “AAK chandran”],[“Gabbar”,
        “Rajinikanth”,
        “Mass”,
        “Spiderman”,
        “Jeff]));
      
    //    Get the first item, the middle item and the last item of the array
    let s=[3, 2, 3, 4, 5]; 
  function Gfg() {
 // Storing the first item in a variable 
 let f=s[0];
 //sorting the middle item in the variable
  let M=s[s.length-1]; 
 // Storing the last item 
 let l=s[s.length-1]; 
            
// Printing output to screen
 console.log("First element is "+ f);
console.log("middle element is "+ M); 
console.log("Last element is "+ l); 
 } 
 Gfg(); // Calling the function


2. Add your name to the end of the friends array, and add another name to beginning
 const friend arr  = ['kanna', 'devi', 'ashok'];

 arr.push('ramu', 'kirithi');
        
console.log(arr); // ['kanna', 'devi', 'ashok', 'ramu', 'kirithi']
const friend arr  = ['kanna', 'devi', 'ashok'];
arr.unshift(seetha);
console.log(arr); //['seetha','kanna','devi','ashok',]    

3. Add Mr or Ms to the names in the friends array.
var array = [ramu,komu,sam,raj];
array.push(Mr,Ms)
console.log(array); // [ramu,komu,sam,raj,Mr,Ms] 

4. Concat all the names the friends array and return as comma “,” seperated string.
var friends = ["krish", "kumar", "pavi",];
var friends = friends.join(","); //"krish","kumar","pavi"   

5. Find the friends names who has letter ‘a’ and return the list.
function friend(friends){
    return friends.filter(el => el === a);
  }

 6.Find the avg length of all the friends names. Get the individual length of the names and do the avg
  arr = [asha, pooja, gowri, sindhu]                   
  avg = arr.join('').length / arr.length      
  console.log(avg) 

