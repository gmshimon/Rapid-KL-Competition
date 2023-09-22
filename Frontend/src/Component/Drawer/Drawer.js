import { FaTh, FaBars, FaTools } from 'react-icons/fa';
import { MdFeedback } from 'react-icons/md';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Drawer.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasNavbar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#" style={{ fontSize: '21px' }}>
              MaintainIQ
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  MaintainIQ
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">
                    <FaTh className="navbar-elements" />
                    Dashboard
                  </Nav.Link>
                  <Nav.Link href="/parts">
                    <FaTools className="navbar-elements" />
                    Inventory
                  </Nav.Link>
                  <Nav.Link href="/feedback">
                    <MdFeedback className="navbar-elements" />
                    Feedback
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

const Drawer = ({ children }) => {
  // console.log(children)
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    {
      path: '/parts',
      name: 'Inventory',
      icon: <FaTools />,
    },
    // {
    //   path: '/analytics',
    //   name: 'Analytics',
    //   icon: <FaRegChartBar />
    // },

    // {
    //   path: '/comment',
    //   name: 'Comment',
    //   icon: <FaCommentAlt />
    // },
    // {
    //   path: '/product',
    //   name: 'Product',
    //   icon: <FaShoppingBag />
    // },
    {
      path: '/feedback',
      name: 'Feedback',
      icon: <MdFeedback />,
    },
  ];
  return (
    <>
      {OffCanvasNavbar()}
      <div className="container1">
        <div style={{ width: isOpen ? '200px' : '50px' }} className="sidebar1">
          <div className="top_section1">
            <h1
              style={{ display: isOpen ? 'block' : 'none' }}
              className="logo1"
            >
              MaintainIQ
            </h1>
            <div
              style={{ marginLeft: isOpen ? '40px' : '0px' }}
              className="bars1"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link1"
              activeclassName="active1"
            >
              <div className="icon1">{item.icon}</div>
              <div
                style={{ display: isOpen ? 'block' : 'none' }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Drawer;
