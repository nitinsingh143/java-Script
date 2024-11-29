let ar=[23,4,5,67,89,"hii",90,9,89]
let len = ar.length
for(i=0;i<len;i++)
{
    if(typeof ar[i]=="number"){
        ar[i]*=ar[i]
    }
    else if(typeof ar[i]=="string"){
ar[i]=ar[i].toUpperCase()

    }
}
console.log(ar);
