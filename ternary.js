const randomNumber = prompt("put in a number")
          //Using ternary
randomNumber < 10 ? console.log(`you have gorgeous eyes`) :randomNumber < 20 ? console.log(`you have gorgeous legs`) : console.log(`you are really smart` )
           //OR using SWITCH
switch (true) {
    case  randomNumber < 10:
        console.log(`you have gorgeous eyes`);
        break;
    case  randomNumber < 20:
        console.log(`you have gorgeous legs`)
         break;
    default:console.log(`you are really smart`)
        break;
}
          //OR using If/else
          if (randomNumber < 10) {
            console.log(`you have gorgeous eyes`)
          }
          else if (randomNumber < 20 ) {
            console.log(`you have gorgeous legs`)
          }
          else{
            console.log(`you are really smart`) 
          }