const enemies = [
    {
        firstName: "Joshua",
        lastName: "Flowers",
        offenses: ["Being a jerk to me in elementary school",
            "Not being nice to me in elementary school"],
        isReallyHated: true,
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        offenses: ["Cut off Luke's hand",
        "Murdered all those kids",
        "Unkind management practices"],
        isReallyHated: false,
    },
    {
        firstName: "Joshua",
        lastName: "Flowers",
        offenses: ["Phone calls in the theater",
        "Phone calls on the bus",
        "Phone calls in line at the grocery store",
        "Poor conversationalist"],
        isReallyHated: true,
    },
    {
        firstName: "Joshua",
        lastName: "Flowers",
        offenses: ["Keeps giving me a hotplate"],
        isReallyHated: false,
    },
]

export const enemyNames = () => {
    enemies.forEach(enemy => {
        if (enemy.isReallyHated) {
            console.log(`${enemy.firstName} ${enemy.lastName} (Really, really dislike!)`)
        } else {
            console.log(`${enemy.firstName} ${enemy.lastName}`)
        }
    })
}