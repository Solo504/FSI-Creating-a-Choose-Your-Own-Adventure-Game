/*window.prompt("Do you head left or right")
let answer = window.prompt("Do you head left or right")
*/
let firstAnswer = window.prompt("Do you head left of right")
if(firstAnswer=== "left") {
    firstAnswer = window.prompt('You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path?')
    let secondAnswer
    if(firstAnswer==='follow'){
        secondAnswer=window.prompt('Stay or Spread')
        let thirdAnswer
        if(secondAnswer==='Stay'){
            thirdAnswer = window.prompt('Stay home please')
        }else if(secondAnswer==='Spread'){
            thirdAnswer = window.prompt('Spread away from here')
        }
    }
    else if (firstAnswer==='continue') {
         {secondAnswer=window.prompt('continue please')
    }
}
}else if (firstAnswer==='right') {
    firstAnswer = window.prompt('Follow Right path')
} 