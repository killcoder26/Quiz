import { TextField } from '@mui/material'
import React from 'react'
import { Button } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Register() {

    const [name, setname]=useState(""); 
    const [email,setemail]=useState("");
    const [pass, setpass]=useState("");
    const [rpass, setrpass]=useState("");
    const [id, setid]=useState();
   
    const nav = useNavigate();
    const redirect = () => {
        nav('/login');
      }
    const [url,setUrl]=useState('');
    
    const registerhandler=()=>
    {
         if(name && email && pass &&(pass === rpass))
         {
             alert("posted");
             setUrl('/')
       axios.post("http://localhost:5000/register",{n:name,em:email,p:pass,i:id})
           .then((response) => {
               console.log(response.data);                             
             })
           .catch(error => console.log(error));
          
    }
    else {
        alert("failed");
        setUrl('/register')
    }
    
    }
    
    const mailhandler=(e)=>{
       setemail(e.target.value);
    }

    
    const passhandler=(e)=>{
        setpass(e.target.value);
     }

     const rpasshandler=(e)=>{
        setrpass(e.target.value);
     }

     const namehandler=(e)=>{
        setname(e.target.value);
     }
   
  return (
    <div>
         <TextField onChange={(e)=>setid(e.target.value)} value={id} label="Name" id='id'/><br/><br/>
    <TextField onChange={namehandler} value={name} label="Name" id='name'/><br/><br/>
    <TextField onChange={mailhandler} value={email} label="Your Email" id='mail'/><br/><br/>

    <TextField onChange={passhandler} value={pass} label ="Your Password" id='password'/><br/><br/>
    <TextField onChange={rpasshandler} value={rpass} label ="Re enter your Password" id='rpassword'/><br/><br/>
    <a href={url}>
    <Button onClick={registerhandler}>Register</Button></a>
     or <br/><br/>
    <a href='/'>
    <Button onClick={redirect}>Login</Button><br/><br/></a>
    </div>
  )
}

export default Register