// ARRAY 
// second  largest num 


// function secondLargest(arr){

//     if(arr < 2) return ;

//     let max = Number.NEGATIVE_INFINITY 
//     let secMax = Number.NEGATIVE_INFINITY 

//     for (let num of arr){
//         if(num > max){
//             secMax = max 
//             max=num
//         }
//         else if (num > secMax && num < max){
//             secMax = num
//         }
//     }

//     return secMax === Number.NEGATIVE_INFINITY  ? -1 : secMax
// }

// console.log(secondLargest([10 , 10 ,12  , 11]))






// rotating element in an array by k 


// function rotateNum(arr , k) {

//     let n = arr.length 

//     if (n > k ){     // This condition improves efficiency by reducing unnecessary rotations.
//         k = k % n  
//     }

//     console.log(k)

//     function reverse(start , end ){
//         while(start < end ){
//            let temp = arr[start]
//            arr[start] = arr[end]
//            arr[end] = temp
//            start++
//            end--
//         }
//     }

//     reverse(0 , n-1)
//     reverse(0 , k -1)
//     reverse(k , n-1)


//     return arr

// }


// console.log(rotateNum([1, 2, 3, 4, 5], 2)) 




//remove duplicates 

// var removeDuplicates = function(nums) {
//     let index = 1;
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[i - 1]) {
//             nums[index] = nums[i];
//             index++;
//         }
//     }
//     return index;
// };

// console.log(removeDuplicates([1,1,2]))





// sum of subarray  brut force 


// function sumofSubArr(arr){
//   let maxSum = -Infinity ; 

//   for (let i=0 ; i < arr.length ; i++){
//    let  sum = 0 ;
//     for(let j= i ;  j < arr.length ; j++){
//         sum += arr[j]
//         maxSum= Math.max(maxSum , sum)
//     }
//   }
//   return maxSum

// }

// console.log(sumofSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]))



//kadane method 


// function sumOfSubKadane(arr) {

//     let maxNum = 0

//     let currentSum = 0

//     for (let num of arr){
//         currentSum += num
//         maxNum = Math.max(maxNum , currentSum)


//         if (currentSum < 0 ){
//             currentSum =0
//         }
//     }
//     return maxNum
// }

// console.log(sumOfSubKadane([-2, 1, -3, 4, -1, 2, 1, -5, 4]))



// RECURSION 
// 1. fibonacci
 
// function fibonacci(n) {

//     if (n === 0 ) return 0
//     if (n === 1 ) return 1

//     return fibonacci(n-1) + fibonacci(n-2)

// }

// console.log(fibonacci(16))



//2. reverse string 

// function reverseString(str){
//     if (str === ""){
//         return ""
//     }
//     return reverseString(str.substr(1)) + str[0]
// }

// console.log(reverseString("hello"))

//3.factorial


// function factorial(n){
//     if (n === 0){
//         return 1
//     }
//     return n*  factorial(n-1)
// }

// console.log(factorial(5))



//4.range between start and end num


// function rangeBetween(start , end) {
//     if(end < start){
//         return []
//     }

//     const num = rangeBetween(start , end -1)
//     num.push(end)
//     return num
// }

// console.log(rangeBetween(1,10))


//5.subset 


// function recursiveSubset(num){
//     let res = [] ;
//     let temp = [];

//     function recursive(num , i ){
//         if( i === num.length){
//             return res.push([...temp])
//         }

//         temp.push(num[i])
//         recursive(num , i + 1)
//         temp.pop()
//         recursive(num , i + 1)
//     }

//     recursive(num , 0)
//     return res
// }

// console.log(recursiveSubset([1,2,3]))




//STACK 


//1. reverse a string 

//steps > split the str > char arr > pass all ele to Char > to reverse use while loop > pop curr ele by new var > add it in a string  


// function reverseString(str){

//     let splitS = str.split(" ")
//     let char = []


//     for (let i of splitS){
//         char.push(i)
//     }

//     let final = []
//     while(char.length){
//        final.push(char.pop()) 
//     }

//     return final.join(" ")
// }


// console.log(reverseString("hello the is srinath"))




// function reverseString(s) {
//     let stack = s.split(""); // Push all characters into stack
//     let reversed = "";
    
//     while (stack.length) {
//         reversed += stack.pop(); // Remove last item (LIFO)
//     }
    
//     return reversed;
// }

// console.log(reverseString("srinath")); // "olleh"
 


//2. valid brackets 


// function validBrackets(s){

//     let stack = []

//     for (let i=0 ; i<s.length ; i++){
//         let char = s[i]
//         if (char === "{" || char === "(" || char === "["  ){
//             stack.push(char)
//         }
//         else if(char === "}" || char === ")" || char === "]" ){
//             if(isEmpty(stack)){
//                 return false
//             }

//             const top = stack.pop()
//             if (
//                 (char === ")" && top !== "(") ||
//                 (char === "}" && top !== "{") ||
//                 (char === "]" && top !== "[")
//             ) {
//                 return false; // ✅ Mismatched brackets
//             }
//         }
        
//     }
//     return isEmpty(stack)
// }

// function isEmpty(stack){
//     return stack.length === 0
// }

// console.log(validBrackets("{[()]}")); 







//WINDOW SLIDING 

// const windowSliding = (nums , k) => {
//     let result = []

//     let deque = []

//     for (let i=0 ; i< nums.length ; i++){
//         if(deque.length > 0 && deque[0] <= i - k){
//             deque.shift()
//         }

//         while(deque.length > 0 && nums[deque[deque.length -1]] < nums[i]){
//             deque.pop()
//         }

//         deque.push(i)


//         if(i >= k -1){
//             result.push(nums[deque[0]])
//         }
//     }

//     return result 
// }

// console.log(windowSliding([1,3,-1,7,5,3,6,7] ,3))





//STRING 

//1. hamming length 


// function hammingLength(x,y){
//     if( x.length < y.length) return false ;

//     let distances = 0 ;
//     for (let i=0 ; i < x.length ; i++){
//         if( x[i] !== y[i] ){
//              distances++
//         }
//     }
//     return distances
// }

// console.log(hammingLength("hello","hrlli"))





//anagram 


// function isAnagram(s , t){
//     if (s.length < t.length) return false 
//     let obj1 =[]
//     let obj2 =[]

//     for (let i=0 ;  i< s.length ;i++){
//         obj1[s[i]] = ( obj1[s[i]] || 0) + 1
//         obj2[t[i]] = (  obj2[t[i]] || 0) + 1
//     }

//     for (let key in obj1){
//         if(obj1[key] !== obj2[key]) return false
//     }
    
//     return true
// }


// console.log(isAnagram("anagram" , "nagaram"))






//linear search  - searching one by one 


// function linearSearch(arr , t){
//     for (let i=0 ;  i<arr.length ; i++){
//         if(arr[i] === t ) return i 
//     }
//     return-1
// }

// console.log(linearSearch([1,2,3,4,5,6,], 6))



//Binary search - Always look at the middle. If it's too small, go right. If it's too big, go lef


// function binarySearch(nums , target ) {
//     let start = 0 
//     let end = nums.length -1 

//     while( start <= end){
//         let middle = Math.floor((start + end ) /2);
        
//         if (nums[middle] === target){
//             return middle
//         }
//         else if(nums[middle] < target){
//             start = middle +1
//         }
//         else{
//             end = middle - 1
//         }
//     }
//     return -1
// }


// console.log(binarySearch([-3,-2,0,1,2,3,4,5,6,9] , 9))



//find kth missing positive number 


// function kthPositiveNum(nums , k ){
//     let  count = 0 

//     for (let i=0 ; i < nums.length ; i++ ){
//         if(nums[i] <= k + count ){
//             count++
//         }
//     }
//     return k + count 
// }

// console.log(kthPositiveNum([2,3,4,7,11 , 12] , 4))


// find max negative or positive num 


// function maxCountNegOrPos(nums){
//     let n = nums.length

//     let negEnd = binarySearch(nums , 0)

//     let posStart = binarySearch(nums , 1)

//     const negCount  = negEnd

//     const posCount = n - posStart

//     return Math.max(negCount , posCount)
// }

// function binarySearch(nums , target ){
//     let start =  0 ;

//     let end = nums.length -1 ;

//     while (start < end ){
//         let mid =  Math.floor((start + end ) / 2)

//         if(nums[mid] < target){
//             start = mid + 1
//         }
//         else end = mid 
//     }
//     return end 
// }

// console.log(maxCountNegOrPos([-3,-2,-1,0,1,2,3,4,5]))



