import express from 'express';
import morgan from 'morgan';
import indexRouter from './routes/indexRouter';
import studentsRouter from './routes/studentsRouter';
import layoutMW from './middlewares/layoutMW';

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(layoutMW);

app.use('/', indexRouter);
app.use('/students', studentsRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
