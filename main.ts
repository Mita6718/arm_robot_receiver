/**
 * Try To Change direction(AnalogPin, DigitalPin) Upload Code to robot and test direction if it not correct direction change the numbrt set in pins like 1, 0 it digital it control direction
 */
// Motors (2 wheels)
function right () {
    // Connector E (P16, P15)
    pins.analogWritePin(AnalogPin.P16, 1023)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.digitalWritePin(DigitalPin.P13, 0)
}
// left motor  = P16, P15
// right motor = P14, P13
function armup () {
    pins.analogWritePin(AnalogPin.P8, 1023)
    pins.digitalWritePin(DigitalPin.P1, 1)
}
// Tip
// 
// analog = speed
// 
// digital = direction
// 
// Change your radio set group
radio.onReceivedString(function (sms) {
    if (sms == "open") {
        open_claw()
        basic.showIcon(IconNames.Square)
    } else if (sms == "close") {
        close_claw()
        basic.showIcon(IconNames.SmallSquare)
    } else if (sms == "left") {
        left()
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (sms == "right") {
        right()
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (sms == "forward") {
        forward()
        basic.showIcon(IconNames.Happy)
    } else if (sms == "backward") {
        backward()
        basic.showIcon(IconNames.Angry)
    } else if (sms == "armup") {
        armup()
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (sms == "armdown") {
        armdown()
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (sms == "stop") {
        stop()
        basic.showIcon(IconNames.No)
    }
})
function armdown () {
    pins.analogWritePin(AnalogPin.P8, 1023)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function left () {
    pins.analogWritePin(AnalogPin.P16, 1023)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.digitalWritePin(DigitalPin.P13, 1)
}
function stop () {
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P8, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function open_claw () {
    // open hand
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.digitalWritePin(DigitalPin.P12, 1)
}
function backward () {
    // Connector F (P14, P13)
    pins.analogWritePin(AnalogPin.P16, 1023)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.digitalWritePin(DigitalPin.P13, 0)
}
function close_claw () {
    // close hand
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.digitalWritePin(DigitalPin.P12, 0)
}
function forward () {
    pins.analogWritePin(AnalogPin.P16, 1023)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.digitalWritePin(DigitalPin.P13, 1)
}
radio.setGroup(61)
