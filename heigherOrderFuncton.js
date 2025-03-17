// // ------------this is hiegher order function-----------------------------------
// const hieghestOrder=n=>{
//     const hiegherOrder=m=>{
//         const hieghOrder=p=>{
//             const lowOrder=q=>{
//                 const leastOrder=r=>{
//                     return n+m+p+q
//                 }
//                 return leastOrder
//             }
//             return lowOrder
//         }
//         return hieghOrder
//     }
//     return hiegherOrder
// }
// console.log( hieghestOrder(10)(20)(30)(40)(50))

// // --calling back---------------------------------------------------------
// const callback=(n)=>{
//     return n**3
// }
// const otherFunc=function(callback,a){
//     return callback(a)*a
// }
// console.log(otherFunc(callback,4))

// --setting time -------------------------------------------------------------

// function saysHellow(){
//     let name= "Leta Kasahun"
//     console.log(`I am ${name} Welcome nice tomeet you!`)}
//   setInterval(saysHellow,1000)  
//   setTimeout(saysHellow,3000)
  

// ---for each  that are applied on the array-----------------------------------------
// let sum=0
// const arr=[12,32,54,76,88,28]
// arr.forEach(num=>{
// sum+=num

// }
// )
// console.log(sum)

// let newarr=[]
// const arr=["ethiopia","Japan","Djibouty","Israel"]
// arr.forEach(m=>{
//     newarr.push(m.toUpperCase())
// })
// console.log(newarr)
// arr.forEach(m=>console.log(m.toUpperCase()))


// // map------------------------------------------------------------
// const number=[10,4,5,6,7,8,9]
// const newModifyied=number.map(m=>(m**2+5))
// console.log(newModifyied)


// --filtering to filter the give array as it fillfulling the given condition
// const numbers=[12,34,56,78,67,55,33,22,88,70]
// const filterd=numbers.filter(m=>m%2==0)
// console.log(filterd)
// const country=["Ethiopia","Eritrea","Sudan","Kenya","Somalia","Tanzania"]
// const filtered=country.filter(n=>n.length==7)
// console.log(filtered)

// const scores = [
//     { name: 'Asabeneh', score: 95 },
//      { name: 'Lidiya', score: 98 },
//     { name: 'Mathias', score: 80 },
//     { name: 'Elias', score: 50 },
//     { name: 'Martha', score: 85 },
//     { name: 'John', score: 100 },
//   ]
  
//   const passed=scores.filter(scor=>score.score>=90)
//   console.log(passed)

// // sorting numbers---------acendng order------------------------------------------------------------
// const numbers=[22,12,34,23.5,67,89,87,5,90]
// console.log(numbers.sort())
// const sorted=numbers.sort(function(a,b){
//     return a-b
// })
// console.log(sorted)
// // ?sorting in decending order--------------------------------------------------
// const decend=numbers.sort(function(a,b){return b-a})
// // console.log(decend)

// // ======---Exercise--======================================================
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand','Ethiopia','Eritrea']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]
// // countries.forEach(country=>console.log(country))
// names.forEach(name=>console.log(name))
// numbers.forEach(number=>console.log(number))
// const countryUpper=countries.map(country=>country.toUpperCase())
// console.log(countryUpper)
// const square=numbers.map(number=>number**2)
// console.log(square)
// const productCPrice=products.map((item)=>{
//     const price=(item.price===' '|| item.price==='')? 'price is not availaible':item.price
//     return `${item.product} : ${price}`
// })
// console.log(productCPrice)

// --filtering-------------------------------------------------------------------
// const countryLand=countries.filter(country=>(country.includes('land'||'Land')))
// console.log(countryLand)
// const countryOf6Letter=countries.filter(country=>country.length >= 6)
// console.log(countryOf6Letter)

// const contryStartswithE=countries.filter(country=>country[0] == "E")
// console.log(contryStartswithE)

// /--reduce to calculte sum, total ,products , single value-----------------------------------
// const sum=numbers.reduce((acc,cur)=>acc+cur, 0)
// console.log(sum)
// const priceCollection=products.filter(pric=>{
//     if(pric.price != ''|| pric.price!=' ')
//     return pric.price
//     })
// console.log(priceCollection)
// // const totalPrice=products.reduce((total,pric)=>)
