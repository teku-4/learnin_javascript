// -------for loop-----------------------------------------------
// for (let i =1; i<=10; i++)
// {
//     console.log(`${i} *  ${i} = ${i*i}`)
// }
// const countries = ["Ethiopia", "Djibouti", "Kenya", "Somalia", "Australia"]
// var  newArray=[]
// for (let i = 0; i < countries.length; i++)
// {
// newArray.push(countries[i].toUpperCase())
// }
// console.log(newArray)

// --------adding using lists--------------------
// const numbers = [10,20,30,40,50,60,70,80,90,100]
// let sum=0
// for(let i = 0; i < numbers.length; i++)
// {
//     sum += numbers[i];
// }
// console.log(sum)
// let newnumbers=[]
// for(let i = 0; i < numbers.length; i++)
// {
//     newnumbers.push(numbers[i] * numbers[i])
// }
// console.log(newnumbers)

// let i = 10
// while (i >= 0)
// {
//     console.log(i)
//     i--
// }

// do while loops ---------------------------------------
// let n = 7, fact = 1;
// do{
//    fact*= n
//    n-- 
// }
// while (n>0)
// console.log(`${7}! = ${fact}`)    


// ---for of loop ------------------------------------------
// const technologies=["html","css", "bootstrap", "java", "javascript"]
// let updatedTechnologies=[]
// for (let tech of technologies)
// {
//     updatedTechnologies.push(tech.toUpperCase())
// }
// console.log(updatedTechnologies)


// ============Exercise=================================================
// --1 sum of even and odd----------------------------------------------
let sumEven=0, sumOdd=0;
for (let i = 0; i <= 100; i++ ){
    if (i % 2 ==0)
    {
        sumEven+=i
    }
    else{
        sumOdd+=i
    }
};
console.log|(` ${sumEven} and  ${sumOdd}`)
