import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const countVowels = function(arr){
  const vowelTest = /[aeiouAEIOU]/;
  const consonantTest = /[a-zA-Z^AEIOUaeiou]/;
  let numSyllables = 0;
  let flag = false;
  for(let i = 0; i < arr.length; i++){
    if(vowelTest.test(arr[i])){
      numSyllables++;
    }
  }
  let j = arr.length;
  if(j > 2){
    //check if last letter is vowel, second to last is consonant, third to last vowel
    if(vowelTest.test(arr[j-1]) && consonantTest.test(arr[j-2]) && vowelTest.test(arr[j-3])){
      numSyllables--;
      flag = true;
    }
    for(let i = 1; i < arr.length; i++){
      //check if 2 vowels in a row
      if(vowelTest.test(arr[i]) && vowelTest.test(arr[i-1])){
        numSyllables--;
      }
    }
  }
  //scarves and yes are 1 syllable
  if(j > 3 && flag === false){
    if(arr[j-1] === "e" || (arr[j-2] + arr[j-1]) === "es"){
      numSyllables--;
    }
  }
  return numSyllables;
}

const haikuChecker = function(haiku){
  let syllableCount = [0,0,0];
  for(let i = 0; i < haiku.length; i++){
    for(let j = 0; j < haiku[i].length; j++){
      let word = haiku[i][j].split("");
      let numSyllables = countVowels(word);
      syllableCount[i] += numSyllables;
    }
  }
  return syllableCount;
}
//Scarves and sweaters everywhere
$(document).ready(function(){
  let findSyllables = haikuChecker([["Coolness", "fills", "the", "air"],["Scarves", "and", "sweaters", "everywhere"],["Fall", "weather", "is", "here"]]);
  console.log(findSyllables);
   findSyllables = haikuChecker([["An", "old", "silent", "pond"],["A", "frog", "jumps", "into", "the", "pond"],["splash", "silence", "again"]]);
  console.log(findSyllables);
   findSyllables = haikuChecker([["In", "the", "twilight", "rain"],["these", "brilliant", "hued", "hibiscus"],["A", "lovely", "sunset"]]);
  console.log(findSyllables);
});
