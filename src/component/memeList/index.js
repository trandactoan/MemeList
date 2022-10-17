import MemeLayout from "../memeLayout";
import "./MemeList.css"

function MemeList({memesContent}){
  const renderMemeLayout = (currentValue, index)=>{
    return(
      <MemeLayout memeContent={currentValue} key={index}/>
    )
  }
  return(
    <div className="memeContainer">
      {memesContent.map((currentValue, index)=>renderMemeLayout(currentValue,index))}
    </div>
  )
}
export default MemeList;