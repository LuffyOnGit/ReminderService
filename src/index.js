const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

const { sendBasicEmail } = require('./service/emailService');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)

        sendBasicEmail(
            'flightreminderservice@gmail.com',
            'ravishkumar5731@gmail.com',
            'Hello',
            'Do bhai dono tabahi'
        );
    });

}

setupAndStartServer();