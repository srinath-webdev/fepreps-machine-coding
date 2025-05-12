//flatten nested array 

// function flatArray(arr){
//     let result = []

//     for(let num of arr){
//         if(Array.isArray(num)){
//           result.push(...flatArray(num))
//         }
//         else{
//             result.push(num)
//         }
//     }
//     return result
// }

// console.log(flatArray([[1, [2, 3, [4, 5]], 6, [[7], [8, 9]]]]))







//Max word length in an array

// function maxWordLength(words) {

//     let maxWord = words[0]

//     for (let word of words){
//         let currentWord = word;

//         if(currentWord.length > maxWord.length){
//             maxWord = currentWord
//         }
//     }

//     return maxWord.length
// }

// const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];


// console.log(maxWordLength(words))






// transpose 2d matrix 

// function transposeMatrix(matrix){

//     let rows =  matrix.length

//     let col = matrix[0].length

//     let transposed =  Array.from({length : rows}).map(() => Array(col).fill(0)) //Array.from({ length: 3 }) // ➡️ [undefined, undefined, undefined]

//     for (let i=0 ; i< rows ; i++){
//         for(let j=0 ; j < col ; j++){
//             transposed[j][i]   =  matrix[i][j]
//         }
//     }

//     return transposed
// }

// console.log(transposeMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]))






// get last n elements


// function lastNelements(arr , t) {
//     let n = arr.length ; 

//     let start =  arr.length - t

//     let result = []


//     for(let i = start ; i < n ;i++){
//         result.push(arr[i])
//     }

//     return result

// }

// console.log(lastNelements([1, 2, 3, 4, 5, 6] , 3))






// print duplicate element in arr 


// function printDuplicates(arr){

//     let seen = new Set()
//     let duplicate = new Set()

//     for (let num of arr){
//         if(seen.has(num)){
//             duplicate.add(num)
//         }
//         else{
//             seen.add(num)
//         }
//     }

//     return [...duplicate]
// }


// console.log(printDuplicates([1,2,3,4,1,2,3,]))








//Calculate the `average` score of students who `scored above 90`


// const students = [
//     { name: 'John', score: 85 },
//     { name: 'Sarah', score: 92 },
//     { name: 'Michael', score: 88 },
//     { name: 'Emma', score: 95 },
//     { name: 'Daniel', score: 90 },
//   ];


//   function calculateAvg(std){
//     let sum = 0 ;
//     let count = 0 ; 

//     for(let i=0 ; i < std.length ; i++){
//         let student = std[i]

//         if(student.score > 90){
//             sum += student.score
//             count++
//         }
//     }
//     if(count === 0) return -1

//     return (sum / count)
//   }


//   console.log(calculateAvg(students))







//shuffle an array 

// function shuffleArr(arr){

//     for (let i =0  ; i < arr.length ; i++){


//         let j = i + Math.floor(Math.random() * (arr.length - i));

//         [arr[i] , arr[j]] = [arr[j] , arr[i]]
//     }
// }


// const arr = [1, 2, 3, 4];

// shuffleArr(arr)

// console.log(arr)









// moveZeros end  -  lastNonZeroIndex to keep track


// function moveZeros(arr){
//     let lastNonZeroIndex = 0 


//     for (let i =0 ; i < arr.length  ; i++){
//         if(arr[i] !== 0){
//             [arr[lastNonZeroIndex] , arr[i]] = [arr[i] , arr[lastNonZeroIndex]] ;
//             lastNonZeroIndex++
//         }
//     }

//     return arr
// }

// console.log(moveZeros([1,0,3,0,5]))




//find the missing number 



// function findMissingNum(arr){
//     let seen = new Set (arr)

//     let result = 0

//     for (let i = 0; i <= arr.length; i++) {
//         if(!seen.has(i)){
//             result.push(i)
//         }
//     }

//     return result  
// }

// console.log(findMissingNum([9, 6, 4, 2, 5, 7, 0, 1]))







//majarity element   - boyer -moore algorithm 
//if count is 0 -> set new candidate -> nex ele same as candidate - > count++ else count-- 


// function findMajority(arr){
//     let count = 0 

//     let candidate = null;

//     for (let i=0 ; i <arr.length ; i++){
//         if(count === 0){
//             candidate = arr[i]
//         }

//         count += (arr[i] === candidate) ? 1 : -1
//     }

//     return candidate
// }


// console.log(findMajority([1,2,3,2,4,5,4,6,4,7]))






//consecutive of one 
//maxCoutn to find maximum count & currentCount for calculating current count 




// function maxConsecutiveOfOnes(arr){
//     let maxCount  = 0 
//     let currentCount = 0

//     for(let num of arr){
//         if(num === 1){
//             currentCount++
//             maxCount = Math.max(maxCount , currentCount)
//         }
//         else{
//             currentCount =0 
//         }
//     }

//     return maxCount
// }


// console.log(maxConsecutiveOfOnes([1,1,0,3,1,1,1,1,0,1,1,1,1,1,]))







