const { Router } = require('express');
const products = require('../db/products.json')

const router = Router();

router.get('/', async (req, res) => {
    try {
        res.status(200).json(JSON.stringify(products))
    } catch (err) {
        res.status(500).json({ message: "Error, please try again" })
    }
})

module.exports = router;
