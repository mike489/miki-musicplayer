import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import MusicList from "./music-list-data";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const handleDelete = (id) => {
    let item = MusicList.find((item) => item.id === id);
    // filter
    // some
    // push
    // pop
    // shift
    let index = MusicList.indexOf(item);

    console.log(index, item);
  };

  return (
    <>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>age</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            {MusicList && MusicList.length > 0
              ? MusicList.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>
                        <Button onClick={() => alert(item.id)}>Edit</Button>
                        &nbsp;
                        <Button onClick={() => handleDelete(item.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "No data available"}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Home;
