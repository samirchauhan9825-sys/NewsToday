import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import {Container } from "react-bootstrap";
import { data } from "react-router-dom";

function Sources() {
  let [source, setSource] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsdata.io/api/1/sources?apikey=pub_bd60b7e5ec9a4abab33aa27dcc4edb3c"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSource(data["results"]);
      });
  }, []);

  // console.log(source);

  return (
    <>
      <Container>
        
           <h3 className="widget-title mb-0 text-center my-5 mb-4 rounded-pill">Top <span>Sources</span></h3>
        
        <Table className="bg-white " hover size="sm">
          <thead>
            <tr>
              <th>Icon</th>
              <th>Sources Name</th>
              <th>Total Articles</th>
              <th>Website Link</th>
            </tr>
          </thead>
          <tbody>
            {source ? (
              <>
                 {source.map((value) => {
              return (
                <tr>
                  <td><img src={value.icon} style={{height:"50px", width:"50px"}} alt="" /></td>
                  <td>{value.name}</td>
                  <td>{value.total_article}</td>
                  <td><a href={value.url}>Visit us</a></td>
                </tr>
              );
            })}
              </>
            ) : (
              <>Loading details...</>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Sources;
