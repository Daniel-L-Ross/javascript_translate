
class dice {
    constructor(value) {
        this.value = value
    }
}

dice.prototype.toString = function diceToString() {
    switch (this.value) {
        case 1:
            return "one"
        case 2:
            return "two"
        case 3:
            return "three"
        case 4:
            return "four"
        case 5:
            return "five"
        case 6:
            return "six"
    }
}


export const rollDice = (rolls) => {
    let count = 0
    while (count < rolls){

        const die1 = new dice(roll())
        const die2 = new dice(roll())
        
        let message = `${die1.toString()} + ${die2.toString()} == ${die1.value + die2.value}`
        
        if (die1.value === die2.value) {
            message += " DOUBLES!"
        }
        console.log(message)
        count += 1
    }
        
}

const roll = () => {
    const dieValue = Math.floor(Math.random() * (6 - 1 + 1)) + 1
    return dieValue
}



// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }