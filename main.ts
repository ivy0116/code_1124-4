for (let x = 0; x <= 2; x++) {
    let y = 0
    led.plot(2 + x, 2 + y)
    led.plot(2 - x, 2 - y)
}
for (let y = 0; y <= 2; y++) {
    led.plot(2, 2 - y)
    led.plot(2, 2 + y)
}
basic.forever(function () {
	
})
