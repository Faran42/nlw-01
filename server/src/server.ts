import express from 'express'
import routes from './routes';
import path from 'path';

const app = express();

app.use(express.json());
app.use(routes);
// express.static permite acessar itens diretamente pela url, esses sãos os tais itens estáticos
app.use('/uploads', express.static(path.resolve(__dirname, '..','uploads')))

app.listen(3333);