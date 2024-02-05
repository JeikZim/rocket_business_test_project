const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json({ message: "Ошибка: невозможно отправить данные." })
    }
})

module.exports = router;
