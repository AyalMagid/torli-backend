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

// var twilio = require('twilio');

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
    console.log(22222222)
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true,
    };
    app.use(cors(corsOptions));
}

const treatmentRoutes = require('./api/treatment/treatment.routes')
const calendarRoutes = require('./api/calendar/calendar.routes')
const eventRoutes = require('./api/event/event.routes')
const emailRoutes = require('./api/email/email.routes')
const userRoutes = require('./api/user/user.routes')
const advertiseRoutes = require('./api/advertise/advertise.routes')
// const authRoutes = require('./api/auth/auth.routes')
// const twilloRoutes = require('./api/twillo/twillo.routes')

// routes
app.use('/api/treatment', treatmentRoutes)
app.use('/api/calendar', calendarRoutes)
app.use('/api/event', eventRoutes)
app.use('/api/email', emailRoutes)
app.use('/api/user', userRoutes)
app.use('/api/advertise', advertiseRoutes)
// app.use('/api/auth', authRoutes)
// app.use('/api/twillo', twilloRoutes)


const logger = require('./services/logger.service')
const port = process.env.PORT || 3030;
http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
});
