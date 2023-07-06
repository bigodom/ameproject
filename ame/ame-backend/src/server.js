import express from 'express';
import cors from 'cors'
import { beneficiadoRouter } from './routes/beneficiado.js';
import { responsavelRouter } from './routes/responsavel.js';
import { cadastroRouter } from './routes/cadastro.js';

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors())
app.use(beneficiadoRouter);
app.use(responsavelRouter);
app.use(cadastroRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});
