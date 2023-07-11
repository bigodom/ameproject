import express from 'express';
import cors from 'cors'
import { beneficiadoRouter } from './routes/beneficiado.js';
import { responsavelRouter } from './routes/responsavel.js';

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors())
app.use(beneficiadoRouter);
app.use(responsavelRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});
