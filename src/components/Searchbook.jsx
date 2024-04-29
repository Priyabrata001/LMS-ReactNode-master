import React, { useEffect } from 'react'
import { useState } from 'react'
import AdminHome from './AdminHome';
import './style.css'

export default function Viewbook() {

  const [searchTerm, setSearchTerm] = useState("");

  const [data, setData] = useState([]);
 

  useEffect(() => {
    // fetch(`https://localhost:7001/bookName?FilterQuery=${searchTerm}`)
    //   .then(response => response.json())
    //   .then((result) => {
    //     console.log(result)
    //     setData(result)
    //   })
  }, [])

  const searchItem =()=>{
    fetch(`https://localhost:7001/bookName?FilterQuery=${searchTerm}`)
      .then(response => response.json())
      .then((result) => {
        console.log(result)
        setData(result)
      })
  }

  return (
    <>  <AdminHome></AdminHome>

    <div id='d'>
    
      <h1>Searchbook</h1>
      <div >

        <input type="text" placeholder='Enter Book Name or ISBN or Auther Name' onChange={event => { setSearchTerm(event.target.value) }} />
        <button onClick={searchItem}>Search</button>
      </div> <br />
      <table border={3} align="center">
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>


          {/* {(data.filter((d) => {console.log("Current data:", d);
            // if (searchTerm === "") {
            //   return d
            // }
            // else if (d.ISBN.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            //   return d
            // }
            // else if (d.bname.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            //   return d
            // }
            // else if (d.aname.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            //   return d
            // }
            // else if (d.price.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            //   return d
            // }

          }) */}
          {data.map((d) => (
            <tr key={d.isbn}>
              <td>{d.isbn}</td>
              <td>{d.bookName}</td>
              <td>{d.autherName}</td>
              <td>{d.price}</td>
              <td>{d.quntity}</td>
            </tr>
            )
            )}
        </tbody>
      </table>
    </div>
    </>
  )
}
