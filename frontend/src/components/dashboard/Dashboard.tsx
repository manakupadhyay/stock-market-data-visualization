import { useRef, useState } from "react";
import { API_URL, DOMAIN } from "../../utils/apis";
import Chart from "./components/chart/Chart";
import Search from "./components/search/Search";
import Modal from "../../utils/components/modal/Modal";
import { CandlesData } from "../../utils/types";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [stockData, setStockData] = useState<CandlesData>({
    symbol: "",
    period: 'hourly',
    candles: [],
  });
  const [modal, setModal] = useState({ show: false, message: "" });
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  const fetchData = async (instrument: string, period: string) => {
    try {
      if (chartContainerRef.current && chartContainerRef.current.firstChild) {
        chartContainerRef.current.removeChild(
          chartContainerRef.current.firstChild
        );
      }
      setIsLoading(true);
      const response = await fetch(
        `${DOMAIN}${API_URL}?symbol=${instrument}&period=${period}`,
        { method: "GET" }
      );
      const responseData = await response.json();
      setIsLoading(false);
      if (responseData.status === "success") {
        setStockData(responseData.data);
      } else {
        setModal({
          show: true,
          message: responseData.message,
        });
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error)
      setModal({
        show: true,
        message: "Something went wrong! Please try again later.",
      });
    }
  };

  return (
    <section className="dashboard-container">
      {modal.show && <Modal message={modal.message} closeModal={setModal} />}
      <Search fetchData={fetchData} />
      <Chart
        isLoading={isLoading}
        stockData={stockData}
        chartContainerRef={chartContainerRef}
      />
    </section>
  );
};

export default Dashboard;
