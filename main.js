// filter() :it is the higher order function with takes function as an argument
// and it is also used to add elements in the array only if the given condition is true and all the data of that particular index
console.log("filter() :it is the higher order function with takes function as an argument and it is also used to add elements in the array only if the given condition is true and all the data of that particular index");
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

// Create a new array having only male avengers
console.log("Create a new array having only male avengers");
const males=users.filter(
    (user)=>{
        if(user.gender==="Male"){
            return true;
        }
    }
)
console.table(males);  //this add all tha data of the particular male index


// // filter() :it is the higher order function with takes function as an argument
// and it is also used to add elements in the array only if the given condition is true and all the data of that paarticular index
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

// Create a new array having only male avengers
// const males=users.filter(
//     (user)=>{
//         if(user.gender==="Male"){
//             return true;
//         }
//     }
// )
// console.table(males);  //this add all tha data of the particular male index

//To add  only the name of the male index  we apply map method after filter method
// const males=users.filter(
//     (user)=>{
//         if(user.gender==="Male"){
//             return true;
//         }
//     }
// ).map(
//     (male)=>male.name
// )
// console.table(males);

// Create a new array having age less tham 50

// const newages=users.filter(
//     (nage)=>{
//         if(nage.age<50){
//             return true;
//         }
//     }
// ).map(
//     (nage)=>nage.age
// );

const newage=users
    .filter((nage)=>nage.age<50)
    .map((nage)=>nage.name);
console.table(newage);


// map() :it is the higher order function with takes function as an argument
// and it is also used to add elements in the array



// const ages = users.map(
//     (user)=> user.age
// )
// console.log(ages);

// Create a new array having only male avengers
const males2=users.filter(
    (user)=>{
        if(user.gender==="Male"){
            return true;
        }
    }
)
.map(
    (male)=>male.age
)
console.table(males2);


console.log("Write a function to sort the given array ");
// Write a function to sort the given array 
let number=[13,10,9,7,8,6,11,4,3,2,1,12]
console.log(number);
for(let i=0;i<number.length;i++){
    let j=0;
    while(i>j){
        if(number[i]>number[j]) j++;
        else{
            let temp=number[i];
            number[i]=number[j];
            number[j]=temp;
        }
    }
}
console.log(number);



