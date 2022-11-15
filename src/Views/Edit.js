import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

var model = null;
var lengthFeet = null;
var sections = null;
var lineWeight = null;
var yearMade = null;
var type = null;
var construction = null;
var rodImage = null;
var makerId = null;
var maker = null;

var idx = null;
var id = null;
// eslint-disable-next-line
var flyrod = {};
// eslint-disable-next-line
var setFlyrod = null;
var flyrods = [];
// eslint-disable-next-line
var setFlyrods = null;
var setShow = null;
var getShow = null;
var putdata = null;

const EditForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicMaker">
        <Form.Label>Maker</Form.Label>
        <Form.Control
          autoComplete="maker.name"
          type="text"
          placeholder={flyrods[idx].maker.name}
          defaultValue={flyrods[idx].maker.name}
          onChange={(e) => (maker.name = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="model">
        <Form.Label>Model</Form.Label>
        <Form.Control
          autoComplete="model"
          type="text"
          placeholder={flyrods[idx].model}
          defaultValue={flyrods[idx].model}
          onChange={(e) => (model = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="lengthFeet">
        <Form.Label>Length</Form.Label>
        <Form.Control
          autoComplete="lengthFeet"
          type="text"
          placeholder={flyrods[idx].lengthFeet}
          defaultValue={flyrods[idx].lengthFeet}
          onChange={(e) => (lengthFeet = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="sections">
        <Form.Label>Sections</Form.Label>
        <Form.Control
          autoComplete="sections"
          type="text"
          placeholder={flyrods[idx].sections}
          defaultValue={flyrods[idx].sections}
          onChange={(e) => (sections = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="lineWeight">
        <Form.Label>Line Wt</Form.Label>
        <Form.Control
          autoComplete="lineWeight"
          type="text"
          placeholder={flyrods[idx].lineWeight}
          defaultValue={flyrods[idx].lineWeight}
          onChange={(e) => (lineWeight = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="yearMade">
        <Form.Label>Year Made</Form.Label>
        <Form.Control
          autoComplete="yearMade"
          type="text"
          placeholder={flyrods[idx].yearMade}
          defaultValue={flyrods[idx].yearMade}
          onChange={(e) => (yearMade = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="type">
        <Form.Label>Type</Form.Label>
        <Form.Control
          autoComplete="type"
          type="text"
          placeholder={flyrods[idx].type}
          defaultValue={flyrods[idx].type}
          onChange={(e) => (type = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="construction">
        <Form.Label>Construction</Form.Label>
        <Form.Control
          autoComplete="construction"
          type="text"
          placeholder={flyrods[idx].construction}
          defaultValue={flyrods[idx].construction}
          onChange={(e) => (construction = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="rodImage">
        <Form.Label>Rod Image</Form.Label>
        <Form.Control
          autoComplete="rodImage"
          type="text"
          placeholder={flyrods[idx].rodImage}
          defaultValue={flyrods[idx].rodImage}
          onChange={(e) => (rodImage = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="makerId">
        <Form.Label>Maker ID</Form.Label>
        <Form.Control
          autoComplete="makerId"
          type="text"
          placeholder={flyrods[idx].makerId}
          defaultValue={flyrods[idx].makerId}
          onChange={(e) => (makerId = e.target.value)}
        />
      </Form.Group>


      <Button variant="primary" type="submit" block="true">
        Save
      </Button>
    </Form>
  );
};

export default function Edit(props) {
  if (!props.show) {
    return null;
  }

  idx = props.data[0];
  id = props.data[1];
  flyrod = props.data[2];
  setFlyrod = props.data[3];
  flyrods = props.data[4];
  setFlyrods = props.data[5];
  setShow = props.data[6];
  getShow = props.data[7];
  putdata = props.data[8];

  // console.log(props);

  var handleClose = () => {
    setShow(false);
    return;
  };

  const onEditFormSubmit = (e) => {
    e.preventDefault();
    setShow(false);

    if (makerId !== null) flyrods[idx].makerId = makerId;
    if (model !== null) flyrods[idx].model = model;
    if (lengthFeet !== null) flyrods[idx].lengthFeet = lengthFeet;
    if (sections !== null) flyrods[idx].sections = sections;
    if (lineWeight !== null) flyrods[idx].lineWeight = lineWeight;
    if (yearMade !== null) flyrods[idx].yearMade = yearMade;
    if (type !== null) flyrods[idx].type = type;
    if (construction !== null) flyrods[idx].construction = construction;
    if (rodImage !== null) flyrods[idx].rodImage = rodImage;
    // console.log(title, studioId, mainCharacterId);

    makerId = null;
    model = null;
    lengthFeet = null;
    sections = null;
    lineWeight = null;
    yearMade = null;
    type = null;
    construction = null;
    rodImage = null;

    putdata(flyrods[idx], id);

    return;
  };

  return (
    <div>
      {/* <h1>{flyrods[idx].model}</h1> */}
      <Modal id="myModal" show={getShow} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm onSubmit={onEditFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}