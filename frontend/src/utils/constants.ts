import { ColorType } from "lightweight-charts";
import { UserInput } from "./types";

export const userInput: UserInput = {
  instrument: {
    displayName: "Instrument",
    id: "instrument",
    values: [
      { name: "Infosys", value: "infy" },
      { name: "HDFC Bank", value: "hdfcbank" },
      { name: "Titan", value: "titan" },
      { name: "Bajaj Finance", value: "bajfinance" },
    ],
  },
  period: {
    displayName: "Period",
    id: "period",
    values: [
      { name: "Hourly", value: "hourly" },
      { name: "Daily", value: "daily" },
    ],
  },
};

export const candleStickChartOptions = {
  upColor: "#26a69a",
  downColor: "#ef5350",
  borderVisible: false,
  wickUpColor: "#26a69a",
  wickDownColor: "#ef5350",
};

export const chartOptions = {
  rightPriceScale: {
    scaleMargins: {
      top: 0.3,
      bottom: 0.15,
    },
    borderVisible: false,
  },
  layout: {
    background: { type: ColorType.Solid, color: "#131722" },
    textColor: "#d1d4dc",
  },
  grid: {
    vertLines: {
      color: "#2A2E39",
    },
    horzLines: {
      color: "rgba(#2A2E39, 0.6)",
    },
  },
};

export const histogramOptions = {
  color: "#0e3742",
  priceScaleId: "",
};
