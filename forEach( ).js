// forEach() :it is the higher order function with takes function as an argument
const users = [
    {
      id: 1,
      name: "Tony Stark",
      gender: "Male",
      age: 50,
      isAvenger: true,
      tags: ["Human", "Inteliigent"],
    },
    {
      id: 2,
      name: "Steve Rogers",
      gender: "Male",
      age: 110,
      isAvenger: true,
      tags: ["SuperHuman", "Inteliigent"],
    },
    {
      id: 3,
      name: "Natasha Romonova",
      gender: "Female",
      age: 32,
      isAvenger: true,
      tags: ["Human", "Spy"],
    },
    {
      id: 4,
      name: "Peter Parker",
      gender: "Male",
      age: 24,
      isAvenger: false,
      tags: ["SuperHuman", "Super Strength"],
    },
    {
      id: 5,
      name: "Steven Stranger",
      gender: "Male",
      age: 40,
      isAvenger: false,
      tags: ["Doctor", "Magic"],
    },
    {
      id: 6,
      name: "Thor Odinson",
      gender: "Male",
      age: 1500,
      isAvenger: true,
      tags: ["Demigod", "Mjonir"],
    },
    {
      id: 7,
      name: "Captain Marvel",
      gender: "Female",
      age: 140,
      isAvenger: true,
      tags: ["Super Strength", "Flight"],
    },
];

let numbers=[12,11,10,9,8,7,6,5,4,3,2,1,0]
// passing normal functionn as an argument
// numbers.forEach(
//     function (number) {
//       console.log(numbers);
//     } 
// );
  // console.log(numbers);

// passing arrow function as an argument
// numbers.forEach(
//     (number)=>{
//         console.log(number);
//     }
// );

// Anonymous Function 
// Immeidiatley Invoked Function Expressionn(IIFE)

// Folllowing are the problem statement 

// 1) Print All the User Name Only with their index number
// users.forEach(
//     (user,index)=>{
//         console.log(index,user.name);
//     }
// );

// 2)Print All the tags only
// users.forEach(
//     (user)=>{
//         console.log(user.tags);
//     }
// );
// users.forEach(
//     (user) => console.log(user.tags)
// );

// 2) Create a new array having only users name
// Method 1
// let userName=[];
// for(let i=0;i<users.length;i++){
//     // userName.push(users[i].name);
//     userName.push(
//         {
//             name:users[i].name,
//             age:users[i].age,
//         }
//     )
// }
// console.log(userName)
// console.table(userName);


// Method2
// let userName=[];
// users.forEach(
//     (user)=>{
//         userName.push(
//             {
//                 name:user.name,
//                 age:user.age
//             }
//         )
        
//     }
// )
// console.log(userName)