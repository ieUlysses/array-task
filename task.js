let classs=[]
console.log(classs);                                    // shows an empty array
let studentCount = parseInt(prompt('How many students would you create?'));     //parsint converts a string to a number because prompt always inless unspecified will return a string

for (let i = 0; i <= studentCount; i++) {                //does the counter have to start on 0 or 1?
    let pName = prompt(`Please give us a name`);
    let pAge = prompt(`Please give us an age`);
    let pLName = prompt(`Please give us a last name`);
    classs = [                                          //line 9 is the start of an array and line 24 closes it

        {
            name:`${pName}`,                           //this field does not need to be repeated as it is powered bythe for loop and stepped up each time with i++
            age:`${pAge}`,
            lname:`${pLName}`
        }
    
        /* {name:`${pName}`,
        age:`${pAge}`,
        lname:`${pLName}`},
    
        {name:`${pName}`,
        age:`${pAge}`,
        lname:`${pLName}`} */
    ]
    console.log(classs)
}    





/* 
origional code would not run because values were declared in a sibling scope which can only be read by the following lines being part of that sibling

classs = [                                          //line 9 is the start of an array and line 24 closes it

    {
        name:`${pName}`,                           //this field does not need to be repeated as it is powered bythe for loop and stepped up each time with i++
        age:`${pAge}`,
        lname:`${pLName}`
    }

    /* {name:`${pName}`,
    age:`${pAge}`,
    lname:`${pLName}`},

    {name:`${pName}`,
    age:`${pAge}`,
    lname:`${pLName}`} */ 