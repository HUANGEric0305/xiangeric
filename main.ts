input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(4 - index)
    }
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 6; index++) {
        basic.showNumber(6 - index)
    }
})
