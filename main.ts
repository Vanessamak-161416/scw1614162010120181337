input.onButtonPressed(Button.A, function () {
    mode = 0
})
input.onButtonPressed(Button.B, function () {
    mode = 1
})
let mode = 0
basic.showIcon(IconNames.Square)
basic.forever(function () {
    if (mode == 0) {
        basic.showNumber(1)
        if (pins.analogReadPin(AnalogPin.P1) > 200) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
            music.playTone(880, music.beat(BeatFraction.Half))
            music.playTone(698, music.beat(BeatFraction.Half))
        }
        basic.showNumber(2)
        if (pins.analogReadPin(AnalogPin.P2) > 200) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
            music.playTone(880, music.beat(BeatFraction.Half))
            music.playTone(698, music.beat(BeatFraction.Half))
        }
    } else {
        basic.showNumber(2)
        led.plotBarGraph(
        pins.analogReadPin(AnalogPin.P1),
        1023
        )
        basic.pause(1000)
        basic.showNumber(2)
        led.plotBarGraph(
        pins.analogReadPin(AnalogPin.P2),
        1023
        )
        basic.pause(100)
    }
})
