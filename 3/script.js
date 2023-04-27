const arr1 = getLength(['Ivan','Pavlo','Ira']) ;

const arr2 = getLength(['Oleksiy','Andriana']);

function getLength(arr){
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
        newArr[i] = arr[i].length;
        
    }
    return newArr;
}

console.log( arr1);
console.log( arr2);