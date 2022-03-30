input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
})
music.playMelody("C5 B A G F E D C ", 120)
basic.forever(function () {
    radio.setGroup(1)
})
