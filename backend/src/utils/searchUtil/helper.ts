import { DAILY, HOURLY, mockStockData } from "../constants";
import { ErrorResponse, SuccessResponse } from "../types";
import { validateInput } from "./validator";

export const getStockData = (
  symbol: string,
  period: typeof HOURLY | typeof DAILY
): SuccessResponse | ErrorResponse => {
  const validationData = validateInput(symbol, period);
  if (!validationData.success) {
    return { status: "error", message: validationData.message };
  }

  const stockData = mockStockData[period][symbol];
  if (!stockData) {
    return {
      status: "error",
      message: "Symbol does not exist on stock exchange!",
    };
  }

  const responseData: SuccessResponse = {
    status: "success",
    data: {
      symbol: symbol,
      period: period,
      candles: stockData.candles,
    },
  };

  return responseData;
};
