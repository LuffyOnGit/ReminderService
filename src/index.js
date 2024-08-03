const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

// const { sendBasicEmail } = require('./service/emailService');

const TicketController = require('./controllers/ticketController');

const jobs = require('./utils/cronJob');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
        jobs();
        
    });

}

setupAndStartServer();

