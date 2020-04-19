import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Decor() {
  const [decor, setDecor] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadDecor();
  }, []);

  function loadDecor() {
    API.getDecor()
      .then((res) => setDecor(res.data))
      .catch((err) => console.log(err));
  }

  function deleteDecor(id) {
    API.deleteDecor(id)
      .then((res) => loadDecor())
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      formObject.image &&
      formObject.room &&
      formObject.item &&
      formObject.price &&
      formObject.store
    ) {
      API.saveDecor({
        image: formObject.image,
        room: formObject.room,
        item: formObject.item,
        price: formObject.price,
        store: formObject.store,
      })
        .then((res) => loadDecor())
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6 ">
          <form>
            <Input
              onChange={handleInputChange}
              name="image"
              placeholder="image"
              value={formObject.image}
            />
            <Input
              onChange={handleInputChange}
              name="room"
              placeholder="room"
              value={formObject.room}
            />
            <Input
              onChange={handleInputChange}
              name="item"
              placeholder="item"
              value={formObject.item}
            />
            <Input
              onChange={handleInputChange}
              name="price"
              placeholder="price"
              value={formObject.price}
            />
            <Input
              onChange={handleInputChange}
              name="store"
              placeholder="store"
              value={formObject.store}
            />
            <FormBtn
              enabled={
                !(
                  formObject.image &&
                  formObject.room &&
                  formObject.item &&
                  formObject.price &&
                  formObject.store
                )
              }
              onClick={handleFormSubmit}
            >
              Submit
            </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>My Rooms</h1>
          </Jumbotron>
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
                  <DeleteBtn onClick={() => deleteDecor(decor._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3> No Rooms found</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Decor;
