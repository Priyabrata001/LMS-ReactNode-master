import React,{ useEffect } from 'react'
import { useState } from 'react'
import AdminHome from './AdminHome';
import axios from 'axios';
import { Link } from 'react-router-dom';


import './style.css'

export default function Viewbook(props) {
  const[data,setData]=useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:7001/api/Books");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

//  useEffect(()=>
//    {
//        fetch("https://localhost:7001/api/Books")
//        .then(response=>response.json())
//        .then((result)=>
//        {
//          console.log(result)
//           setData(result)
//        })
//    },[])
  
  return (
    <>
    <AdminHome></AdminHome>
    <div id='d'>
        <h1>Viewbook</h1>
        <table border={3} align="center">
                <thead>
                        <tr>
                            <th>ISBN</th>
                            <th>Book Name</th>
                            <th>Author Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            {/* <th>Action</th> */}
                          
                        </tr>
                </thead>
                <tbody>
                        {data && data.map((d)=>
                        (
                          <tr key={d.ISBN}>

                            {/* <td><a href='/Viewbook'>{d.isbn}</a></td> */}
                            <td>{d.isbn}</td>
                            <td>{d.bookName}</td>
                            <td>{d.autherName}</td>
                            <td>{d.price}</td>
                            <td>{d.quntity}</td>
                            {/* <td><Link>Edit</Link></td> */}
                             
                          </tr>
                        )
                        )}
                </tbody>
            </table>   
    </div>
    </>
  )
}
