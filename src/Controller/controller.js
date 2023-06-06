const { on, off } = require('../communication')
const powerOffController = (req, res) => {
    try {
        on()
        res.status(200).json({ message: 'Led On' })
    } catch (error) {
        console.log('powerOffController', error)
        res.status(500).json({ message: 'Internal Error' })
    }
}


const powerOnController = (req, res) => {
    try {
        off()
        res.status(200).json({ message: 'Led off' })
    } catch (error) {
        console.log('powerOnController', error)
        res.status(500).json({ message: 'Internal Error' })
    }

}


module.exports = { powerOffController, powerOnController }