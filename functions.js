// // ----functions introduction---------------------------------------------------
// function showMessage(){
//     console.log("helllo Every one this javascript tutorial")
// }
// showMessage()
// function displayMyName(){
//     console.log("My name is Leta")
// }
// displayMyName()
// // ----function expression--------------------------------------------------
// let func=function(a,b){
//     return a + b;
// }
// console.log(func)
// // ---------------arrow function-----------------------------------------------
// let pro=(a,b)=> a*b
// console.log(pro(20,60))


// -------------------------------------------------------------

// let wieght=0
// function calculateWeight(gravity,mass){
//     if (gravity== 10)
//         {
//         wieght = gravity *  mass
//         console.log(`your gravity at earth is ${wieght}`)
//     }
//     else if (gravity==1.67)
//     {
//         wieght = gravity * mass
//         console.log(`your gravity at the moon is ${wieght}`)
//     }
// }
// const gravity= Number(prompt("enter the gravity at earth or at th moon"))
// let mass = Number(prompt("Enter your mass to calculate your weight"))
// calculateWeight(gravity, mass)

// ----------caculates-----------------------------------------
// const circleArea= (raduis)=>
//     {
//         return Math.PI*(raduis**2)
//     }
    
    
//     let raduis=Number(prompt("enter the raduis of circle"))
   
//     console.log(`the area of circle is ${circleArea(raduis)}`)


// // --Functionwith unlimited parameters-----------------------------------------------
// function calculateMean(){
//     let sum=0
//     for(let num of arguments){
//      sum += num
//     }
//     return (sum/arguments.length)
// }
// console.log(calculateMean(12,33,43,56))
// console.log(calculateMean(10,10,20,20,20))


// ------unlimited function with arrow--------------------------------------------
// const sumAll=(...args)=>{
//     let sum=0
//     for (let num of args)
//     {
//         sum+=num
//     }
//     return sum
// }
// console.log(sumAll(12,13,14))
// console.log(sumAll(45,67,89,90,16,56))


// ----------anonemous function______________________________________________________
// const square=function(n){
//     return n**2
// }
// console.log(square(30))

// const cube=n=>{
//     return n**3
// }
// console.log(cube(10))

// ----chaging on the given array------------------------------------------------
// const changetoUpperCase=array=>
// {   let newarr=[]
//     for(let arr of array){
//     newarr.push(arr.toUpperCase())
//     }
//     return newarr
// }
// let arras=['ethiopia','somalia','erithrea']
// console.log(changetoUpperCase(arras))


// ========_________Exercise______________________----------------------------------------------
// --1 bodymax index calculator--------------------------------------------------
// let height, mass
// height = Number(prompt("Entaer your height"))
// mass= Number(prompt("Enter your mass"))
// const calculateBodyMax=(height,mass)=>{
//     let BMI=mass/(height**2)
//     if (BMI < 18.5 && BMI > 0)
//     {
//         return `You are underwieght your BMI is ${BMI}`
//     }
//   else if(BMI>=18.5 && BMI <= 24.9)
//   {
//     return `You are normal weight your BMI is ${BMI}`
//   }
//   else if(BMI >= 25 && BMI <= 29.9)
//   {
//     return `You are overweight your BMI is ${BMI}`
//   }
//   else if(BMI >= 30){
//     return `You are obese your BMI is ${BMI}`
//   }
//   else{
//     return "there is mixtek because bodymax index must be positive"
//   }
// }
// let x=calculateBodyMax(height, mass)
// console.log(x)

// --2 random userid and pasword genrators---------------------------------------------
// const generatesUseId=(length=8)=>{
//     const chars="ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//     let userId='';
//     for (let i = 0; i < 8; i++)
//     {
//         userId+=chars.charAt(Math.floor(Math.random()*chars.length))
//     }
//     return userId
// } 
// console.log(generatesUseId())
const generatesUserPassword=(length=10)=>{
   let chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!$%^&|\/?'
   let userPassword='';
   for(let i = 0; i < length; i++){
    userPassword+=chars.charAt(Math.floor(Math.random()*chars.length))
   }
   return userPassword
}
console.log(`user password: ${generatesUserPassword()}`)
