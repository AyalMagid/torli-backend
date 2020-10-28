const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const fs = require('fs');
// const readline = require('readline');
const app = express()
const http = require('http').createServer(app);


// Express App Config
app.use(cookieParser())
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    };
    app.use(cors(corsOptions));
}
  

const treatmentRoutes = require('./api/treatment/treatment.routes')
const calendarRoutes = require('./api/calendar/calendar.routes')
const eventRoutes = require('./api/event/event.routes')
const emailRoutes = require('./api/email/email.routes')
const userRoutes = require('./api/user/user.routes')
const advertiseRoutes = require('./api/advertise/advertise.routes')

// routes
app.use('/api/treatment', treatmentRoutes)
app.use('/api/calendar', calendarRoutes)
app.use('/api/event', eventRoutes)
app.use('/api/email', emailRoutes)
app.use('/api/user', userRoutes)
app.use('/api/advertise', advertiseRoutes)

const logger = require('./services/logger.service')
const port = process.env.PORT || 3030;
http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
});
