

//finding less stock value in a day and selling more profit in future day

// const prices = [7, 1, 5, 3, 6, 4];

// function maxProfit(price) {
//   let minPrice = prices[0];
//   let maxPrice = 0;

//   for (let i = 0; i < price.length; i++) {
//     minPrice = Math.min(minPrice, price[i]);
//     maxPrice = Math.max(maxPrice, price[i] - minPrice);
//   }
//   return maxPrice;
// }

// console.log("max", maxProfit(prices));

//  swapping two num with array

// let a = 10;
// let b = 20;

// a = a+b;
// b = a -b ;
// a = a - b ;
// console.log(a, b);


// remove duplicate chars from string

// function dupChars(str) {
//   let seen = {};

//   let result = "";

//   for (let word of str) {
//     if (!seen[word]) {
//       result += word;
//       seen[word] = true;
//     }
//   }
//   return result;
// }

// console.log(dupChars("aaabbbbccceedd"));

// remove duplicates from array

// var arr = [55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5];

// var unique = [...new Set(arr)];

// console.log(unique)

// function removeDups(str){
//     let seed ={};
//     let result = "";
//     for (let char of str){
//         if(!seed[char]){
//             result += char;
//             seed[char]= true;
//                 }
//     }
//     return result

// }

// console.log(removeDups("qqwwweerrttt"))

// const dups = (str) => {
//   return str.split("").filter((item,index, arr) => arr.indexOf(item) === index).join("");
// };

// console.log(dups("qqqwweuiewuerfn"));

const vowels = ["a", "i", "e", "o", "u"];

// const getVowels = (str) => {
//   let count = 0;
//   let arr = str.split("").filter((val) => {
//     if (vowels.includes(val)) {
//       count++;
//       return true;
//     }
//     return false;
//   });
//   return { vowels: arr, count };
// };

// console.log(getVowels("srinath"));

//     function findVowels(str){

//     let result = ""

//     let count = 0

//     for (let char of str ){
//     if(vowels.includes(char)){
//         result += char ;
//         count++
//     }

//     }
//     return {char : result , count}
// }

// console.log(findVowels("srinath"))


// function characterOccurance(str , val ){

//     let count = 0 ;

//     for (let i=0 ; i < str.length ; i++ ){

//         if (str[i] === val){
//             count++
//         }
//     }

//     return count ;
// }

// console.log(characterOccurance("priyapri", "p"))

// function getSumPairZero(arr) {
//   for (let num of arr) {
//     for (let i = 1; i < arr.length; i++) {
//       if (num + arr[i] === 0) {
//         return [num, arr[i]];
//       }
//     }
//   }
// }

// console.log(getSumPairZero([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));

// const largestPairSumofTwo = (arr) => {
//   const sorted = arr.sort((a, b) => b - a);
//   return sorted[0] + sorted[1];
// };

// const largestPairSumofTwo = (arr) => {
//   return arr[arr.length-1] +arr[arr.length-2];
// };

// const result = largestPairSumofTwo([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(result);

// const letters = ["a", "b", "c"];

// function findIndex(arr) {
//   return letters.indexOf(arr);
// }

// console.log(findIndex("c"));

// function missNum (arr) {
//     let x = 0 ;

//     for (let i=0 ; i< arr.length  ; i++){
//         x = x + 1 ;
//         if (arr[i] != x){
//             return x
//         }
//     }
// }

// console.log(missNum([1,2,3,4,5,6,7,8,10]))

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 44];

// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 22, 33];

// const nerArr = [...arr1, ...arr2];

// const uniqueVal = [...new Set(nerArr)].sort((a, b) => a - b);

// console.log(uniqueVal);

// // remove duplicate using hash map method

// function duplicate(arr) {
//   let uniqueArr = {};
//   let result = [];

//   for (let i of arr) {
//     if (!uniqueArr[i]) {
//       uniqueArr[i] = true;
//       result.push(i);
//     }
//   }
//   return result;
// }

// console.log(duplicate([1, 2, 4, 5, 2, 3, 5, 4])); // Output: 3

// find first duplicate in an array

// function firstDup(arr) {
//     let countMap = {}

//     for (let num of arr ){
//         if (countMap[num]){
//             return num
//         }
//         countMap[num]= 1
//     }

// }

