var object1 ={
    name: "person1",
    age:5
};
var object2 ={
    age:5
    name: "person1",
};
JSON.stringify(object1) === JSON.stringify(object2)
//false

_.isEqual(object1,object2)
//true
console.log(object);