import React from 'react';
import { useState } from 'react';

import { Button } from 'react-bootstrap';
import { Fragment } from 'react';
import Edit from './Edit';
import Create from './Create';
import 'bootstrap/dist/css/bootstrap.css';


var selectionEdit = [];
var selectionCreate = [];

export default function FlyrodIndex(props) {
    var idx = props.data[0];
    var id = props.data[1];
    var flyrod = props.data[2];
    var flyrods = props.data[3];
    const [showEdit, setShowEdit] = useState(() => props.data[4]);
    const [showCreate, setShowCreate] = useState(() => props.data[5]);
    var putData = props.data[6];
    var postData = props.data[7];
    // console.log(props);


    var getShowEdit = () => {
        return showEdit;
    };

    var getShowCreate = () => {
        return showCreate;
    };
    

  return (
    <div>
        <div className="d-flex align-items-center justify-content-left">
            <Button
                onClick={(e) => {
                e.preventDefault();
                setShowCreate(true);
                selectionCreate = [
                    flyrod,
                    flyrods,
                    setShowCreate,
                    getShowCreate,
                    postData,
                ];
                // console.log(selectionCreate);
                }}
            >
                <h5>Create</h5>
            </Button>
        </div>

      <table>
        <tbody>
          {flyrods.map((item, ix) => {
            // console.log(item, ix);
            return (
              <Fragment key={item.id}>
                <tr>
                  <td>{item.model}</td>
                  <td>{item.lengthFeet}</td>
                  <td>{item.sections}</td>
                  <td>{item.lineWeight}</td>
                  <td>{item.yearMade}</td>
                  <td>{item.type}</td>
                  <td>{item.construction}</td>
                  <td>{item.rodImage}</td>
                  <td>{item.MakerId}</td>
                  <td>{item.maker.name}</td>
                  <td>
                  <div className="d-flex align-items-center justify-content-center">
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          setShowEdit(true);
                          idx = ix;
                          id = item.id;
                          selectionEdit = [
                            idx,
                            id,
                            flyrod,
                            flyrods,
                            setShowEdit,
                            getShowEdit,
                            putData,
                          ];
                        }}
                      >
                        Edit
                      </Button>
                    </div>
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
      <div>
        <Edit show={showEdit} data={selectionEdit} />
        <Create show={showCreate} data={selectionCreate} />
      </div>
    </div>
  );
}
