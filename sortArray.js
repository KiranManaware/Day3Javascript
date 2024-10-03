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