// function swap vowel 

//spit string -> left = 0(start) - > right = end of arr(arr.len -1) -> while(left < right) 



// function swapArr(s){

//     let arr = s.split("")

//     let vowel = ["a","e","i","o","u","A","E","I","O","U"]

//     let seen = new Set(vowel)


//     let left = 0

//     let right = arr.length - 1

//     while(left < right ){
//         while(left < right && !seen.has(arr[left]) ){
//             left++
//         }
//         while(left < right && !seen.has(arr[right]) ){
//             right--
//         }

//         if(left < right){
//             [arr[left] , arr[right]] = [arr[right] , arr[left]]
//             left++
//             right--
//         }
//     }

//     return arr.join("")
// }


// console.log(swapArr("hello"))






//flatten arr based on depth 



// function flattenDepth(arr , depth){

//     if (depth === 0 ) return arr

//     let result = []

//     for (let num of arr){
//         if(Array.isArray(num)){
//             result.push(...flattenDepth(num, depth - 1));
//         }
//         else{
//             result.push(num)
//         }
//     }
    
//     return result
// }


// console.log(flattenDepth( [1, [2], [3, [4, [5]]]] , 2) )




//list format 



// function listFormat(arr ,  options = {}){

//     const SEPERATOR = ","

//     const OTHERS_SEPERATOR  = " and"

//     const OTHERS_LABEL = "other"


//     let items = arr.filter((item) => !! item)

//     if(items.length === 0) return ""

    

//     if( items.length === 1){
//         return items[0]
//     }

//     if(options.sorted){
//         items.sort()
//     }

//     if(options.unique){
//         items =  Array.from(new Set(items))
//     }

//     if (options.length && options.length > 0 && options.length < items.length){
//         let firstSection = items.slice(0, options.length).join(SEPERATOR)
//         let remaining = items.length - options.length
//         let secondSection = ` ${remaining} ${OTHERS_LABEL }${remaining > 1 ? "s" : "" } `

//         return [firstSection , secondSection].join(OTHERS_SEPERATOR)

//     }


    
//         let firstSection = items.slice(0 ,  items.length -1).join(SEPERATOR)
//         let secondSection = items.slice(-1)
//         return [firstSection , secondSection].join(OTHERS_SEPERATOR)
    


// }



// console.log(listFormat([])); // ''

// console.log(listFormat(["Bob"])); // 'Bob'
// console.log(listFormat(["Bob", "Alice"])); // 'Bob and Alice'

// console.log(listFormat(["Bob", "Ben", "Tim", "Jane", "John"]));
// // 'Bob, Ben, Tim, Jane and John'

// console.log(
//   listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
//     length: 3,
//   })
// ); // 'Bob, Ben, Tim and 2 others'

// console.log(
//   listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
//     length: 4,
//   })
// ); // 'Bob, Ben, Tim, Jane and 1 other'

// console.log(
//   listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
//     length: 3,
//     sorted: true,
//   })
// ); // 'Ben, Bob, Jane and 2 others'

// console.log(
//   listFormat(["Bob", "Ben", "Tim", "Jane", "John", "Bob"], {
//     length: 3,
//     unique: true,
//   })
// ); // 'Bob, Ben, Tim and 2 others'

// console.log(
//   listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
//     length: 3,
//     unique: true,
//   })
// ); // 'Bob, Ben, Tim and 2 others'

// console.log(listFormat(["Bob", "Ben", "", "", "John"])); // 'Bob, Ben and John'






//sliding window maximum ,  k size 



// function slideWindowByK(arr , k){
//     let result  = []

//     let n = arr.length

//     for(let i =0 ; i<= n - k ; i++){
//         let max = arr[i]

//         for(let j=1 ; j < k ; j++){
//            if( arr[i+j]  > max){
//             max = arr[i+j]
//            }
//         }
//         result.push(max)
//     }

//     return result
// }


// console.log(slideWindowByK([1, 2, 3, 4, 5, 6] , 3))









//Find the maximum sum of a subarray of size k


// function maxSumSubarray(arr ,  k){
//     let windowSum = 0 
//     let maxSum = 0 

//     for (let i=0 ; i< k ;i++){
//         windowSum += arr[i]
//     }

//     maxSum = windowSum ; 

//     for (let i=k ; i< arr.length ;i++){
//         windowSum += arr[i] - arr[i - k]

//         maxSum = Math.max(maxSum , windowSum)
//     }

//     return maxSum
// }


// console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3))



// product of array expect self 

// const array = [1,2, 3,4]

// const product = (arr) => {

//   let n = arr.length 

// 	let result  = new Array(n).fill(1) ;
  
  
//   let prefix = 1 
//   for(let i=0 ; i<n ; i++){
//   	result[i] = prefix
//     prefix *= array[i]
//   }
  
//   let suffix = 1;
//   for (let i = n-1 ; i>=0 ; i--){
//   	result[i] *= suffix ; 
//     suffix *= array[i]
//   }
  
//   return result
// }

// console.log(product(array))







