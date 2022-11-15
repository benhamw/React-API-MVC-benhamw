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

var flyrod = {};
// eslint-disable-next-line no-unused-vars
var flyrods = [];
var setShowCreate = null;
var getShowCreate = null;
var postData = null;

const CreateForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicMaker">
        <Form.Label>Maker</Form.Label>
        <Form.Control
          autoComplete="maker.name"
          type="text"
          placeholder=""
          defaultValue=""
          onChange={(e) => (maker.name = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="model">
        <Form.Label>Model</Form.Label>
        <Form.Control
          autoComplete="model"
          type="text"
          placeholder=""
          defaultValue=""
          onChange={(e) => (model = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="lengthFeet">
        <Form.Label>Length</Form.Label>
        <Form.Control
          autoComplete="lengthFeet"
          type="text"
          placeholder="0"
          defaultValue="0"
          onChange={(e) => (lengthFeet = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="sections">
        <Form.Label>Sections</Form.Label>
        <Form.Control
          autoComplete="sections"
          type="text"
          placeholder="0"
          defaultValue="0"
          onChange={(e) => (sections = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="lineWeight">
        <Form.Label>Line Wt</Form.Label>
        <Form.Control
          autoComplete="lineWeight"
          type="text"
          placeholder=""
          defaultValue=""
          onChange={(e) => (lineWeight = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="yearMade">
        <Form.Label>Year Made</Form.Label>
        <Form.Control
          autoComplete="yearMade"
          type="text"
          placeholder=""
          defaultValue=""
          onChange={(e) => (yearMade = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="type">
        <Form.Label>Type</Form.Label>
        <Form.Control
          autoComplete="type"
          type="text"
          placeholder=""
          defaultValue=""
          onChange={(e) => (type = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="construction">
        <Form.Label>Construction</Form.Label>
        <Form.Control
          autoComplete="construction"
          type="text"
          placeholder=""
          defaultValue=""
          onChange={(e) => (construction = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="rodImage">
        <Form.Label>Rod Image</Form.Label>
        <Form.Control
          autoComplete="rodImage"
          type="text"
          placeholder=""
          defaultValue=""
          onChange={(e) => (rodImage = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="makerId">
        <Form.Label>Maker ID</Form.Label>
        <Form.Control
          autoComplete="makerId"
          type="text"
          placeholder="0"
          defaultValue="0"
          onChange={(e) => (makerId = e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" block="true">
        Save
      </Button>
    </Form>
  );
};

function CreateFormSubmit(e) {
  e.preventDefault();
  setShowCreate(false);

  if (model === null) return;

  flyrods.makerId = makerId;
  flyrods.model = model;
  flyrods.lengthFeet = lengthFeet;
  flyrods.sections = sections;
  flyrods.lineWeight = lineWeight;
  flyrods.yearMade = yearMade;
  flyrods.type = type;
  flyrods.construction = construction;
  flyrods.rodImage = rodImage;
  // console.log(title, studioId, mainCharacterId);

  postData(flyrod);

  // console.log(videoGame, videoGames);

  makerId = null;
  model = null;
  lengthFeet = null;
  sections = null;
  lineWeight = null;
  yearMade = null;
  type = null;
  construction = null;
  rodImage = null;

  return;
}

export default function Create(props) {
  if (!props.show) {
    return null;
  }

  flyrod = props.data[0];
  flyrods = props.data[1];
  setShowCreate = props.data[2];
  getShowCreate = props.data[3];
  postData = props.data[4];

  // console.log(props, getShowCreate());

  var handleClose = () => {
    setShowCreate(false);
    return;
  };

  return (
    <div>
      <Modal id="createModal" show={getShowCreate} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Create</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateForm onSubmit={CreateFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
