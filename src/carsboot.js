import React from "react"
import Card from 'react-bootstrap/Card'
//import { ListGroup } from "react-bootstrap"
//import { ListGroupItem } from "react-bootstrap"
import "./App.css"
import { Button } from 'react-bootstrap';
import {tic} from './App';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Carsboot ({h1,h2,m1,m2,m3,m4,m5,m6,m7,m8}) {
  return (
    
     
<div  className="fl">

  <Card.Body>
  <Card.Text>
      {h1}
    </Card.Text>
    <h6 class="card-price text-center">${h2}<span class="period">/month</span></h6>
  </Card.Body>
  <hr></hr>
  <div className="inner ">
    <div><span>{tic}</span>{m3}</div>
    <div><span>{tic}</span>{m2}</div>
    <div><span>{tic}</span>{m3}</div>
    <div><span>{tic}</span>{m4}</div>
    <div><span>{tic}</span>{m5}</div>
    <div><span>{tic}</span>{m6}</div>
    <div><span>{tic}</span>{m7}</div>
    <div><span>{tic}</span>{m8}</div>
    <Button size="lg">
    BUTTON
  </Button>
  </div>
</div>



  )
}

export default Carsboot;




