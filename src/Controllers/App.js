import { useState, useEffect } from 'react';
import FlyrodIndex from '../Views/FlyrodIndex';
import Flyrod from '../Models/Flyrod.js';

export default function App() {
  const requestURI = 'https://localhost:7078/api/Flyrod/';
  var idx = null;
  var id = null;
  const [refresh, setRefresh] = useState(() => false);
  var [data, setData] = useState(() => []);
  var flyrod = new Flyrod();
  var flyrods = data;
  var showEdit = false;
  var showCreate = false;

  // GET
  useEffect(() => {
    fetch(requestURI)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setRefresh(false);
      });
  }, [refresh]);

  flyrods = data;

  // PUT
  function PutData(dataObj, id) {
    fetch(requestURI + id, {
      method: 'PUT',
      body: JSON.stringify(dataObj),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((response) => {
      if (response.status !== 204) {
        console.log('PUT Failed', response);
        return;
      } else {
        // console.log('PUT Succeeded', response);
      }
    });
  }

    // POST
    function PostData(dataObj) {
      // console.log(dataObj);
      fetch(requestURI, {
        method: 'POST',
        body: JSON.stringify(dataObj),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      }).then((response) => {
        if (response.status !== 201) {
          console.log('POST Failed', response);
          return;
        } else {
          setRefresh(true);
          // console.log('POST Succeeded', videoGames);
        }
      });
    }
  

  // console.log('Flyrods is ', Flyrods);
  var selection = [
    idx,
    id,
    flyrod,
    flyrods,
    showEdit,
    showCreate,
    PutData,
    PostData,
  ];

  return <FlyrodIndex data={selection} />;
}
