import { DAILY, HOURLY } from "./constants";

export interface SuccessResponse {
  status: "success";
  data: {
    symbol: string;
    period: typeof HOURLY | typeof DAILY;
    candles: Candles[];
  };
}

export interface ErrorResponse {
  status: "error";
  message: string;
}

type Candles = [string, number, number, number, number, number];

export interface StockData {
  [key: string]: {
    candles: Candles[];
  };
}
