const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config/config').get(process.env.NODE_ENV);

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE, { useNewUrlParser: true } );

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api', require('./routes/api'));

app.use((err, req, res, next) => {
    console.log(err);
    res.status(422).send({ error: err.message });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));

