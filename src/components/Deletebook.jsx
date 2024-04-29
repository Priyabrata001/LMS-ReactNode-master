import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import './style.css'
import AdminHome from './AdminHome'

export default function Deletebook() {
  const{register,handleSubmit}=useForm()

  const [data, setData] = useState("")

  const sendData=(a)=>{
    axios.delete(`https://localhost:7001/api/Books/${a}`)
    //console.log(a)
    alert("Book Information Deleted succesfully")
  }

  return (
    <> <AdminHome></AdminHome>
    <div id='d'>
     
      <form >
       <h1>Deletebook</h1> 
        <label >Enter Book Name :</label> 
        <input type="text" name='bookName' onChange={(e) => setData(e.target.value)} placeholder="Enter BookName for Delete Book"/><br/>
        <label></label><button type="submit" onClick={() => sendData(data)}>Submit</button><button type="reset">Reset</button><br/><br/>
        </form>
        {/* <h1>   onSubmit={handleSubmit(sendData)}   The Book Information Of {data} is Deleted</h1> */}
    </div>
    </>
  )
}
