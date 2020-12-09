console.log("Hello Arrays")
/* Arrays use [] objects use {} */

let myGroupObject = {
    student1:   "James",
    student2:   "Nick", 
    student3:   "Maria",
    student4:   "Eleni"
    
}


/* Arrays               vs              objects 
-Have numeric keys by default           -Have a string key
from 0-end                              -use {}
-Arays use []                           -reached by the key only
-numbers act as keys for arrays
*/
console.log(myGroupObject)
let myGroupArray = [
    "James",
    "Nick",
    "Maria",
    "Eleni",
]
console.log(myGroupArray);

let change = prompt("Choose the 3rd name");
myGroupArray[1] = change


let mySecondArray = ["Porsche", "Audi", "Volkswagon"];

console.log(mySecondArray[2]);       //prints the 2nd value
mySecondArray[1] = "Mercedes"       //changes the 1st value
console.log(mySecondArray);

console.log(`Length of my array is: ${mySecondArray.length}`)

mySecondArray.push("Audi"); //this line will not influence the log on line 38 because it does not add to the origionbal declaration of the array 

console.log(mySecondArray)
console.log(`The new lenght of the array is ${mySecondArray.length}`)

mySecondArray.push("Mazda")                 //adds Mazda to the end
mySecondArray.unshift("Totota")             //Adds Toyota to the start
//create an array for 3 students with objects for name age and attendance





/* Solution */
let ourClass = [
    {                       //start of the object, includes name age and atendance as a child object
        name:"Nick",
        age:61, 
        attten:{
        Monday:true,
        Tuesday:true,
        Wednesday:true,
        Thursday:true,
        Friday:true}
                },
                {
                    name:"Maria",
                    age:61, 
                    attten:{
                    Monday:true,
                    Tuesday:true,
                    Wednesday:true,
                    Thursday:true,
                    Friday:true}
                            },
                            {
                                name:"Eleni",
                                age:61, 
                                attten:{
                                Monday:true,
                                Tuesday:true,
                                Wednesday:true,
                                Thursday:true,
                                Friday:true}
                                        }

            ]

            console.log(ourClass)
            
            ourClass ["1"] = prompt("What name would you like?")
            console.log(ourClass)