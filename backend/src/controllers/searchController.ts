import { Response, Request } from "express";
import { getStockData } from "../utils/searchUtil/helper";
import { ErrorResponse, SuccessResponse } from "../utils/types";
import { DAILY } from "../utils/constants";
import { HOURLY } from "../utils/constants";

const searchController = (req: Request, res: Response) => {
  const symbol = req.query.symbol as string;
  const period = req.query.period as typeof HOURLY | typeof DAILY;

  const response: SuccessResponse | ErrorResponse = getStockData(
    symbol,
    period
  );

  res.status(200);
  return res.json(response);
};

export default searchController;
