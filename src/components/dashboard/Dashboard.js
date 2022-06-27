import Header from "../header/Header";
import moment from 'moment';
import React, { useState } from "react";
import { Bar } from 'react-chartjs-2';
import SideNavigation from "../sidebar/SideNavigation";
import { Col, Row, Button, Collapse, CardBody, Card } from "reactstrap";
import { FaChevronDown, FaChevronUp, FaEllipsisV } from "react-icons/fa";
import DateRangeFilter from "../daterange/DateRangeFillter";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../dashboard/Dashboard.scss';

import Calendar from "../../assets/calendar/calendar.png";
import Hint from "../../assets/Help/Help.png";
import BestProduct from "../../assets/NoPath-Copy/NoPath-Copy.png";
import Chart from "../../assets/Sales-Turnover/Sales-Turnover.png";
import DownArrow from "../../assets/DownArrow/DownArrow.png";
import Items from "../items/Items";

function Dashboard() {
  moment.locale('id');

  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginTop: "30px",
      marginLeft: "24px",
      marginRight: "32px",
      width: "100%",
    },
  };

  // Value for product
  const products = 4;

  // Chart.js configuration
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const nett = [17000, 19000, 23000, 20000, 21000, 24000];
  // const gross = [19000, 20000, 24000, 22000, 23000, 25000];
  // const apv = [18000, 20000, 24000, 21000, 22000, 25000];
  // const upt = [7.98, 8.00, 9.00, 8.55, 9.25, 10.00];

  const data = {
    labels: labels,
    datasets: [
      {
        barPercentage: 0.5,
        barThickness: 25,
        label: 'Nett',
        data: nett,
        backgroundColor: 'rgba(55, 176, 76)',
      },
      {
        type: 'line',
        label: 'Line Dataset',
        data: nett,
        fill: false,
        borderColor: 'rgba(255, 232, 84, 1)'
      }
    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        xAxes: [{
          gridLines: {
            offsetGridLines: true
          }
        }]
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart'
        }
      }
    },
  };

  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();

  const onChange = ranges => {
    setStartDate(ranges.startDate);
    setEndDate(ranges.endDate);
  };

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Header />
      <div className="main-dashboard" style={styles.contentDiv}>
        <SideNavigation></SideNavigation>
        <div className="main-content" style={styles.contentMargin}>
          <Row className="title-line">
            <Col xl="7" className="dashboard-title-box">
              <p className="dashboard-text">Dashboard</p>
            </Col>
            <Col xl="5" className="date-box">
              {/* <Row className="date-content"> */}
              <Button onClick={toggle} style={{ marginBottom: '1rem' }} className="date-content">
                <Col className="calendar-icon">
                  <img src={Calendar} alt="" />&nbsp;&nbsp;&nbsp;Period&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{moment.utc(startDate).utcOffset(7).format('DD MMMM YYYY')} - {moment.utc(endDate).utcOffset(7).format('DD MMMM YYYY')}
                </Col>
                <FaChevronDown className="down-arrow-icon" xl="2" />
              </Button>
            </Col>
          </Row>
          <Collapse hidden={isOpen}>
            <Card className="date-line">
              <CardBody><DateRangeFilter onChange={onChange} /></CardBody>
            </Card>
          </Collapse>
          <Row className="market-line">
            <Col>
              <p className="market-text">MARKET INSIGHT</p>
            </Col>
            <Col>
              <Row className="hint-group" >
                <Col className="hint-icon"><img src={Hint} alt="" /></Col>
                <Col className="hint-text"><a className="link" href="/">Click here for help</a></Col>
                <Col className="up-icon"><FaChevronUp /></Col>
              </Row>
            </Col>
          </Row>
          <Row className="sales-turnover-group">
            <Col>
              <Row className="sales-turnover-title-group">
                <Col className="sales-turnover-text">Sales Turnover</Col>
                <Col className="dot-icon"><FaEllipsisV /></Col>
              </Row>
              <Row className="sales-turnover-content-group">
                <Col className="sales-turnover-nominal">
                  <Row>RP. 3,600,000</Row>
                  <Row className="sales-turnover-detail"><img src={DownArrow} alt="" /> 13.8% last period in products sold</Row>
                </Col>
                <Col><img src={Chart} alt="" /></Col>
              </Row>
            </Col>
          </Row>
          <Row className="main-group">
            <Col xl="6" className="chart-group">
              <Row className="title-chart-group">
                <Col className="title">AVERAGE PURCHASE VALUE</Col>
                <Col>
                  <Row className="date-group">
                    <Col className="date-chart-box"><p className="date-chart-text">Last 6 months&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FaChevronDown className="down-arrow-icon" xl="2" /></p></Col>
                    <Col className="dot-icon"><FaEllipsisV /></Col>
                  </Row>
                </Col>
              </Row>
              <Row className="first-item-group">
                <Bar data={data} options={config} />
              </Row>
            </Col>
            <Col xl="6">
              <Row className="detail-group">
                <Col className="best-seller-group">
                  <Row className="title-group">
                    <Col className="title">Best Selling SKU</Col>
                    <Col className="dot-icon"><FaEllipsisV /></Col>
                  </Row>
                  <Row className="first-item-group">
                    <Col><img src={BestProduct} alt="" /></Col>
                    <Col className="detail-product">
                      <Row>
                        <Col>
                          <Row className="product-name">[Nama Produk]</Row>
                          <Row className="product-detail">
                            <Col>Rp. XXX</Col>
                            <Col>[jml terjual]</Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  {
                    [...Array(products)].map((elementInArray, index) => (
                      <Items products={index} key={index} />
                    ))
                  }
                  
                </Col>
                <Col className="top-competitor-group">
                  <Row className="title-group">
                    <Col className="title">Top Competitor SKU</Col>
                    <Col className="dot-icon"><FaEllipsisV /></Col>
                  </Row>
                  <Row className="first-item-group">
                    <Col><img src={BestProduct} alt="" /></Col>
                    <Col className="detail-product">
                      <Row>
                        <Col>
                          <Row className="product-name">[Nama Produk]</Row>
                          <Row className="product-detail">
                            <Col>Rp. XXX</Col>
                            <Col>[jml terjual]</Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  {
                    [...Array(products)].map((elementInArray, index) => (
                      <Items products={index} key={index} />
                    )
                    )
                  }
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Dashboard;