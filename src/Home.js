import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Home() {
    const [name, setname] = useState("text");
    const [id, setid] = useState();
    return (
        <center><div>
            <h2>Welcome Student</h2><br />
            <TextField label="Enter Name" onChange={(e) => setname(e.target.value)} /><br /><br />
            <TextField label="Enter ID" onChange={(e) => setid(e.target.value)} /><br /><br />
            <Button variant='contained' sx={{ backgroundColor: "red" }} >English</Button><br /><br />
            <Button variant='contained' sx={{ backgroundColor: "red" }} >Science</Button><br /><br />
            <Button variant='contained' sx={{ backgroundColor: "red" }} >Computer</Button><br /><br />
            <Button variant='contained' sx={{ backgroundColor: "red" }} >Math</Button><br /><br />
        </div></center >
    )
}

export default Home