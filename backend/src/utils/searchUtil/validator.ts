import { DAILY, HOURLY } from "../constants";

export const validateInput = (
  symbol: string,
  period: string
): { success: boolean; message: string } => {
  const validationData = { success: false, message: "" };
  if (!symbol) {
    validationData.message = "Invalid value for symbol";
    return validationData;
  }
  if (!period || (period !== HOURLY && period !== DAILY)) {
    validationData.message = "Invalid value for period";
    return validationData;
  }

  validationData.success = true;
  return validationData;
};
