import "./MemeLayout.css"
function MemeLayout({memeContent}){
  return(
    <div className="MemeLayoutContainer">
      <div className="ContentDisplay">
        <img src={memeContent.url} alt="Meme pic" className="ImgContent" />
        <p><b>{memeContent.name}</b></p>
      </div>
    </div>
  )
}
export default MemeLayout