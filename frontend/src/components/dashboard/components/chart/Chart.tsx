import { RefObject, useEffect, useRef } from "react";
import Loader from "../../../../utils/components/loader/Loader";
import { createChart } from "lightweight-charts";
import {
  candleStickChartOptions,
  chartOptions,
} from "../../../../utils/constants";
import { Candles, CandlesData } from "../../../../utils/types";

interface Props {
  isLoading: boolean;
  stockData: CandlesData;
  chartContainerRef: RefObject<HTMLDivElement>;
}
const Chart = ({ isLoading, stockData, chartContainerRef }: Props) => {
  const chart = useRef<ReturnType<typeof createChart> | null>(null);

  useEffect(() => {
    if (
      stockData.candles.length > 0 &&
      chartContainerRef &&
      chartContainerRef.current
    ) {
      chart.current = createChart(chartContainerRef.current, chartOptions);

      const { candles } = stockData;

      const candleStickData = candles.map((candle: Candles) => {
        return {
          time:
            stockData.period === "daily"
              ? candle[0]
              : new Date(candle[0]).getTime(),
          open: candle[1],
          high: candle[2],
          low: candle[3],
          close: candle[4],
        };
      });

      const volumeData = candles.map((candle: Candles) => ({
        time:
          stockData.period === "daily"
            ? candle[0]
            : new Date(candle[0]).getTime(),
        value: candle[5],
      }));

      const candlestickSeries = chart.current.addCandlestickSeries(
        candleStickChartOptions
      );

      // @ts-ignore
      candlestickSeries.setData(candleStickData);

      const histogramSeries = chart.current.addHistogramSeries({
        color: "#0e3742",
        priceFormat: {
          type: "volume",
        },
        priceScaleId: "",
      });

      chart.current.priceScale("").applyOptions({
        scaleMargins: {
          top: 0.8,
          bottom: 0,
        },
      });

      // @ts-ignore
      histogramSeries.setData(volumeData);

      chart.current.timeScale().fitContent();
    }
  }, [stockData]);

  return (
    <div className="chart-container">
      {isLoading && <Loader />}
      {!isLoading && <div ref={chartContainerRef} className="chart" />}
    </div>
  );
};

export default Chart;
