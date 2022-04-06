radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(5)
music.playMelody("C5 B A G F E D C ", 120)
basic.showString("hola")
basic.forever(function () {
    radio.sendNumber(8)
    if (input.isGesture(Gesture.TiltRight)) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
    }
})
