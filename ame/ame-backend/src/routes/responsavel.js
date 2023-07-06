import { Router } from "express";
import { createResponsavelController } from "../controller/responsavel/CreateResponsavelController.js";
import { getAllResponsavelController } from "../controller/responsavel/getAllResponsavelController.js";
import { getByIdResponsavelController } from "../controller/responsavel/getByIdResponsavelController.js";
import { updateResponsavelController } from "../controller/responsavel/updateResponsavelController.js";
import { deleteResponsavelController } from "../controller/responsavel/deleteResponsavelController.js";

const responsavelRouter = Router();

responsavelRouter.post("/responsavel", createResponsavelController);
responsavelRouter.get("/responsaveis", getAllResponsavelController);
responsavelRouter.get("/responsavel/:responsavelcpf", getByIdResponsavelController);
responsavelRouter.put("/responsavel/:responsavelcpf", updateResponsavelController);
responsavelRouter.delete("/responsavel/:responsavelcpf", deleteResponsavelController);

export { responsavelRouter };