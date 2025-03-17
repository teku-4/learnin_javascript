// // ----------------------------------------------------------------------------------------
// const person ={
//     fname:"Leta",
//     lName:"Kasahun",
//     email:"leta@gmail.com",
//     fullName:function(){
//       return  this.fname + " " + this.lName
//     },

//     skills:["javascript","python","HTML","CSS"],
//     phoneNumber:"09876543234"
// }
// console.log(person)
// console.log(person.fullName())
// console.log(person['phoneNumber'])
// console.log(person.email)
// const student=Object.assign({},person)

// console.log(student.skills)
// const value=Object.values(student)
// console.log(value)
// const key= Object.keys(student)
// console.log(key)
// const keyValue= Object.entries(student)
// console.log(keyValue)
// for (let  data of keyValue){
//     console.log(data)
// }


// ======Execise================================================================
// --practice 1---------------------------------------------------------------------
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
//   --the person who has many skills------------------------------------------
// let mostSkilled=""
// let maxSkilss=0
// for(const [user,details] of Object.entries(users)){
//     if(details.skills.length > maxSkilss)
//     {
//         maxSkilss=details.skills.length;
//         mostSkilled=user
//     }
// }
// console.log(`the user who has most skill is ${mostSkilled} his skill is ${maxSkilss}`)
// // --the person who has above 50 point--------------------------------------------
// let hasPointAbove50=[]
// let count=0
// for(let [user,point] of Object.entries(users)){
//     if (point.points >=50){
//         count+=1
//         hasPointAbove50.push(user)
//     }
// }
// console.log(`the users who have above 50 point are ${hasPointAbove50} there are ${count} users`)

// --th users whose age is 20 
// let age20Users=[]
// let count=0
// for(const [user,ages] of Object.entries(users)){
//     if(ages.age==20){
//         age20Users.push(user)
//     count++}
// }
// console.log(`the users whose age is 20: ${age20Users} they are ${count} users`)


// // --identifying mern stack developer----------------------------------------------------
// let MERNstack=[]
// let technologies=['MongoDB', 'Express', 'React', 'Node']
// for (let [user, details] of Object.entries(users)){
//     if(details.skills.includes('MongoDB' && 'Express' && 'React' && 'React' && 'Node' )){
//         MERNstack.push(user)
//     }
// }
// console.log(`The mern stack developer users are: ${MERNstack} have skills ${technologies}`)
