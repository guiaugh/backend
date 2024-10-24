import express from 'express';
import contatos from './data/contatos.mjs'
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/contatos', (req, res) => {
    res.status(200).json({
        error: false,
        contatos
    })
});

app.get('/contatos/:id', (req, res) => {
    const id = req.params.id;
     
    res.status(200).json({
        
    })
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});