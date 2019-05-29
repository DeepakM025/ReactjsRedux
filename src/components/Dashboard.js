import React from "react";
import DoughnutChart from "./DoughnutChart";
import Sidebar from "./Sidebar";
import Header from "./Header";
import HorizantalBar from "./HorizantalBar";
import PieChart from "./Pie";

class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pagename: "Dashboard"
    };
  }

  render() {
    return (
      <div className="row m-0">
        <Sidebar />
        <div className="main__content row m-0">
          <Header page={this.state.pagename} />
          <div className="row pl-5 pr-5 m-0">
            <div className="col-lg-6 mb-2">
              <div className="chart__wrapper">
                <DoughnutChart />
              </div>
            </div>
            <div className="col-lg-6 mb-2">
              <div className="chart__wrapper">
                <PieChart />
              </div>
            </div>
            {/* <div className="col-lg-4 mb-2">
              <div className="chart__wrapper">
                <DoughnutChart />
              </div>
            </div> */}
            <div className="col-lg-10 ml-auto mr-auto pt-5 pb-5">
              <HorizantalBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
