import React, { useState } from "react";
import { Navbar, Container, Row, Nav, Form, FormControl } from "react-bootstrap";

const NavBar = ({ filterbySearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = (e) => {
    e.preventDefault();        // يمنع الريلود
    filterbySearch(searchValue);
    // لا تمسح القيمة 👈
  };

  return (
    <Row>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">La Capitale Restaurant</div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll />

            <Form className="d-flex" onSubmit={onSearch}>
              <FormControl
                type="text"
                placeholder="ابحث.."
                className="mx-2"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />

              <button type="submit" className="btn-search">
                بحث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
