const { Router } = require('express');

const router = Router();

const contentData = {
    staticContent: {
        metaTitle: "rb_test_project",
        phoneNumber: "+7(863) 000 00 00"
    },
    mainCoverContent: {
        title: "Многопрофильная клиника для детей и взрослых",
        description: "Lorem ipsum yooo"
    },
    menuContent: {
        aboutUsButton: "О нас",
        services: "Услуги",
        specialists: "Специалисты",
        priceListButton: "Цены",
        contactsButton: "Контакты",
    },
    faqContent: {
        title: "Часто задаваемые вопросы",
        faqsArray: [
            { title: "Заголовок 1", content: [ "Абзац 1", "Абзац 2" ] },
            { title: "Заголовок 2", content: [ "Абзац 1", "Абзац 2" ] },
            { title: "Заголовок 3", content: [ "Абзац 1", "Абзац 2" ] },
            { title: "Заголовок 4", content: [ "Абзац 1", "Абзац 2" ] },
            { title: "Заголовок 5", content: [ "Абзац 1", "Абзац 2" ] },
        ]
    },
    buttonsContent: {
        longBookingButton: "Записаться на приём",
        shortBookingButton: "Записаться",
        moreDetailsButton: "Подробнее"
    },
    popUpContent: {
        title: "Запишитесь на приём онлайн",
        description: "Администратор свяжется с Вами через WhatsApp в течение дня и уточнит детали",
        formContent: {
            fullnamePlaceholder: "ФИО",
            phonePlaceholder: "Номер телефона",
            emailPlaceholder: "Электронная почта",
        }
    },
    sliderContent: [
        {
            title: "CHECK-UP",
            subtitle: "для мужчин",
            list: [ "Гормональный скрининг", "Тестостерон", "Свободный тестестерон", "Глобулин, связывающий половые гормоны" ],
            price: { 
                oldPrice: 3500, 
                newPrice: 2800 
            },
            picture: {
                src: "",
                alt: "CHECK-UP фоновая картинка.",
                size: null
            },
        },

    ]
}

router.get('/', async (req, res) => {
    try {
        res.json(contentData)
    } catch (err) {
        res.status(500).json({ message: "Error, please try again" })
    }
})

module.exports = router;
