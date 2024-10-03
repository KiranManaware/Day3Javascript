// map() :it is the higher order function with takes function as an argument
// and it is also used to add elements in the array

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

// const ages = users.map(
//     (user)=> user.age
// )
// console.log(ages);

// Create a new array having only male avengers
const males=users.filter(
    (user)=>{
        if(user.gender==="Male"){
            return true;
        }
    }
)
.map(
    (male)=>male.age
)
console.table(males);