// console.log(firstDup([1,2,3,2,4]))

//fizz buzz

// for (var i=1; i <= 20; i++)
// {
//     if (i % 15 == 0)
//         console.log("FizzBuzz");
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }

// upperCase for each word

// function upperCase(str) {
//   const words = str.toLowerCase().split(" ");

//   for ( let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }

//   return words.join(" ");
// }

// console.log(upperCase("india is mu country"));

// function confirmEnd(str, val) {

//     console.log(str[str.length - val.length] , str.length , val.length)
//     return str[str.length - val.length] === val;

// }

// console.log(confirmEnd("preethi", "i") , );  // ✅ true





// function largestElement(arr) {
//     return arr.map(row => Math.max(...row));
//   }
//   console.log(largestElement( [
//       [3, 5, 9, 1],
//       [13, 7, 2, 8],
//      [4, 6, 15, 11],
//      ]))






// const matrix = [
//   [3, 5, 9, 1],
//   [13, 7, 2, 8],
//   [4, 6, 15, 11],
// ];

// function largerElement(arr) {
//   let LargestEle = [];

//   for (let i = 0; i < arr.length; i++) {
//     let maxElement = arr[i][0];

//     for (let j = 1; j < arr[i].length; j++) {
//       if (arr[i][j] > maxElement) {
//         maxElement = arr[i][j];
//       }
//     }
//     LargestEle.push(maxElement);
//   }
//   return LargestEle;
// }

// console.log(largerElement(matrix));
// // Output: [9, 13, 15]


// function removeFalseValue(arr) {
//   var trueth = [];
//   for (var item of arr) {
//     if (item) {
//       trueth.push(item);
//     }
//   }
//   return trueth;
// }
// console.log(
//   removeFalseValue(["priya", 0, "", false, null, undefined, "ate", 9, NaN])
// ); //["priya","ate",9]

// function findDups(arr) {
//   let countMap = {};

//   for (let i = 0; i < arr.length; i++) {
//     countMap[arr[i]] = (countMap[arr[i]] || 0) + 1;
//   }

//   return Object.keys(countMap).filter(key => countMap[key] > 1).map(key => key);
// }

// console.log(findDups([1, 2, 3, 4, 5, 1, 2, 3]));

// sum of all number 1,5

// function sum(num1, num2) {
//   let min = Math.min(num1, num2);
//   let max = Math.max(num1, num2);

//   let sum = 0;

//   for (let i = min; i <= max; i++) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(sum(1, 5));

// let arr = [50, 60, 70, 80, 90];

// function len(arr) {
//   let lenght = 0;

//   for (let num of arr) {

//       lenght++;

//   }
//   return lenght;
// }

// console.log(len(arr));

// function firstRepeat(arr) {
//   let count = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (count[arr[i]]) {
//       return { value: arr[i], index: i };
//     }
//     count[arr[i]] = 1;
//   }
// }

// const [dup, index] = Object.values(firstRepeat([1, 2, 3, 4, 5, 4, 6]));

// console.log(dup, index);

//max repeat char and their count

// function findMaxRepeat(str) {
//   let maxChar = 0;
//   let charCount = {};
//   let maxCount = 0;

//   for (let i = 0; i < str.length; i++) {
//     charCount[str[i]] = (charCount[str[i]] || 0) + 1;

//     if (charCount[str[i]] > maxCount) {
//       maxCount = charCount[str[i]];
//       maxChar = str[i];
//     }
//   }
//   return { maxChar: maxChar, count: maxCount };
// }

// console.log(findMaxRepeat("qwwwwweeeerrtt"));

// function missingNum(arr) {
//   let result = [];

//   let start = arr[0];

//   let existArr = new Set(arr);

//   let end = arr[arr.length - 1]; //arr[4] which is last index

//   for (let i = start; i <= end; i++) {
//     if (!existArr.has(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// console.log(missingNum([1, 2, 4, 5, 7, 8, 10]));

// function addOne(arr){
//   var res =[];
//   for (let i=0 ; i < arr.length ; i++){
//     res.push(arr[i]+1)
//   }
//   return res
// }

// console.log(addOne([1,2,3,4,5,6,7,8,]))

//To find kth smallest or largest element in an array

