import express, { Request, Response } from "express";
import searchController from "../../controllers/searchController";

const apiRouter = express.Router();

apiRouter.get("/search", searchController);

export default apiRouter;
