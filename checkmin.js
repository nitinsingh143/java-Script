let arr=[10,34,56,4,67,3,56,87,2,98,33,12,7,42,108,200,89,100]
let len=arr.length
let min =arr[0]
for(i=0;i<len;i++)
{
    if(min>arr[i]){
        min=arr[i]
    }
}
console.log(min)