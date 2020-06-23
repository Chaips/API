const express= require('express');
const app = express();
const morgan = require('morgan');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Configuration
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

app.listen(3000, () =>{
    console.log('Server on port', app.get('port'));
});