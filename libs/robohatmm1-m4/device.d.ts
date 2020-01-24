declare namespace pins {

    //% fixedInstance shim=pxt::getPin(PIN_D0)
    const A0: AnalogInPin;
    //% fixedInstance shim=pxt::getPin(PIN_D1)
    const A1: AnalogInPin;
    //% fixedInstance shim=pxt::getPin(PIN_D2)
    const A2: AnalogInPin;
    //% fixedInstance shim=pxt::getPin(PIN_D3)
    const A3: AnalogInPin;
    //% fixedInstance shim=pxt::getPin(PIN_D3)
    const A5: PwmPin;
    
    //% fixedInstance shim=pxt::getPin(PIN_SERVO1)
    const D0: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_SERVO2)
    const D1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_SERVO3)
    const D2: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_SERVO4)
    const D3: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_SERVO5)
    const D4: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_SERVO6)
    const D5: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_SERVO7)
    const D6: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_SERVO8)
    const D7: PwmPin;

    //% fixedInstance shim=pxt::getPin(PIN_NEOPIXEL)
    const NEOPIXEL: DigitalInOutPin;
    
    //% fixedInstance shim=pxt::getPin(PIN_PI_TX)
    const D8: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_PI_TX)
    const D9: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_SDA)
    const SDA: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_SCL)
    const SCL: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_TX)
    const TX: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_RX)
    const RX: DigitalInOutPin;
    
    //% fixedInstance shim=pxt::getPin(PIN_SDA)
    const D10: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_SCL)
    const D11: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_MISO)
    const MISO: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_MOSI)
    const MOSI: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_SCK)
    const SCK: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_LED)
    const LED: PwmOnlyPin;
}

declare namespace input {
    /**
     * Button connecting D0 to GND.
     */
    //% block="button D0" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D0,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD0: Button;


}
