


// convert 
//  into object 

// String → split by `;` → each entry → split by `,` → each field → split by `:` → build key-value → push to object → collect objects → return array


// function stringToObjects(str){
//     return str.split(";").map(entries => {
//         let obj = {}
//         entries.split(",").forEach( fields => {
//             const[key , value] =  fields.split(":");
//             obj[key] = isNaN(value) ? value : Number(value)
//         })
//         return obj
//     })
// }


// console.log(stringToObjects('Name: xyz, Age: 30; Name: abc, Age: 25'));







//anagram 

// function checkAnagram(s , t){

//     let obj1 = {}
//     let obj2 = {}
//     if( s.length < t.length) return false

//     for(let i=0 ; i < s.length ; i++){
//         obj1[s[i]] = (obj1[s[i]] || 0) + 1
//         obj2[t[i]] = (obj2[t[i]] || 0) + 1
//     }

//     for(let key in obj1){
//       if(  obj1[key] !== obj2[key]) return false 
//     }

//     return { "isAnagram" : true , "obj1" : obj1 , "obj2" : obj2 }
// }


// console.log(checkAnagram("drawer" ,"reward"))






// longets common prefix 

// function longestCommonPrefix(arr) {

    

//     let prefix = arr[0]

//     if(prefix === "") return ""

//     for(let i=1 ; i < arr.length ; i++){
//         while(arr[i].indexOf(prefix) !== 0){
//             prefix = prefix.substring(0 , prefix.length -1)
//         }
//     }
//     return prefix
// }


// console.log(longestCommonPrefix(['flower', 'flag', 'flutter']))








// string has all uniqueChar


// function alluniqueChar(str){
//     let seen = {}


//     for (let char of str){
//        seen[char] = (seen[char] || 0) + 1

//        if(seen[char] > 1) return false
//     }

//     return true

// }


// console.log(alluniqueChar("luck"))






//string compression 



// function strCompress(str){

//     let count = 0 

//     let result = ""

//     for (let i=0 ; i < str.length ; i++){
//         count++
//         if( str[i] !== str[i+1]){
//             result += str[i]+ count;
//             count = 0
//         }
//     }

//     return result 
// }


// console.log(strCompress("aaaabbbcc"))







//print only unique string 


// function printUniqueString(str){

//     let seen ={}

//     let unique  = []

//     for(let char of str ){
//         seen[char]  = ( seen[char]  || 0) +1

//         if( seen[char] === 1 ) {
//             unique.push(char)
//         }
//     }

//     return unique.join("")
// }


// console.log(printUniqueString("loki"))






//validate parenthesis 

// function validateParenthesis(str){

//     let stack = []

//     let pairs = {
//         "}" : "{",
//         "]" : "[",
//         ")" : "("
//      }

//      for (let char of str){

//         if(char in pairs){

//             if(stack.pop() !== pairs[char]){ // '(' !== '('  // false
//                 return false
//             }
//         }

//         else{
//             stack.push(char)
//         }
//      }

//      return true
// }



// console.log(validateParenthesis("{[()]}"))







//palindrome check

// function checkPalindrome(str){
//     let left = 0 ; 
//     let right = str.length - 1;   
//         while (left < right){
//             if(str[left] !== str[right]){
//                 return false
//             }

//             left ++ 
//             right --
//         }
    

//     return true
// }
// function countPalindrome(str){
//     let count = 0 ; 
//     let strings = str.split(" ")

//     for(let word of strings){
//         if(checkPalindrome(word)){
//             count++
//         }
//     }
//     return count
// }


// console.log(countPalindrome('madam racecar apple kayak level nayan malayalam'))






//string permutation 


// let str = "abc";

// let permutation = (str, result) => {
//   if (str.length == 0) {
//     console.log(result);
//     return;
//   }
//   for (let i = 0; i < str.length; i++) {
//     let rest = str.substring(0, i) + str.substring(i + 1);
//     permutation(rest, result + str[i]);
//   }
// };

// // Initial call to permutation
// permutation(str, '');








// find the first duplicate 


// function firstDuplicate(str){
//     let seen = {} 
    
//     for (let char of str){
//         if(seen[char]){
//             return char
//         }
//         else{
//             seen[char] = true
//         }
//     }
// }


// console.log(firstDuplicate("letsee"))







//longest substring in string 


// function longestSubstring(str) {
//     let charIndexMap = new Map();
//     let left = 0;
//     let maxLength = 0;
//     let start = 0;
  
//     for (let right = 0; right < str.length; right++) {
//       if (charIndexMap.has(str[right]) && charIndexMap.get(str[right]) >= left) {
//         left = charIndexMap.get(str[right]) + 1; //left moves only on duplicates
//       }
  
//         charIndexMap.set(str[right], right);
    
//         if (right - left + 1 > maxLength) {
//             maxLength = right - left + 1;
//             start = left;
//         }
//     }
  
//     return {"str" : str.substring(start, start + maxLength) , "length" : maxLength};
//   }

// console.log(longestSubstring("pwwkew"))








//Longest substring with k distinct characters.



// function longestSubstringbyK(arr , k){
//     let map = new Map()
//     let left = 0 ;
//     let right = 0 ;
    
// }


















