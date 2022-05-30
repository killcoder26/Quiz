import React from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';

function Home() {
    axios.get('/')
        .then((res) => {
            console.log(res.data)
            console.log("DB data Fetch")
        })
        .catch((err) => console.log(err));

    return (
        <center><div id="container">
            <div className="home"><br />
                <h2>Welcome Student</h2><br />

                <a href="/english"> <Button variant='contained' size="large" sx={{ backgroundColor: "red", fontSize: "54" }} >English</Button></a><br /><br />
                <a href="/science"> <Button variant='contained' size="large" sx={{ backgroundColor: "red", fontSize: "54" }} >Science</Button></a><br /><br />
                <a href="/computer"><Button variant='contained' size="large" sx={{ backgroundColor: "red", fontSize: "54" }} >Computer</Button></a><br /><br />
                <a href="/math"><Button variant='contained' size="large" sx={{ backgroundColor: "red", fontSize: "54" }} >Math</Button></a><br /><br />
            </div>
        </div></center >
    )
}

export default Home