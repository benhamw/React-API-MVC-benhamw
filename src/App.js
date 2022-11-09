import { useState, useEffect } from 'react';
import './App.css';
const { v4: uuidv4 } = require('uuid');

function AppGet() {
  const requestURI = 'https://localhost:7078/api/Flyrod/';

  const [flyrods, setFlyrods] = useState([]);

  useEffect(() => {
    fetch(requestURI)
      .then((response) => response.json())
      .then((data) => {
        setFlyrods(data);
        //console.log(json);
        return data;
      });
  }, []);

  console.log(flyrods);

  return flyrods;
}

function KeyGen() {
  var key = "'" + uuidv4() + "'";
  // console.log(key);
  return key;
}

export default function App() {
  var flyrods = AppGet();
  return (<h1>Hi</h1>)
  //return flyrods.map((element) => {
  //  return (
  //    <ul key={KeyGen()}>
  //      <li>
  //        <h2>Title: {element.title}</h2>
  //      </li>
  //      <li>StudioId: {element.studioId}</li>
  //      <li>MainCharacterId: {element.mainCharacterId}</li>
  //    </ul>
  //  );
  //});
}
