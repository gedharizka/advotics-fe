import React from "react";
import LogoSmall from "../../assets/logo-small.png";
import Logo from "../../assets/logo.png";
import Profile from '../../assets/Profile/Profile.png';
import Logout from '../../assets/logout/logout.png';
import {
  Container,
  Row,
  Col,
} from "reactstrap";

import './Header.scss';

const Header = () => {
  return (
    <Container fluid>
      <Row className="header-content">
        <Col>
          <Row className="logo-section">
            <Col><img src={Logo} alt="" className="logo" /></Col>
            <Col className="poweredby">powered by</Col>
            <Col className="navbar"><img src={LogoSmall} alt="" className="small-logo" /></Col>
          </Row>
        </Col>
        <Col>
          <Row className="profile-section">
            <Col>
              <Row className="username">Username</Row>
              <Row className="company">Company Name</Row>
            </Col>
            <Col><img src={Profile} alt="" /></Col>
            <Col className="logout-icon"><img src={Logout} alt="" /></Col>
          </Row>
        </Col>
      </Row>
    </Container>

  );
};

export default Header;