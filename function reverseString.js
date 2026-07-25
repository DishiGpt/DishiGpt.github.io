function removeDuplicates(arr){
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(res.indexOf(arr[i])===-1){
            res.push(arr[i]);
        }
    }
    return res;
    
}
let arr=[1,1,2,3,4,5,5];
console.log("the reversed string is :"+removeDuplicates(arr));