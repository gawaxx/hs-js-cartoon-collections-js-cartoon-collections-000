function dwarfRollCall(dwarves) {
  var Receiver = [];
  for (var i = 0; i < dwarves.length; ++i){
    Receiver.push((i+1) + '. '+  dwarves[i] + ' ');
  }
  return Receiver.join(''); 
}

function summonCaptainPlanet(planeteerCalls){
  var Array1 = [];
  
  for (var i = 0; i < planeteerCalls.length; ++i) {
    Array1.push(planeteerCalls[i].toUpperCase() + '!' );
  }
  
  return Array1;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; ++i) {
    
    if (words[i].length > 4) {return true;}
    
    else {return false;}
    
  }
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; ++i) {
    
    if (foods[i] === 'gouda'|| foods[i] === 'cheddar' || foods[i] === 'camembert' || foods[i] === 'swiss') {
      return foods[i];
    }
    
  }
  
   return 'no cheese!';
}

function WordsWithB(words) {
  var WordsStartingWithB = [];
  for (var i = 0; i < words.length; ++i) {
    if words[i].startsWith('B') {
      WordsStartingWithB.push(words[i]); 
    }
  }
  
}
