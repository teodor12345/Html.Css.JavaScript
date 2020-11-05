
let value = document.getElementById('value');
let result = document.getElementById('result');

let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

let tens = [''];

tens[1] = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

tens = tens.concat(['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']);

let hundreds = function(value){
  return value > 0 ? ones[value] + " hundred" : '';
};

let getTens = function(value, next, words, index, number) {
  if(value == 1) {
    words.push(tens[1][next]);
    
    if(number == 5 ){
      words.push(' thousand');
    }
    if(number == 8 ){
      words.push(' million');
    }
    return index + 1;
  }
  
  words.push(tens[value]);
  return index;
};

function convert(str){
  let num, number;
  let words = [];
  
  for (let i = 0; i < str.length; i++){

    
    num = str[i];
    number = str.length - i;
    
    switch(number){
      //millions
      case 7 :
        words.push(ones[num] + ' million'); break;
      //thousands
      case 4 : 
        words.push(ones[num] + ' thousand'); break;
      // hundreds
      case 9 :
      case 6 :
      case 3 :
        words.push(hundreds(num)); break;
      // tens 
      case 8 :  
      case 5 :    
      case 2 :
        i = getTens(num, str[i + 1], words, i, number); break;
      case 1 : 
        words.push(ones[num]); break;
    }  
  }
  return words.join(' ');
}



value.addEventListener('change', function(){
  
  let val = value.value;
  result.innerHTML += convert(val) + '\n';
  
});