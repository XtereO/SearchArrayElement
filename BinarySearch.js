//BinarySearch
function BinarySearch(l,x,start,finish){
    let mid=Math.floor((start+finish)/2);
    //RecursionKey
    if(l[mid]==x){return mid}
    if(start>=finish){return false}
    
    //Recursion
    if(l[mid]>x){return BinarySearch(l,x,start,mid-1)}
    if(l[mid]<x){return BinarySearch(l,x,mid+1,finish)}
}

//Create ourList and Check BinarySearch
let ourList=[3,53,123,533,4344,12223,434343];
console.log(BinarySearch(ourList,123,0,ourList.length-1));
console.log(BinarySearch(ourList,23,0,ourList.length-1));
