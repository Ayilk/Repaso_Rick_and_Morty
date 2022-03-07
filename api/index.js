const express = require('express');
const morgan = require('morgan');
const routes = require('./src/routes/index');
const app = express();
const { PORT } = require('./src/utils/config');
const { conn } = require('./src/models');

const errorHandler = require('./src/utils/middlewares/errorHandlers');
const setHeaders = require('./src/utils/middlewares/setHeaders');

app.use(express.urlencoded({ extended: true, limit: "50mb"}));
app.use(express.json({limit: "50mb"}));
app.use(morgan('dev'));
app.use(setHeaders);

app.use('/api', routes);
// app.get('/', (req, res) => {
//     res.send("Proyecto de repaso");
// })

app.use(errorHandler);

conn.sync({force: true})
.then(() => {
    console.log('Base de datos conectada!! Yay!');
    app.listen(PORT , ()=> {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    })
})


