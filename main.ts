let 가변저항 = 0
function 전체끄기 () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P7, 0)
}
basic.forever(function () {
    // 가변저항 연결 후
    // 최대값 1023
    // 
    basic.showNumber(가변저항)
})
basic.forever(function () {
    가변저항 = pins.analogReadPin(AnalogPin.P0)
    if (350 < 가변저항) {
        전체끄기()
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P5, 0)
        pins.digitalWritePin(DigitalPin.P7, 0)
    } else if (351 <= 가변저항 && 700 <= 가변저항) {
        전체끄기()
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P5, 1)
        pins.digitalWritePin(DigitalPin.P7, 0)
    }
})
