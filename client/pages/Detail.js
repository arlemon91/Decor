import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

function Detail(props) {
  const [decor, setDecor] = useState({});

  const { id } = useParams();
  useEffect(() => {
    API.getDecor(id)
      .then((res) => setDecor(res.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <div>
            <h1>
              {decor.image}
              {decor.room}
              {decor.item}
              {decor.price}
              {decor.store}
            </h1>
          </div>
        </Col>
        <Col size="md-6 sm-12">
          {decor.length ? (
            <List>
              {decor.map((decor) => (
                <ListItem key={decor._id}>
                  <Link to={"/decor/" + decor._id}>
                    <strong>
                      {decor.image}
                      {decor.room}
                      {decor.item}
                      {decor.price}
                      {decor.store}
                    </strong>
                  </Link>
                </ListItem>
              ))}
            </List>
          ) : (
            <h3> No Rooms found</h3>
          )}
        </Col>
      </Row>
      <Row>
        <Col size="md-9">
          <Link to="/decors">Back to ShowRoom</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
