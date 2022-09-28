import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
function CardBack() {
  return (
    <div>
        
    <Table striped bordered hover size='large' style={{marginLeft:"14%",marginTop:"3%"}} >
      <thead>
        <tr>
          <th>Date</th>
          <th>P | A</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>05-09-2022</td>
          <td>P</td>

        </tr>
        <tr>
          <td>06-09-2022</td>
          <td>P</td>

        </tr>
        <tr>
          <td>07-09-2022</td>
          <td>A</td>

        </tr>
      </tbody>

      

    </Table>
    <Table striped bordered hover size='large' style={{marginLeft:"14%",marginTop:"-2%"}}>
    <thead>
        <tr>
        <th>Total Conducted</th>
          <th>Total Present</th>
          <th>Total Absent</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>4</td>
          <td>3</td>
          <td>1</td>
        </tr>
      </tbody>

    </Table>
    </div>
    
  )
}

export default CardBack