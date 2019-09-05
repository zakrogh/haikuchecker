import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const countVowels = function(arr){
  const vowelTest = /[aeiouAEIOU]/;
  const consonantTest = /[a-zA-Z^AEIOUaeiou]/;
  let numVowels = 0;
  for(let i = 0; i < arr.length; i++){
    if(vowelTest.test(arr[i])){
      numVowels++;
    }
  }
  let j = arr.length;
  if(j > 2){
    if(vowelTest.test(arr[j-1]) && consonantTest.test(arr[j-2]) && vowelTest.test(arr[j-3])){
      numVowels--;
    }
    for(let i = 1; i < arr.length; i++){
      if(vowelTest.test(arr[i]) && vowelTest.test(arr[i-1])){
        numVowels--;
      }
    }
  }

}

const haikuChecker = function(haiku){
  for(let i = 0; i < haiku.length; i++){
    for(let j = 0; j < haiku[i].length; j++){
      let word = haiku[i][j].split("");
      let numSyllables = countVowels(word);
      console.log(numSyllables);
    }
  }
}

$(document).ready(function(){
  haikuChecker([["Coolness fills the air"],["Scarves and sweaters everywhere"],["Fall weather is here"]]);
});
