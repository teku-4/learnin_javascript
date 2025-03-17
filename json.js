// ----json in javascript-------------------------------------------
// // ---convertint tojson by using stringfy----------------------------------------------
// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: [ 'HTML','CSS','JavaScript','Redux', 'MongoDB', 'Express', 'React','Node' ],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML','CSS','JavaScript','MongoDB','Express','React','Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }
//   const jsonText=JSON.stringify(users, null, 4)
//   console.log(jsonText)
//   ---converting fromjson to javascript objects--------------------------------------
// const textJson=`{
//     "fristName":"Leta",
//     "lastname":"Kasahun",
//     "Email":"letakasahun2@gmail.com",
//     "skills":["SQL","python","C++","javascript","css","bootstrap"]
// }`
// const javascriptObjects=JSON.parse(textJson, null, 4)
// console.log(javascriptObjects)
// ---converting to json with array---------------------------------------------------
// const practiceJson={
//     fristName: 'Leta',
//     lastname: 'Kasahun',
//     age:22,
//     Email: 'letakasahun2@gmail.com',
//     skills: [ 'SQL', 'python', 'C++', 'javascript', 'css', 'bootstrap' ],
//     nationality:"Ethiopia",
//     language:["Amharic","English","Oromiffa"]
//   }
//   const partofThem=JSON.stringify(practiceJson,['fristName','lastname','nationality'], null,4)
//   console.log(partofThem)
//   const stringfyingAge=JSON.stringify(practiceJson.age,null,4)
//   console.log(stringfyingAge)


