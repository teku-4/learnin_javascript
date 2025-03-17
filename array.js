// -------------ARRAY---------------------------------------
// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// // Print the array and its length

// console.log('Numbers:', numbers)
// console.log('Number of numbers:', numbers.length)

// console.log('Fruits:', fruits)
// console.log('Number of fruits:', fruits.length)

// console.log('Vegetables:', vegetables)
// console.log('Number of vegetables:', vegetables.length)

// console.log('Animal products:', animalProducts)
// console.log('Number of animal products:', animalProducts.length)

// console.log('Web technologies:', webTechs)
// console.log('Number of web technologies:', webTechs.length)

// console.log('Countries:', countries)
// console.log('Number of countries:', countries.length)
// -------array with different data type-----------------------------------------------------
// const arrayColleciton=[
//     "Leta",
//     590,
//     true,
//     {"maths":90,"physics":86,"biology":84}

// ]
// console.log(arrayColleciton)
// let campany="Facebook, Google, Michrosoft, Netflix, Nasa, Oracle"
// let arrayFromString=campany.split(", ")
// console.log(arrayFromString)
// console.log(arrayFromString[1])
// console.log(arrayFromString[0,4])

// ---------------------------------------------
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
//   countries[1]="Afghanistan"
//   console.log(countries)
//   countries[1]="Djibouty"
//   console.log(countries[1,0,7])
//   console.log(countries.length)
//   console.log(countries.indexOf('Ethiopia'))
//   for (let i= 0; i <= countries.length;i++)
// {console.log(countries[i])}
// console.log(countries.indexOf("Oman"))
// // ----------------------------------------
// // ?includes to check the existance
// console.log(countries.includes("Erithrea"))
// --to string conversion ---------------------------------
// console.log(countries.toString())
// // -joining array----------------------------------------------
// let simpleJoin, joinWithHash, joinWithComma, joinWithBackSlash
// simpleJoin=countries.join()
// console.log(simpleJoin)
// joinWithHash=countries.join(" - ")
// joinWithComma=countries.join(" = ")
// joinWithBackSlash=countries.join("/ ")
// console.log(joinWithHash)
// console.log(joinWithComma)
// console.log(joinWithBackSlash)


// ---------splice-------------------------------------------
// (startingPosition,numberOfItemToBeRemove,numberOfItemToBeAdded)
// const arrayOfNumbers=[11,22,33,44,55,66,77,88,99,100]
// arrayOfNumbers.splice(2,3,10,20,30)
// console.log(arrayOfNumbers)
// // ------------------------------pushing and poping to add and remove from the end-------------------------------------------
// const fruits=['mango','apple','avocado','papaya']
// console.log(fruits)
// fruits.pop()
// console.log(fruits)
// fruits.push("banana")
// // console.log(fruits)
// // ----------------------------shifting and unshifting to add and remove fromthe beginning-------------------
// const arrayOfAnimal=["cat","dog","caw","ox","hourse","got"]
// console.log(arrayOfAnimal)
// arrayOfAnimal.shift()
// console.log(arrayOfAnimal)
// arrayOfAnimal.unshift("Camel")
// console.log(arrayOfAnimal)


// // -------------------revesing and sorting----------------------------
// const webTechs="HTML, CSS, JS, MONGODB, NODEJS, EXPRESS, REACT"
// let createdArray=webTechs.split(", ")
// createdArray.reverse()
// console.log(createdArray)
// createdArray.sort()

// console.log(createdArray)
// // decceding order
// createdArray.reverse()
// console.log(createdArray)
// --------------------------------aceding and deceding numbers-----------------------
// const numbers=[1,2,3,7,6,5,8,-1,9,0]
// // numbers.reverse()/
// console.log(numbers)
// numbers.sort()
// console.log(numbers)


//=======exercise====================================================
// ---1shopinigcart---------------------------------------------------
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// console.log(`Normal ${shoppingCart}`)
// shoppingCart.unshift("Meat")
// console.log(`after adding at the begning:\n ${shoppingCart}`)
// shoppingCart.push("Sugar")
// console.log(`afteradding at the end\n ${shoppingCart}`)
// shoppingCart.splice(4,1)
// console.log(`after removing the honey:\n ${shoppingCart}`)
// shoppingCart[3]="Green Tea"
// console.log(`after modification \n ${shoppingCart}`)
// --2 check the existance if  not addd-------------------------------------------
// const webTechs=["css","html","javascript"]
// let indexCheck=webTechs.indexOf("Sass")
// if (indexCheck==-1)
// {
//     webTechs.push("Sass")
//     console.log(webTechs)
// }
// else
// {
//     console.log("Sass is already xistsin this array")

// }
// --3 array concatnation----------------------------------------------------------
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// const fullStack=[frontEnd,backEnd]

// console.log(fullStack)

// --4 sorting numbers------------------------------------------------
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// ages.sort()
// console.log(ages)
// const max = ages[ages.length - 1]
// const min = ages[0]
// const range = max - min
// console.log(`max = ${max}, min ${min}, range = ${range}`)
