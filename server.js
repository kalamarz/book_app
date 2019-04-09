const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const config = require('./server/config/config').get(process.env.NODE_ENV);

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE, { useNewUrlParser: true } );


app.use(bodyParser.json());

app.use('/api', require('./server/routes/api'));

app.use((err, req, res, next) => {
    console.log(err);
    res.status(422).send({ error: err.message });
});

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res ) => {
        res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));

