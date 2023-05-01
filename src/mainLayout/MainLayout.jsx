import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Shared/Header/Header';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col md={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col md={6}>
            <Outlet></Outlet>
          </Col>
          <Col md={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;