// function nLargeSmall(arr, n) {
//   let sort = arr.sort((a, b) => a - b);
//   let smallest = arr[n - 1];
//   let largest = arr[arr.length - n];
//   console.log(smallest, largest);
// }

// nLargeSmall([2, 1, 4, 3, 6, 5, 7], 3);

// var array = [1, 0, 2, 0, 0, 9, 0, 6, 7];
// function removeZero(arr) {
//   let res = [];
//   let zero = [];
//   for (let num of arr) {
//     if (num != 0) {
//       res.push(num);
//     } else {
//       zero.push(num);
//     }
//   }
//   return res.concat(zero);
// }
// console.log(removeZero(array));

// function frequencyCheck(str) {
//   let charCount = {};

//   let fistRepeat = "";

//   let firstRepeatCount = 0;

//   for (let i = 0; i < str.length; i++) {
//     charCount[str[i]] = (charCount[str[i]] || 0) + 1;
//   }
//   console.log(charCount);
//   return charCount;
// }

// frequencyCheck("qqwwwerrrrttyy");

//infinite curry

// function infyCurry(a) {
//   return function (b) {
//     return b ? infyCurry(a + b) : a;
//   };
// }

// console.log(infyCurry(2)(3)(4)(5)(6)());

//callback function

// function callback(fun) {
//   console.log("test ");

//   fun();
// }

// function callFunc() {
//   console.log("call back invokation");
// }

// callback(callFunc);

// function closure() {
//   let count = 0;
//   document
//     .getElementById("button-id")
//     .addEventListener("click", function xyz() {
//       //when event click occurs, this callback function (xyz) is called into callstack
//       setTimeout(() => {
//         console.log("Button clicked", ++count);
//       }, 3000);
//     });
// }

// closure();

//hoc

// const arr = [1, 2, 3, 4, 5, 6];

// const add = (radius) => {
//   return Math.PI * radius * 2;
// };

// const calculate = (fun, radius) => {
//   let res = [];

//   for (let i = 0; i < radius.length; i++) {
//     res.push(fun(radius[i]));
//   }

//   return res;
// };

// console.log(calculate(add, arr));

// function flatArray(arr) {
//   let result = arr.flat(Infinity);
//   return result;
// }
// console.log(flatArray([1, 2, 3, [4, [5, [6, 7, [8]]]]]));

// const resolvedPromise = Promise.resolve("Success!");

// resolvedPromise.then((result) => {
//   console.log(result); // Output: Success!
// });

// const p1 = Promise.resolve("Resolved");
// const p2 = Promise.reject("p2 is rejected");
// const p3 = Promise.resolve("p3 resolved");

// Promise.allSettled([p1, p2, p3])
//   .then((val) => console.log(val))
//   .catch((error) => console.log(error));

// Promise.all([p1, p2, p3])
//   .then((val) => console.log(val))
//   .catch((error) => console.log(error));

// Promise.race([p1, p2, p3])
//   .then((val) => console.log(val))
//   .catch((error) => console.log(error));

// Promise.any([p1, p2, p3])
//   .then((val) => console.log(val))
//   .catch((error) => console.log(error));

// all promise.any fails
// const p1 = new Promise((_, reject) => setTimeout(() => reject("Error in P1"), 1000));
// const p2 = new Promise((_, reject) => setTimeout(() => reject("Error in P2"), 1500));
// const p3 = new Promise((_, reject) => setTimeout(() => reject("Error in P3"), 2000));

// Promise.any([p1, p2, p3])
//   .then((result) => {
//     console.log("Resolved:", result);
//   })
//   .catch((error) => {
//     console.log("Rejected:", error);
//   });

// promise.all with async/await

// const fetchData = async () => {
//   const urls = [
//     "https://jsonplaceholder.typicode.com/todos/1",
//     "https://invalid-url.com/fail", // Invalid URL (will fail)
//     "https://jsonplaceholder.typicode.com/todos/3",
//   ];

//   const promises = urls.map((url) => fetch(url).then((res) => res.json()));

//   const result = await Promise.allSettled(promises);

//   console.log(result);
// };

// fetchData();

// memoization

// const memoization = () => {
//   let cache = {};

//   return (num) => {
//     if (num in cache) {
//       console.log("fetch from cache", num);
//       return cache[num];
//     } else {
//       console.log("new fetch", num);
//       let result = num + 10;
//       cache[num] = result;
//       return result;
//     }
//   };
// };
// const add = memoization()
// console.log(add(5));
// console.log(add(5));

