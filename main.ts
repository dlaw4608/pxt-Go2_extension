input.onButtonPressed(Button.A, function () {
    radio.sendString("Sit")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Sit") {
        serial.writeString("Sit")
    } else if (receivedString == "RiseSit") {
        serial.writeString("RiseSit")
        basic.showString("RiseSit")
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("RiseSit")
})
radio.setGroup(1)
