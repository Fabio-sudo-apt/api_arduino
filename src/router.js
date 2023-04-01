const express = require("express");

const router = express.Router()

router.get("/", (req, res) => {
    res.send("teste ok")
})

module.exports = router