// const fetchUser = () => {
//   let cache = {};

//   return async (userId) => {
//     if (userId in cache) {
//       console.log("fetch from cache : ", userId);
//       return cache[userId];
//     } else {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/users/${userId}`
//       );

//       const data = await response.json();
//       cache[userId] = data;
//       return data;
//     }
//   };
// };

// const fetchData = fetchUser();
// (async () => {
//   console.log(await fetchData(1)); // Fetches from API
//   console.log(await fetchData(1)); // Fetches from cache
//   console.log(await fetchData(2)); // Fetches from API
//   console.log(await fetchData(2)); // Fetches from cache
// })();

// function debounce(func, delay) {
//   let timer;
//   return (...args) => {
//     // ✅ Accept arguments
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func(...args); // ✅ Pass arguments correctly
//     }, delay);
//   };
// }

// // Function to debounce
// const printName = () => {
//   console.log("Priya");
// };

// // Debouncing the function
// const debouncedPrint = debounce(printName, 8000);

// // Call the debounced function
// debouncedPrint();
// debouncedPrint();
// debouncedPrint();
// // ✅ Will log "Priya" after 8 seconds

//iife for print with var
// for (let i = 0; i < 3; i++) {

//     ((j) => {
//       setTimeout(() => console.log(j), 100)
//     })(i)

//   }

// console.log(1 + '12');
// console.log(0 - '10');
// console.log('11' + 1);
// console.log('10' + -1);

//callback function
// const callback  = (cb ) => {
//     let name = "srinath"
//    return cb(name)
// }

// const printName = (name) => {
//     console.log(name)
// }

// callback(printName)

// function removeDups(arr) {
// let charCount = {}

// let result = []

// for (let num of arr){
//     if(num in charCount ){
//         continue
//     }
//     else{
//          charCount[num] =1
//         result.push(num)
//     }
// }
// return result

// }

// console.log(removeDups([1,2,3,1,4,5]))

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Filter the even numbers, square them, and then sum them up
// const sum = array
//   .filter((num) => num % 2 === 0) // Filter out the even numbers
//   .map((num) => num * num) // Square each even number
//   .reduce((sum, num) => sum + num, 0); // Sum them up

// console.log(sum); // Output the sum

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filteredItems = array.filter(() => 0);
// console.log(filteredItems); // op []

// const arr = [1, 2, undefined, NaN, null, false, true, '', 'abc', 3];
// console.log(arr.filter(Boolean));

// const deepFlatten = (arr) => {
//     let result = [] ;

//     for (let item of arr ){
//         if(Array.isArray(item)){
//             result.push(...deepFlatten(item))
//         }
//         else{
//             result.push(item)
//         }
//     }

//     return result
// }

// console.log(deepFlatten([1,[2,3],[4,5],[6,7,8]]))











// const words = ["apple", "banana", "cherry", "dragonfruit", "elderberry"];

// const maxLenthWord = words.reduce((maxword , curr) => {

//   return  curr.length > maxword.length ? curr : maxword
// } , "")

// console.log(maxLenthWord)

// function maxLength (arr) {

//    let temp = ''

//    for (let word of arr){
//     if(word.length > temp.length){
//       temp = word

//     }

//    }

//    return temp.length
// }

// console.log(maxLength(words))








// const students = [
//     { name: 'John', score: 85 },
//     { name: 'Sarah', score: 92 },
//     { name: 'Michael', score: 88 },
//     { name: 'Emma', score: 95 },
//     { name: 'Daniel', score: 90 },
//   ];

//   const calcAvg = students.filter((stu) => stu.score > 90).reduce((acc , curr ,i , arr) =>{
//     return acc = acc + curr.score / arr.length} , 0)

//     console.log(calcAvg)

// function shuffleArr(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));

//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }

//   return console.log(arr);
// }

// shuffleArr([1, 2, 3, 4, 5, 6, 7, 8, 9]);








// function findMissingNum(arr) {
//   let missChar = new Set(arr);

//   let res = [];

//   let arrLen = arr[arr.length -1];

//   for (let i = 1; i < arrLen; i++) {
//     if (!missChar.has(i)) {
//       res.push(i);
//     }
//   }
//   console.log(arrLen);

