import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';
import Card from '@material-ui/core/Card';
const Frontform = () => {
    let defaultState ={
        title:'',
        body:'',
         

    } 
    const [state, setState] = useState(defaultState);
    
    const [myFile, setMyFile] = useState(null);
    


  const handleTitle = (event) => {
    let temp = { ...state };
    temp.title = event.target.value;
    setState(temp);
  };
  const handleBody = (event) => {
    let temp = { ...state };
    temp.body = event.target.value;
    setState(temp);
  };
  
  const fileHandler = (e) =>{
  
    setMyFile( e.target.files[0]);

  }

 const submit =(event)=>
 {
   event.preventDefault();
  
   const payload = new FormData() 
   payload.append('Content-Type', 'multipart/form-data')
   payload.append('myFile', myFile)
   payload.append('title',state.title)
   payload.append('body',state.body)
  

axios.post( "/api/single", payload)
.then((res)=>{
          console.log(res.statusText)

          
         setState(defaultState)
         setMyFile('')
         
         console.log('the data has sent to the server')

})
.catch((err)=>{
  console.log(err)
})
 


 }
console.log(state,"rahul")
  return (
    <div className="App">
        <form onSubmit={submit} encType="multipart/form-data" >
        <h1>welcome</h1>
      <Grid container direction="row" justify="center" alignItems="center" className="form-input">
        
        <Grid item xs={6} sm={1}>
          title
        </Grid>
        <Grid item xs={6} sm={1}>
          <input  type="text" name="title" value={state.title} onChange={handleTitle}/>
        </Grid>
      </Grid>
      <br />
      <Grid container direction="row" justify="center" alignItems="center" className="form-input">
        <Grid item xs={6} sm={1}>
          body
        </Grid>
        <Grid item xs={6} sm={1}>
        <input  type="text"  name="body" value={state.body} onChange={handleBody}/>
        </Grid>
        
      </Grid>

      <br/> 
      <Grid container direction="row" justify="center" alignItems="center" className="form-input">
        <Grid item xs={6} sm={1}>
          File Upload
        </Grid>
        <Grid item xs={6} sm={1}>
        <input  type="file" name="myFile" onChange={fileHandler} placeholder="File upload"/>
        </Grid>
        
      </Grid>

      <br />

      <button >submit</button>
      </form>
    </div>
  );
};

export default Frontform;
