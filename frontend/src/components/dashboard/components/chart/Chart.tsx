import { RefObject, useEffect, useRef } from "react";
import Loader from "../../../../utils/components/loader/Loader";
import { createChart } from "lightweight-charts";
import {
  candleStickChartOptions,
  chartOptions,
  histogramOptions,
} from "../../../../utils/constants";
import { Candles, CandlesData } from "../../../../utils/types";

interface Props {
  isLoading: boolean;
  stockData: CandlesData;
  chartContainerRef: RefObject<HTMLDivElement>;
}
const Chart = ({ isLoading, stockData, chartContainerRef }: Props) => {
  const chart = useRef<ReturnType<typeof createChart> | null>(null);
  const resizeObserver = useRef<ResizeObserver | null>(null);

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
              : new Date(candle[0]).getTime() / 1000,
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
            : new Date(candle[0]).getTime() / 1000,
        value: candle[5],
      }));

      const candlestickSeries = chart.current.addCandlestickSeries(
        candleStickChartOptions
      );

      // @ts-ignore
      candlestickSeries.setData(candleStickData);

      const histogramSeries =
        chart.current.addHistogramSeries(histogramOptions);

      // @ts-ignore
      histogramSeries.setData(volumeData);

      chart.current.priceScale("").applyOptions({
        scaleMargins: {
          top: 0.8,
          bottom: 0,
        },
      });
      chart.current.timeScale().fitContent();
    }
  }, [stockData]);

  useEffect(() => {
    if (!chart.current) {
      return;
    }

    resizeObserver.current = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      if (chart.current) {
        chart.current.applyOptions({ width, height });
        setTimeout(() => {
          if (chart.current) {
            chart.current.timeScale().fitContent();
          }
        }, 0);
      }
    });

    if (chartContainerRef.current) {
      resizeObserver.current.observe(chartContainerRef.current);
    }

    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
    };
  }, [stockData]);

  return (
    <div className="chart-container">
      {isLoading && <Loader />}
      {!isLoading && <div ref={chartContainerRef} className="chart" />}
    </div>
  );
};

export default Chart;
