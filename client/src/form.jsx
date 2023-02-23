import React,{useState} from "react";
import { useEffect } from "react";

export default function Getinfo(){
    const [firstname,setFirstName] = useState('');
    const [lastname,setLastName] = useState('');
    const [mail,setMail] = useState('');
    const [msg,setMsg]=useState('');

    function Data(){
        fetch('http://localhost:3001/addcustomer',{method:'post',body:JSON.stringify({firstname,lastname,mail}),headers:{'content-type':'application/json'}}).then(res=>res.json()).then(data=>setMsg(data));
    }

    return(
        <div>
            <label>First Name</label>
            <input type="text" name="firstname" onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter the firstname" required/><br></br>
            <label>Last Name</label>
            <input type="text" name="lastname" onChange={(e)=>setLastName(e.target.value)} placeholder="Enter the lastname" required/><br></br>
            <label>Mail ID</label>
            <input type="email" name="email" onChange={(e)=>setMail(e.target.value)} placeholder="Enter the Email" required/><br></br>
            <button onClick={Data} type='submit'>SUBMIT</button>
        </div>
    )
}