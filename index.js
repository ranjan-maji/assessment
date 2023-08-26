const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');


const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.json())


mongoose.connect('mongodb+srv://ranjan1:TjW1c4znKhEta2UO@cluster0.u4idw.mongodb.net/assessment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//import from Routes 

const userRoute = require('./Routes/userRoute');
const accountRoute = require('./Routes/accountRoute');
const policyRoute = require('./Routes/policyRoute');
const fileuploadRoute = require('./Routes/fileuploadRoute');


app.use(logger('dev'));

app.use('/api', userRoute);
app.use('/api', accountRoute);
app.use('/api', policyRoute);
app.use('/api', fileuploadRoute);





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
