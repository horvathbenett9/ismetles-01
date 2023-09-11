input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= db - 1; index++) {
        szam = randint(1, max)
        gyujto = gyujto + szam
    }
    basic.showNumber(gyujto / db)
    gyujto = 0
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.compassHeading())
})
let szam = 0
let max = 0
let gyujto = 0
let db = 0
db = 1000000000
gyujto = 0
max = 80
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
	
})
