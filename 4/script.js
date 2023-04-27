const arr1 = removeDuplicates(['html','css','html','js'])
const arr2 = removeDuplicates(['html','css','js','html','js','python','js','scss'])


function removeDuplicates(arr){
    for (let i = 0; i < arr.length; i++){
       let check = arr[i]
        while(arr.includes(check, i+1)){
            arr.splice(arr.lastIndexOf(check), 1)
        }
    }
    return arr;
}

console.log(arr1);
console.log(arr2);