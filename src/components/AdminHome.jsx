import React, { Component } from 'react'
// import Updatebook from './Updatebook';
import pic from "./logo1.png";
// import side from "./sidlybrary.jpg"
import './style.css'
 
 
export default function AdminHome() {
  return (
    <>
 
      <nav>
        <div id='h' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <ul style={{ display: "flex", listStyleType: "none" }}>
            <img id='img' src={pic} alt={"Not FOund"} style={{ width: "50px", height: "50px", marginRight: "10px" }} />
            <li><a href='AdminHome'>Home</a></li>
            <li><a href='Addbook'>Add Book</a></li>
            <li><a href="Deletebook">Delete Book</a> </li>
            <li> <a href="Viewbook">Update Book</a></li>
            <li><a href="Searchbook">Search Book</a></li>
            <li><a href="Viewonly">View All Books</a></li>
            <li><a href='/'>logout</a></li>
          </ul>
          <h2 id='H' style={{ margin: 0 }}>Book Inventory System</h2>
        </div>
      </nav>
 
 
 
      <div style={{ display: "flex", backgroundColor: "#e48b33", height: "auto", width: "250px", marginTop: "70px" }}>
        {/* <img src={side} alt={"Welcome Admin"}></img> */}
      </div>
    </>
  )
}