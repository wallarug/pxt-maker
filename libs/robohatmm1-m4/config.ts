namespace config {
    export const PIN_A0 = DAL.PA07;
    export const PIN_A1 = DAL.PA06;
    export const PIN_A2 = DAL.PA05;
    export const PIN_A3 = DAL.PA04;
    
    export const PIN_D0 = DAL.PA18;
    export const PIN_D1 = DAL.PA19;
    export const PIN_D2 = DAL.PA20;
    export const PIN_D3 = DAL.PA21;
    export const PIN_D4 = DAL.PA11;
    export const PIN_D5 = DAL.PA10;
    export const PIN_D6 = DAL.PA09;
    export const PIN_D7 = DAL.PA08;

    export const PIN_A4 = PIN_D7;
    export const PIN_A5 = PIN_D6;

    //NEOPIXEL pin
    export const PIN_NEOPIXEL = DAL.PB23;
    export const NUM_NEOPIXELS = 10;

    //Pi Serial
    export const PIN_D8 = DAL.PA16;
    export const PIN_D9 = DAL.PA17;

    //I2C_PORT
    export const PIN_SDA = DAL.PA00;
    export const PIN_SCL = DAL.PA01;

    //GPS_PORT
    export const PIN_TX = DAL.PB02;
    export const PIN_RX = DAL.PB03;
    export const PIN_D10 = DAL.PA22;
    export const PIN_D11 = DAL.PA23;

    //SPI_PORT
    export const PIN_MOSI = DAL.PB08;
    export const PIN_MISO = DAL.PB11;
    export const PIN_SCK = DAL.PB09;
    export const PIN_CS = DAL.PB10;

    export const PIN_LED = DAL.PB22;
    //Flash pins not implement yet
    // export const PIN_FLASH_MISO = DAL.PA14;
    // export const PIN_FLASH_MOSI = DAL.PA12;
    // export const PIN_FLASH_SCK = DAL.PB13;
    // export const PIN_FLASH_SS = DAL.PB15;
}
