const { Router } = require('express');
const contentData = require('../db/contentData.json')

const router = Router();

router.get('/', async (req, res) => {
    try {
        res.json(contentData)
    } catch (err) {
        res.status(500).json({ message: "Error, please try again" })
    }
})

module.exports = router;
