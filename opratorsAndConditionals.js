// --------------------------------------------------------------
// boolean oprator
// let x,y;
// x=34
// y=78
// console.log(x>y)
// let isRaining=true
// if (isRaining){
//     console.log("take an unberella")
// }
// else{
//     console.log("I do not take unberella")
// }
// let isTrue=-2
// if(isTrue)
// {
//     console.log("that is true")
// }
// else{
//     console.log("that is false")
// }



// -----------------------------------------------------------------

// arthimetic oprator
// var number1,number2,result;
//  number1=Number(prompt("enter the number"))
//  number2=Number(prompt("enter the the second number"))
// const choice=prompt("enter your option(+,-,*, **,/,%) for oprationonnumbers and (0) to exit")

//     switch(choice)

//     {
//         case "+":

//             result=number1 + number2
//             console.log(`${number1} + ${number2} = ${result}`)
//             break;
        
        
//         case "-":

//             result=number1 - number2
//             console.log(`${number1} - ${number2} = ${result}`)
//             break;
            
//         case "*":

//             result=number1 * number2
//             console.log(`${number1} * ${number2}= ${result}`)
//             break;
            
//         case "/":

//             result=number1 / number2
//             console.log(`${number1} / ${number2}= ${result}`)
//             break;
            
//         case "**":

//             result=number1 ** number2
//             console.log(`${number1} ** ${number2}= ${result}`)
//             break;
            
//         case "%":

//             result=number1 % number2
//             console.log(`${number1} % ${number2}= ${result}`)
//             break;
      

//     }


// ---------------------------------------------------------
// // comparsion opratotors
// console.log(2=="2")//equal in value
// console.log(2==="2")//equalexactly
// console.log(0===false)
// console.log(0==false)
// console.log(-2==true)
// console.log(-2===true)
// console.log(0==" ")
// console.log(0===" ")
// console.log(NaN===NaN)
// console.log('mango'.length == 'avocado'.length)\


// ---------------------------------------------------------------------
// // logical oprators
// let isLightOn=true
// console.log(!(isLightOn))
// let isDark=true
// console.log(isLightOn && isDark)
// let isDay=true
// console.log(isLightOn|| isDay)


// ---------------------------------------------------------------
// autho increament
// let count=10
// console.log(`normal is ${count}`)
// console.log("pre increament")
// console.log(++count)
// console.log(count)
// console.log("post increament")
// console.log(count++)
// console.log(count)

// console.log("pre decreament")
// console.log(--count)
// console.log(count)
// console.log("post decreament")
// console.log(count--)
// console.log(count)


// ---------------------------------------------------------
// // ternery oprator 
// const mark=Number(prompt("enter the mark"))
// if (mark>=0 && mark<=100)
// {
// ( mark>=90)? console.log("A+"):

// ( mark>=85)? console.log("A"):

// ( mark>=80)? console.log("A-"):

// ( mark>=75)? console.log("B+"):

// ( mark>=70)? console.log("B"):

// ( mark>=65)? console.log("B-"):

// ( mark>=60)? console.log("C+"):

// ( mark>=50)? console.log("C"):

// ( mark>=45)? console.log("C-"):

// ( mark>=40)? console.log("D"):console.log("F")
// }
// else{
//     console.log("invalid input")
// }


// ---------------------------------------------------------------------
// // confirm
// const agree=confirm("Are you sure to delete this ")
// console.log(agree)

// -----------------------------------------------------------------
// const Now=new Date()
// console.log(Now.getDate())
// console.log(Now.getDay())
// console.log(Now.getMonth())
// console.log(Now.getFullYear())
// console.log(Now.getHours())

// ==========Exercise=================================================================
// --1 display date ofto day--------------------------------
// let second,minut, hour, day, date,month, year;
// second=Now.getSeconds()
// minut=Now.getMinutes()
// hour=Now.getHours()
// day=Now.getDay()
// date=Now.getDate()
// month=Now.getMonth()+1
// year=Now.getFullYear()
// console.log(`${year}-${month}-${date}-${day}-${hour}-${minut}-${second}`)

// // --2 calculate the payment per hour-----------------------------
// let hour, rate,payement;
// hour= Number(prompt("Enter the hour you work per day"))
// rate =Number(prompt("Enter the rate of payement per hour"))
// payement=rate*hour;
// console.log(`your payment of ${hour} hour is ${payement} per hour`)

// --3 check length of name------------------------------------
// let username=prompt("enter your name")

// if(username.length>7)
//     {console.log("your name is too long")}
// else
// {
//     console.log("yourname is short")
// }

// --4 check year to be driver-------------------------------------
// const Now = new Date()
// year =Now.getFullYear()
// birthdate=Number(prompt("enter your birth date"))
// userAge=year-birthdate
// if (userAge>=18)
// {
//     console.log(`your age is ${userAge} so you are old enough to drive`)
// }
// else

// {
//     console.log(`yourage is ${userAge} so you are too young to drive. please wait untill your age is reach 18`)
// }



// --6 checking seoson------------------------------------------------------------------------------



// const month=prompt("Enter the month").toLowerCase()
// if (month =="september" ||  month=="october"  || month=="november")
//     {
    
//         console.log(`since the month is ${month} the seson is AUTUMN`) 
// }
    
        
//    else if (month=="december" || month == "january" || month== "feburary")
//         {console.log(`since the month is ${month} the seson is WINTER`) 
//         }
        
//    else if  (month == "march" || month == "april" ||month == "may")
//         {console.log(`since the month is ${month} the seson is SPRING`) 
//         }

//     else if  ( month == "june" ||month == "july" || month== "august")
//     {
//         console.log(`since the month is ${month} the seson is SUMMMERY`)
    
//     }
//   else{
//     console.log("there is no such month in this calender")
//   }


