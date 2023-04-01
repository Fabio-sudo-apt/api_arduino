const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const port = new SerialPort({ path: 'COM4', baudRate: 9600  });


const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

port.pipe(parser);

module.exports = port

