const { Router } = require('express');
const products = require('../db/products.json')

const router = Router();

router.get('/', async (req, res) => {
    try {
        // * Кейс 1. Рабочий вариант
        res.status(200).json(JSON.stringify(products))

        // * Кейс 2. Отправка ответа с задержкой. Позволяет проверить SliderCardLoader и дезактивацию кнопок во время загрузки
        // setTimeout(() => res.status(200).json(JSON.stringify(products)), 5000)

        // * Кейс 3. Случайная вероятность выпадения ошибки. Позволяет рассмотреть процесс, 
        // * при котором с сервера возвращаются ошибки, но в итоге приходит правильный результат
        // if (Math.random() * 10 < 5) {
        //     res.status(200).json(JSON.stringify(products))
        // }
        // else {
        //     setTimeout(() => res.status(500).json({ message: "Error AAAAA" }), 5000)
        // }
        
        // * Кейс 4. Возращает только ошибки. Нужно для тестирования компанента SliderCardError
        // res.status(500).json({ message: "Error 500. Internal Server Error" })
    } catch (err) {
        res.status(500).json({ message: "Ошибка: невозможно предоставить список актуальных услуг." })
    }
})

module.exports = router;
