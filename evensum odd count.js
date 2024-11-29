// let number=[23,22,55,66,78,77,90,76,55,52,34,33,44,80,20,21,27]
// let len=number.length
// let arreven=[]
// let arrodd=[]
// for(i=0;i<len;i++){
//     if(number[i]%2==0){
//         arreven.push(number[i]*=number[i])
//     }
//     else{
//         arrodd.push(number[i])
//     }
// }
// console.log(arreven,arrodd)

let number=[23,22,55,66,78,77,90,76,55,52,34,33,44,80,20,21,27]
let even=0
let odd=0
for(i=0;i<number.length;i++){
    if(number[i]%2==0){
        even++
    }
    else{
        odd++
    }
}
console.log("total even number is",even);
console.log("total odd number is",odd);



