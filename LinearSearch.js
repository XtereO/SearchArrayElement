//LinearSearch
let LinearSearch=(x,l)=>{
    //Go through array and looking for our "x"
    for(let i=0;i<l.length;i++){
        if(x==l[i]){
            return i
        }
    }
    return false    
}

//Create ourList and Check LinearSearch
ourList=[3,54,12,523,64,57]
console.log(LinearSearch(56,ourList))//False
console.log(LinearSearch(12,ourList))//2