import "./Home.css";
// components
import Features from "../../components/features/Features";
import Chart from "../../components/chart/Chart";
import { salesData } from "../../data";

function Home() {
  return (
    <>
      <div className="home">
        <Features />
        <Chart title="Month Sales" data={salesData} dataKey="sale" grid />
      </div>
    </>
  );
}

export default Home;
