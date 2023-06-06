const { SerialPort } = require("serialport");

const port = new SerialPort({
  path: "/dev/ttyUSB0",
  baudRate: 9600,
});

module.exports = {
  on: () => {
    port.write("ON");
  },

  off: () => {
    port.write("OFF");
  },
};
