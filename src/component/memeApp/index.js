import { useEffect, useState } from "react";
import MemeList from "../memeList";
import "./MemeApp.css"

function MemeApp(){
  const [memes,setMemes]=useState([]);
  const getMemes = () =>{
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("This is the result!", result);
          setMemes(result.data.memes);
        },
        (error) => {
          console.log("Failed when fetch the meme content with error: ", error);
        }
      )
  }
  useEffect(()=>{
    getMemes();
  },[])
  const handleGetMemesButtonClicked = ()=>{
    getMemes();
  }
  return(
    <div className="memeAppContainer">
      <button onClick={handleGetMemesButtonClicked} className="BtnGetMemeDisplay">Get memes</button>
      <MemeList memesContent={memes}/>
    </div>
  )
}
export default MemeApp;