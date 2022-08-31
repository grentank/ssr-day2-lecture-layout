import express from 'express';
import morgan from 'morgan';
import indexRouter from './routes/indexRouter';
import studentsRouter from './routes/studentsRouter';
import layoutMW from './middlewares/layoutMW';
import apiRouter from './routes/apiRouter';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(layoutMW);

app.use('/', indexRouter);
app.use('/students', studentsRouter);
app.use('/api/v1', apiRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
