
//Make some random messages in one array.
let word_arr = ["How are you doing?", "Nice weather today!", "How old are you?",
 "Do you want to get outside?", "2 + 2 = 4", "Pirate used to wear eye patch not just it is cool",
"Studying the entire day is not fun"];

//get random message from array
function Randomize(arr) {
    let length = arr.length;
    return arr[Math.floor(Math.random() * length)];
}

//printout the random message 
console.log(Randomize(word_arr));