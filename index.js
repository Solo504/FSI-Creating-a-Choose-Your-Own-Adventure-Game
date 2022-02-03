/*window.prompt("Do you head left or right")
let answer = window.prompt("Do you head left or right")
*/
//Main Menu
let firstAnswer = window.prompt("Do you head left of right")
    if (firstAnswer=='left') {
        firstAnswer=window.prompt('Follow or Continue')
        let secondAnswer
        if (firstAnswer=='Follow') {
            secondAnswer=window.prompt('Stay or Spread')
            let thirdAnswer
            if (secondAnswer=='Stay') {
                thirdAnswer=window.prompt('Stay left')
            }
            if (secondAnswer=='Spread') {
                thirdAnswer=window.prompt('Spread Left')
            }
        }if (firstAnswer=='Continue') {
            secondAnswer=window.prompt('Continue Ladder or Stairs')
            if (secondAnswer=='Ladder') {
                thirdAnswer=window.prompt('Up the Ladder')
            }
            if (secondAnswer=='Stairs') {
                thirdAnswer=window.prompt('Up the Stairs')
            }
        }
    }
    
    if (firstAnswer=='right') {
        firstAnswer=window.prompt('You have chosen right way')
    }
