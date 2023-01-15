import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';


// iniciando variavel do =>  .ENV
dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());


// configurando pasta publica de arquivos estaticos
server.use(express.static(path.join(__dirname, '../public')));


// ROTAS
// Usando as rotas
server.use(mainRoutes)


// Se não encotrar nem uma Rota
server.use((req, res) => {
    res.send('Pagina não encontrada !!!')
});








//Escutando porta
server.listen(process.env.PORT);