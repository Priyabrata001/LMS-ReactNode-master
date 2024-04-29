import React,{ useEffect } from 'react'
import { useState } from 'react'
import AdminHome from './AdminHome';
import './style.css'

export default function Viewbook() {
  // const[data,setData]=useState([]);
  
  // const[ISBN,setISBN]=useState([]);
  // const[BookName,setBookName]=useState([]);
  // const[AutherName,setAutherName]=useState([]);
  // const[Price,setPrice]=useState([]);
  // const[Quntity,setQuntity]=useState([]);
  

  // function getData(a){
  //       fetch(`https://localhost:7001/api/Books/${a}`)
  //       .then((response)=>{response.json()
  //       .then((result)=>
  //       {
  //         console.log(result)
  //          setData(result)
  //          setISBN(result[0],ISBN)
  //          setBookName(result[0],BookName)
  //          setAutherName(result[0],AutherName)
  //          setPrice(result[0],Price)
  //          setQuntity(result[0],Quntity)

  //       })
  //   })
  // }

  // function updateAppointment(ISBN) {
 
  //   let item = {BookName, AutherName, Price, Quntity}
  //   console.log(item);
  //   console.warn("item", item);
  //   fetch(`https://localhost:7001/api/Books/${ISBN}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(item)
  //   }).then((result) => {
  //     if (result.status == 204) {
  //       alert("Data updated successfully!");
  //       //getappointments()
  //     }
 
  //   })
  // }
  // useEffect(()=>    
  // {updateAppointment() });




//  useEffect(()=>
//    {
//        fetch("http://localhost:8001/view")
//        .then(response=>response.json())
//        .then((result)=>
//        {
//          console.log(result)
//           setData(result)
//        })
//    },[])
  
  //  function selectAppointment(isbn) {

  //   let item = setData[isbn];
  //   //setISBN(item.ISBN);
  //   // setpatientId(item.patientId);
  //   setBookName(item.BookName);
  //   setAutherName(item.AutherName)
  //   setPrice(item.Price);
  //   setQuntity(item.Quntity);
  //  // setpreferredMode(item.preferredMode);
   
  // }


  const [Books, setBooks] = useState([])

  const [BookName, setBookName] = useState("");
  //const [patientGender, setpatientGender] = useState("");
  const [AutherName, setAutherName] = useState("");
  const [Price, setPrice] = useState("");
  const [Quntity, setQuntity] = useState("");
  //const [appointmentId, setappointmentId] = useState(null)
  const [ISBN, setISBN] = useState(null)

  const [data,setData]=useState([]);

  useEffect(() => {
      getBooks()
  }, [])

  function getBooks() {
      fetch(`https://localhost:7001/api/Books`).then((result) => {
          result.json().then((resp) => {
            setData(resp)
              //console.warn(resp)
            //   setBooks(resp)

            //   setBookName(resp[0].bookName)
            //   //setpatientGender(resp[0].patientGender)
            //   setAutherName(resp[0].autherName)
            //   setPrice(resp[0].price)
            //   setQuntity(resp[0].quntity)
            //   //setappointmentId(resp[0].appointmentId)
            //   setISBN(resp[0].isbn)

          })
      })
  }


  function selectBook(isbnId) {

      let item = data[isbnId];
      setBookName(item.bookName);
      //setpatientId(item.patientId);
      setAutherName(item.autherName);
      setPrice(item.price)
      setQuntity(item.quntity);
      setISBN(item.isbn);
      //setpreferredMode(item.preferredMode);

  }



  function updateBook() {

      let item = { BookName, AutherName, Price, Quntity, ISBN }
      console.log(item);
      //console.warn("item", item);
      fetch(`https://localhost:7001/api/Books/${ISBN}`, {
          method: 'PUT',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
      }).then((result) => {
        console.log(result);
          if (result.status == 200) {
              alert("Data updated successfully!");
              getBooks()
          }

      })
  }

  return (
    <><AdminHome></AdminHome>
      <div>

<div>


    <div>

        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

        }}  >
            <h1>Books  Update DashBoard </h1>
        </div>




        <table className="table table-hover border"  >
            <thead>
                <tr>
                    <th scope="col">ISBN</th>
                    {/* <th scope="col">Patient Id</th> */}
                    <th scope="col">Book Name</th>
                    <th scope='col'>Auther Phone</th>
                    <th scope='col'>Price Gender</th>
                    <th scope='col'>Quantity Date</th>
                    {/* <th scope="col">Preferred Mode</th> */}
                    <th scope='col' colSpan={2}>Operations</th>
                </tr>
            </thead>
            <tbody >
                {
                    data.map((item, i) =>
                        <tr key={i}>
                            <td>{item.isbn}</td>
                            {/* <td>{item.userId}</td> */}
                            <td>{item.bookName}</td>
                            <td>{item.autherName}</td>
                            <td>{item.price}</td>
                            <td>{item.quntity}</td>
                            {/* <td>{item.preferredMode}</td> */}

                            <td><button className="btn btn-secondary" onClick={() => selectBook(i)}>Update</button></td>
                        </tr>)
                }

            </tbody>
        </table>
    </div>

    <div>
        <input type="text" value={BookName} onChange={(e) => { setBookName(e.target.value) }} placeholder="Book Name" /> <br /><br />
        <input type="text" value={AutherName} onChange={(e) => { setAutherName(e.target.value) }} placeholder="Auther Name" /> <br /><br />
        <input type="text" value={Price} onChange={(e) => { setPrice(e.target.value) }} placeholder="Price  " /> <br /><br />

        <input type="text" value={Quntity} onChange={(e) => { setQuntity(e.target.value) }} placeholder="Quantity" /> <br /><br />
        <input type="text" value={ISBN} onChange={(e) => { setISBN(e.target.value) }} placeholder="ISBN Id" /> <br /><br />
        <button className='btn btn-primary' onClick={updateBook} >Update appointment</button>

    </div>


</div>
</div>
    
    {/* <div id='d'>
        <h1>Viewbook</h1>
        <table border={3} align="center">
                <thead>
                        <tr>
                            <th>ISBN</th>
                            <th>Book Name</th>
                            <th>Author Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Upadate Book</th>
                        </tr>
                </thead>
                <tbody>
                        {data.map((d)=>
                        (
                          <tr key={d.ISBN}>

                            <td>{d.ISBN}</td>
                            <td>{d.bname}</td>
                            <td>{d.aname}</td>
                            <td>{d.price}</td>
                            <td>{d.qty}</td>
                            <td><button className="btn btn-secondary" onClick={(e) => selectAppointment(d.isbn)}>Update</button></td>
                          </tr>
                        )
                        )}
                </tbody>
            </table>   
    </div> */}
    </>
  )
}