//   return res;
// }

// console.log(findMissingNum([1, 2, 4, 5, 7, 9 ,10]));








// function findMaxRepeated(arr) {
//   let freqMap = {};
//   let maxNum = null;
//   let maxCount = 0;

//   for (let num of arr) {
//     freqMap[num] = (freqMap[num] || 0) + 1;

//     if (freqMap[num] > maxCount) {
//       maxCount = freqMap[num];
//       maxNum = num;
//     }
//   }

//   return maxNum;
// }

// console.log(findMaxRepeated([1, 2, 3, 1, 3, 4, 5, 6, 3, 7, 5, 8, 5 ,5])); // Output: 3










// function findConseqOne(arr){
//     let maxCount = 0 ;
//     let currentCount = 0 ;

//     for (let num of arr){
//         if(num === 1){
//             currentCount +=1 ;
//             maxCount = Math.max(maxCount , currentCount)
//         }
//         else{
//             currentCount = 0
//         }
//     }

//     return maxCount
// }

// console.log(findConseqOne([1,1,0 ,1,0,1,1,1,]))









// function flattenArrDepth(arr, depth) {
//   let res = [];

//   for (let num of arr) {
//     if (Array.isArray(num) && depth > 0) {
//       res.push(...flattenArrDepth(num, depth - 1)); // this means arr of arr depth
//     } else {
//       res.push(num);
//     }
//   }
//   return res;
// }

// console.log(flattenArrDepth([1, [2, 3], [3, 4, [5, [6, 7]]], 8], 2));













//polyfill for map

// Array.prototype.myMap = function (cb) {
//   let temp = [];

//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i]));
//   }

//   return temp;
// };

// const arr = [1, 2, 3, 4, 5, 6];

// const multiThree = arr.myMap((num) => {
//   return num * 3;
// });

// console.log(multiThree);








// Array.prototype.myFilter = function (cb) {
//   let temp = [];

//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i])) {
//       temp.push(this[i]);
//     }
//   }
//   return temp;
// };

// const arr = [1, 2, 3, 4, 5, 6];

// const lessthanthree = arr.myFilter((num) => num < 3);

// console.log(lessthanthree);







// Array.prototype.myReduce = function (cb , initialValue){

//    let  accumulator = initialValue

//     for (let i=0 ; i<this.length ;  i++ ){
//         accumulator = accumulator ? cb(accumulator , this[i]) : this[i]
//     }

//     return accumulator
// }

// const arr1 = [1,2,3,4,5]

// const sum = arr1.myReduce((acc , curr) => acc + curr , 0)

// console.log(sum)







// call bind apply

// const obj = {
//   name: "srinath",
//   age: 24,
//   role: "Software Developer",
// };

// function introduce(gf , tf) {
//   console.log(
//     `My name is ${this.name} and age is ${this.age} mad at ${gf} ${tf}`
//   );
// }
// introduce.call(obj);

// introduce.apply(obj, ["preethi"]);

// const intro = introduce.bind(obj, "preethi");

// intro()





// Function.prototype.myCall = function (context = {}, ...arg) {
//   if (typeof this !== "function") {
//     throw new error(this + "" + "not callable ");
//   }

//   context.fn = this;

//   context.fn(...arg);
// };

// introduce.myCall(obj, "preeths");






// Function.prototype.myApply = function (context = {}, arg = []) {
//   if (typeof this !== "function") {
//     throw new error(this + "" + "not callable ");
//   }
//   context.fn = this;

//   context.fn(...arg);
// };

// introduce.myApply(obj, ["preeths", "test"]);





// Function.prototype.myBind = function (context = {}, ...arg) {
//   if (typeof this !== "function") {
//     throw new Error(this + "" + "not callable");
//   }
//   return (...newArg) => {
//     context.fn = this;

//     return context.fn(...arg, ...newArg);
//   };
// };

// const intro = introduce.myBind(obj, "preeths");

// intro();








//fetch with auto retry

// const maxRetries = 3;
// const url = "https://jsonplaceholder.typicode.com/posts/1";

// const fetchUrl = async (url) => {
//   const res = await fetch(url);

//   if (!res.ok) {
//     throw new Error("fetching url failed");
//   }

//   const data = await res.json();

//   return data;
// };

