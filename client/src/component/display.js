import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Display=()=>{
    const [display, setDisplay] = useState({
        allData: ' '
    });
    useEffect(() => {
       getBlogPost();
      }, []);
  let  getBlogPost =()=>{
        axios.get('/api')
        .then((response)=>{
            const data = response.data;
            setDisplay({allData : data})
            
        })
        .catch(()=>{
            console.log("error")
        })
    }
    console.log(display)
  return (
    <div className="App">
      <h1>hidff</h1>
    </div>
  );
}

export default Display;
