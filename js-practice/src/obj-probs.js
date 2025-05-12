

// //gender count 

// const people = [
//     { name: 'Mary', gender: 'girl' },
//     { name: 'Paul', gender: 'boy' },
//     { name: 'John', gender: 'boy' },
//     { name: 'Lisa', gender: 'girl' },
//     { name: 'Bill', gender: 'boy' },
//     { name: 'Maklatura', gender: 'girl' },
//     { name: 'Sara', gender: 'girl' },
//   ];
// function gendreCount(arr){
//     let count = {}

  
//     for(let item of arr){
//         count[item.gender] = ( count[item.gender] || 0) + 1
//     }
//     console.log(count)
//     return count
// }

// const output = gendreCount(people);

// console.log(output.boy)






// deep clone obj



// function deepClone(obj){
    
//     if(obj === null || typeof obj !== "object"){
//        return obj
//     }

//     let clone =  Array.isArray(obj) ? [] : {}

//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             clone[key] = deepClone(obj[key])
//         }
//     }

//     return clone
// }


// const object = { a: 1, b: 2, c: { d: 3 }, e: 4 };
// const cloned = deepClone(object);
// console.log(cloned);



//groupBy Key



// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Carol', age: 25 },
//     { name: 'Dan', age: 30 }
//   ];


// function groupBy(arr , key){
//     let result = {}

//     for(let item of arr){
//         let groupKey = item[key]

//         if(result[groupKey]){
//             result[groupKey].push(item)
//         }
//         else{
//             result[groupKey] = [item]
//         }
//     }

//     return result
// }

// const output = groupBy(people , "age")

// console.log(output)





//flatten object 

function flattenObject(obj, prefix = '', result = {}) {
    for (let key in obj) {
      const newKey = prefix ? `${prefix}.${key}` : key;
  
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
    return result;
  }



const nested = {
    name: 'John',
    address: {
      city: 'New York',
      zip: {
        code: 10001,
        plus4: 1234
      }
    },
    contact: {
      email: 'john@example.com'
    }
  };
  
  console.log(flattenObject(nested));
  