// const autoRetry = async (func, maxtry, url) => {
//   try {
//     return await func(url);
//   } catch (error) {
//     console.lo("retried");
//     if (maxtry <= 1) {
//       throw new Error("MAx limit exceecd");
//     }
//     return await autoRetry(() => {
//       func, maxtry - 1, url;
//     });
//   }
// };

// const main = async () => {
//   try {
//     const data = await autoRetry(fetchUrl, maxRetries, url);

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// main();











// closure module pattern

// const bankAccount = (initialBalance) => {
//   let balance = initialBalance;

//   return {
//     deposit: (amount) => {
//       balance += amount;
//       console.log(`Deposited: $${amount}, New Balance: $${balance}`);
//     },
//     withdrawn: (amount) => {
//       if (amount > balance) {
//         console.log("inSufficient balance");
//       }
//       balance -= amount;
//       console.log(`withdrawn: $${amount}, New Balance: $${balance}`);
//     },
//     getBalance: () => {
//       console.log(balance);
//     },
//   };
// };

// const checkBal = bankAccount(1000);

// checkBal.deposit(500);

// checkBal.withdrawn(200);

// checkBal.getBalance()











//polyfill once

// function once(func) {
//   let called = false;

//   let result;

//   return (...arg) => {
//     if (!called) {
//       called = true;
//       func.apply(this, ...arg);
//     }
//     return result;
//   };
// }

// function myFunction() {
//   console.log("Function executed!");
// }

// const onceCall = once(myFunction);

// onceCall();
// onceCall();
// onceCall();


//Recursion 

// function multiply(arr){
//     if(arr.length <= 0 ) {
//         return 1
//     }
//     return arr[arr.length -1] * multiply(arr.slice(0,arr.length -1)) 
// }


// console.log("recursion" , multiply([1,2,3,4,5]))


// function createRange(start, end) {
//     const result = [];
//     for (let i = start; i <= end; i++) {
//       result.push(i);
//     }
//     return result;
//   }
  
//   console.log(createRange(3, 7)); // [3, 4, 5, 6, 7]










//Polyfill for memo

// function memo(fn){
//   let cache = {}

//   return  function(...args){
//     let key = JSON.stringify(args) ; 

//     if(cache[key]){
//       console.log("fetchec from cache :"   ); 
//       return cache[key]
//     }
//     else{
//        console.log("new operation :" ) ;
//        let result = fn.apply(this, args);
//        cache[key] = result; // ✅ Store result using the unique key
//        return result;

//     }

//   }
// }


// function add(a,b) {
//   return a + b
// }


// const pollyfillMemo = memo(add) ; 


// console.log(pollyfillMemo(2,3))
// console.log(pollyfillMemo(2,3))







// promise polyfill


// function MyPromise(executor) {

//     let onResolve, onReject;

//     let isFullFilled = false, isRejected = false, isCalled = false;

//     let value;


//     function resolve(val) {
//         isFullFilled = true;
//         value = val;

//         if (typeof onResolve === "function" && !isCalled) { //function should be without space
//             onResolve(value);
//             isCalled = true;
//         }

//     }

//     function reject(err) {
//         isRejected = true;
//         value = err;

//         if (typeof onReject === "function" && !isCalled) {
//             onReject(value);
//             isCalled = true;
//         }

//     }

//     this.then = function (callback) {
//         onResolve = callback;
//         if (isFullFilled && !isCalled) {
//             onResolve(value)
//             isCalled = true;
//         }
//         return this
//     }

//     this.catch = function (callback) {
//         onReject = callback;
//         if (isRejected && !isCalled) {
//             onReject(value)
//             isCalled = true;
//         }
//         return this
//     }


//     try {
//         executor(resolve, reject)
//     } catch (error) {
//         reject(error)
//     }

// }


// const fakeApiCall = new MyPromise((resolve , reject) => {
//   setTimeout(() => {
//     resolve("Data fetched successfully")
//   } , 1000)
// }) 

// fakeApiCall.then((data) => console.log(data)).catch((error) => console.error(error));





// promise.all
//if one promise is fail everythis will get fail



// MyPromise.all = function (promises) {

//     return new MyPromise((resolve, reject) => {
//         let result = []

//         let completed = 0;

//         if (promises.length === 0) return resolve([])

