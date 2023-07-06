import { Router } from 'express';
import { createCadastroController } from '../controller/cadastro/createCadastroController.js';
import { getAllCadastroController } from '../controller/cadastro/getAllCadastroController.js';
import { getByIdCadastroController } from '../controller/cadastro/getByIdCadastroController.js';
import { updateCadastroController } from '../controller/cadastro/updateCadastroController.js';
import { deleteCadastroController } from '../controller/cadastro/deleteCadastroController.js';

const cadastroRouter = Router();

cadastroRouter.post("/cadastro", createCadastroController);
cadastroRouter.get("/cadastros", getAllCadastroController);
cadastroRouter.get("/cadastro/:id", getByIdCadastroController);
cadastroRouter.put("/cadastros/:id", updateCadastroController);
cadastroRouter.delete("/cadastro/:id", deleteCadastroController);

export { cadastroRouter };