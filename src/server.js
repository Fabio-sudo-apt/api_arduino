const express = require("express")
const app = express()

const portSerial = require("./communication")
const router = require("./router")

const port = 3000;

app.use(router)


// Melhora isso!
app.listen(port, () => {
    console.log("Server ON!")
    portSerial.on("open", () => {
        console.log("Connect  Arduino ON")
    })
})