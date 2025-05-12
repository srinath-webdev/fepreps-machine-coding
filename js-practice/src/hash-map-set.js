// findRepeatedElements - set 



// function findRepeatedElements(arr){
//     let seen = new Set()

//     let duplicate = new Set()

//     for(let num of arr) {
//         if(seen.has(num)){
//             duplicate.add(num)
//         }
//         else{
//             seen.add(num)
//         }
//     }

//     return [...duplicate]

// }


// console.log(findRepeatedElements([1,2,3,4,1,3,5,6,3]))




//findRepeatedElements - map  & set 



// function findRepeatedElements(arr){
//     let seen = {}

//     let duplicate = new Set() // to store only unique value

//     for(let num of arr) {
//         if(seen[num]){
//             duplicate.add(num)
//         }
//         else{
//             seen[num] = true
//         }
//     }

//     return [...duplicate]

// }


// console.log(findRepeatedElements([1,2,3,4,1,3,5,6,3]))



//findRepeatedElements - using Map alone 


// function findRepeatedElements(arr) {

//     let countMap = new Map() //  // Initialize a Map to store element counts

//     let duplicate = [] 

//     // Step 1: Count the frequency of each element

//     for (let num of arr) {
//         countMap.set( num , (countMap.get(num) || 0 ) + 1) // 
//     }

//     // Step 2: Find keys with count > 1 

//     for (let [key ,  value] of countMap.entries()){
//         if(value > 1){
//             duplicate.push(key) //if value is greater than 1 , that value -> key needs to push in duplicate arr
//         }
//     }

//     return duplicate
// }

// console.log(findRepeatedElements([1,2,3,4,1,3,5,6,3]))






// ---------------------------------------------------------------------------------------------------




// function frequencyCheck(arr){
//     let countMap = new Map()

//     for(let num of arr){
//         countMap.set(num , (countMap.get(num) || 0 ) + 1  )
//     }

//     return countMap.get(3) // to check specific element frequency else you can return countMap alone 

// }
// console.log(frequencyCheck([1,2,3,4,1,3,5,6,3]))






// Two Sum

// function twoSum(num , target) {
// let map = new Map()

// for(let i=0 ; i<num.length ; i++){
//     let complement =  target -  num[i]

//     if(map.has(complement)){
//         return [map.get(complement) , i]
//     }

//     map.set(num[i] , i )
// }

// return -1

// }


// console.log(twoSum([3,1 , 3] , 6))



// two sum -> basically complement will check whether it already has in map -> then current i & get(complement) are the pairs






//Number of good pairs - this will update the count when map has exist val 

// function numIdenticalPairs(nums) {
//    let map = {} 
//    let count = 0

//    for(let num of nums){
//     if(map[num]){
//         count += map[num]
//         map[num]++
//     }
//     else {
//         map[num] = 1 
//     }
//    }

//    return count
//   }

// console.log(numIdenticalPairs([1,2,3,1,1,3]))







//Count the Number of Consistent Strings - this problem is find the number of consitant word that means 
// allowed characters only present in the word.


// function consistentStrings(allowed , words ){
//     let isAllowed = new Set(allowed)

//     let count = 0 ; 

//     for (let word of words){
//         let consitent = true;

//         for (let char of word){

//             if(!isAllowed.has(char)){
//                 consitent = false
//             }
//         }

//         if(consitent) count++
//     }

//     return count
// }


// console.log(consistentStrings("ab" , ["baaa" , "abbb" , "acb" , "abababa"]))








//longest consecutive sequence 


// function consecutiveSeq(arr){


// }





//first unique Character in a string 


// function firstUniqueChar(s){
//     let map = {}

//     for (let char of s){
//         map[char] = (map[char] || 0) +1
//     }

//     for (let char of s){
//         if(map[char] === 1){
//             return char
//         }
//     }

//     return -1
// }

// console.log(firstUniqueChar("leetcode"))










