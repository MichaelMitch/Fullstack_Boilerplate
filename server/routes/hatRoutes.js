const express = require('express')
const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('/home')
})

router.get('/home', (req, res)=> {
    db.getHats()
    .then(hats => {
        return res.render(hats)
    })
})

module.exports = router