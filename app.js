const express = require('express');
const config = require('config');
const path = require('path');

const PORT = config.get('PORT') || 5000;
const url = config.get('baseUrl') + PORT;

const app = express();

// app.use(express.json({ extended: true }))
app.use('/api/content', require('./routes/content.routes'))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'rb_test_client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "rb_test_client", "build", "index.html"));
    })
}

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`Server start. Address: ${url}`);
        })
    } catch (err) {
        console.log('Server error: ', err.message);
        process.exit(1);
    }
}

start()

