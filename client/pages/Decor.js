import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron/Dashboard";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function Decors() {
  const [decors, setDecors] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadDecor();
  }, []);

  function loadDecor() {
    API.getDecors()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h2>Decor Showroom</h2>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          {decor.image} by {decor.room}
        </Col>
      </Row>
    </Container>
  );
}

export default Decors;
