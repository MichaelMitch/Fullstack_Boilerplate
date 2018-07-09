const express = require('express')
const db = require('../db')

const router = express.Router()

// router.get('/', (req, res) => {
//     res.json()
// })

router.get('/', (req, res)=> {
    db.getHats()
    .then(hats => {
        return res.json(hats)
    })
})

module.exports = router