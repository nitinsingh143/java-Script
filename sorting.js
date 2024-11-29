let arr=[10,34,56,4,67,3,56,87,2,98,33,12,7,42,108,200,89,100]
let len=arr.length
for(i=0;i<len;i++){
    for(j=0;j<len;j++)
        if(arr[i]<arr[j]){
            let s=arr[i]
            arr[i]=arr[j]
            arr[j]=s
        }

}
console.log(arr)