//         promises.forEach((promise, index) => {
//             promise.then((value) => {
//                 result[index] = value
//                 completed++
//                 if (completed === promises.length) return resolve(result)
//             }).catch(reject)
//         })

//     })

// }


// let p1 = new MyPromise((res) => setTimeout(() => res(10), 500));
// let p2 = new MyPromise((res) => setTimeout(() => res(20), 300));
// let p3 = new MyPromise((res, rej) => setTimeout(() => rej("Error!"), 100));



// MyPromise.all([p1,p2,p3]).then((data) => console.log(data)).catch((err) => console.log(err))


//PROMISE RACE 
//it will give first value either its fullfilles or rejected


//     MyPromise.race = function (promises) {
//     return new MyPromise((resolve , reject) => {
//         promises.forEach((promise ) => {
//             promise.then(resolve).catch(reject)
//         } )
//     })
// }

// let p1 = new MyPromise((res) => setTimeout(() => res(10),300))

// let p2 = new MyPromise((res) => setTimeout(() => res(100),700))


// MyPromise.race([p1,p2]).then(console.log).catch(console.log)


//PROMISE ANY 
//it will give first fullfilled or resolved value 

// MyPromise.any = function(promises){
//     return new MyPromise((resolve , reject) => {
//         let errors  = []

//         let errorCount = 0

//         if(promises.length === 0 ) return reject(new AggregateError(errors , "all promises failed") )

//         promises.forEach((promise ,index ) => {
//             promise.then(resolve).catch(
//                (err) => {
//                 errorCount++ ;
//                 errors[index] = err ; 
//                 if(errorCount === promises.length) return reject(new AggregateError(errors , "all promises failed") )
//                }
//             )
//         })
        
//     })
// }


// let p1 = new MyPromise((res, rej) => setTimeout(() => rej("Fail 1"), 500));
// let p2 = new MyPromise((res , rej) => setTimeout(() => res("Success!"), 300));
// let p3 = new MyPromise((res, rej) => setTimeout(() => rej("Fail 2"), 700));

// MyPromise.any([p1, p2, p3]).then(console.log).catch(console.error);





// PROMISE All settled 
// it will give all value fullfilled and rejected value 

// MyPromise.allSettled = function(promises){
//     return new MyPromise((resolve , reject) => {
//         let result  = []

//         let completed = 0

//         if(promises.length === 0 ) return resolve([] )

//         promises.forEach((promise ,index ) => {
//             promise.then((value) => {
//                 result[index] = {status : "fullfilled " , value }; 
//                 completed++
//             }
//             ).catch((error) => {
//                 result[index] = {status : "rejected " , error }; 
//                 completed++
//                 if (completed === promises.length) return resolve(result)
//             })
//         })
        
//     })
// }


// let p1 = new MyPromise((res, rej) => setTimeout(() => rej("Fail 1"), 500));
// let p2 = new MyPromise((res , rej) => setTimeout(() => res("Success!"), 300));
// let p3 = new MyPromise((res, rej) => setTimeout(() => rej("Fail 2"), 700));

// MyPromise.allSettled([p1, p2, p3]).then(console.log).catch(console.error);







//promise retry 

// const mathPromise = () => new Promise ((resolve,reject)=>{
    
//     const success = Math.random() > 0.6

//     setTimeout(() => {
//         success ? resolve("promise resolved") : reject("promise rejected")
//     },300)

// })

// const autoRetry = async (fn , retry) =>{
//     try{
//         return await fn()
//     }
//     catch(error){
//         if(retry <= 1){
//             throw new Error("max limit exeed")
//         }

//         console.log("retryingg..")

//         return await autoRetry(fn , retry - 1)
//     }
// }

// autoRetry(mathPromise , 3).then(console.log).catch(console.error)




// const urls = [ "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/users/1",
//     "https://jsonplaceholder.typicode.com/comments/1"]
    
    
//     const fetchData = async () => {
    
//       try {
//         const responses =  await Promise.all(
//           urls.map((url) => fetch(url).then(res => res.json()))
//         )
    
//         console.log("Post:", responses[0]);
//         console.log("User:", responses[1]);
//         console.log("Comment:", responses[2]);
//       }
//       catch (error) {
//         console.error("Error fetching data:", error);
//       }
    
//     } 
    
//     fetchData() 
  