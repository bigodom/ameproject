import { Router } from "express";

import { createBeneficiadoController } from "../controller/beneficiado/createBeneficiadoController.js"
import { updateBeneficiadoController } from "../controller/beneficiado/updateBeneficiadoController.js";
import { getAllBeneficiadoController } from "../controller/beneficiado/getAllBeneficiadoController.js";
import { getByIdBeneficiadoController } from "../controller/beneficiado/getByIdBeneficiadoController.js";
import { deleteBeneficiadoController } from "../controller/beneficiado/deleteBeneficiadoController.js";

const beneficiadoRouter = Router();

beneficiadoRouter.post("/beneficiado", createBeneficiadoController);
beneficiadoRouter.get("/beneficiado", getAllBeneficiadoController);
beneficiadoRouter.get("/beneficiado/:beneficiadocpf", getByIdBeneficiadoController);
beneficiadoRouter.put("/beneficiado/:beneficiadocpf", updateBeneficiadoController);
beneficiadoRouter.delete("/beneficiado/:beneficiadocpf", deleteBeneficiadoController);

export { beneficiadoRouter };