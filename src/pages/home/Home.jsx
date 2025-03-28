import "./Home.css";
// components
import Features from "../../components/features/Features";
import Chart from "../../components/chart/Chart";
import { salesData } from "../../data";
import WidgetSm from "../../components/widgetSm/WidgetSm";

function Home() {
  return (
    <>
      <div className="home">
        <Features />
        <Chart title="Month Sales" data={salesData} dataKey="sale" grid />
        <div className="home__widgets">
          <WidgetSm />
        </div>
      </div>
    </>
  );
}

export default Home;
