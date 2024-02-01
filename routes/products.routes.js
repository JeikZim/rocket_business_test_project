const { Router } = require('express');
const products = require('../db/products.json')

const router = Router();

router.get('/', async (req, res) => {
    try {
        res.status(200).json(JSON.stringify(products))

        // setTimeout(() => res.status(200).json(JSON.stringify(products)), 5000)

        // if (Math.random() * 10 < 5) {
        //     res.status(200).json(JSON.stringify(products))
        // }
        // else {
        //     setTimeout(() => res.status(500).json({ message: "Error AAAAA" }), 5000)
        // }
        
        // res.status(500).json({ message: "Error AAAAA" })
    } catch (err) {
        res.status(500).json({ message: "Ошибка: невозможно предоставить список актуальных услуг." })
    }
})

module.exports = router;
