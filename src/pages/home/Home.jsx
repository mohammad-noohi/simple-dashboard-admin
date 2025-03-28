import "./Home.css";
// components
import Features from "../../components/features/Features";
import Chart from "../../components/chart/Chart";
import { salesData } from "../../data";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

function Home() {
  return (
    <>
      <div className="home">
        <Features />
        <Chart title="Month Sales" data={salesData} dataKey="sale" grid />
        <div className="home__widgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </>
  );
}

export default Home;
