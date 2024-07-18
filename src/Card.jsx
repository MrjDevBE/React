import ProfilePic from './assets/MrJ.png'

function Card(){

    return(
        <div class="container">
       <div className="card">
        <img className="Card-Img" src={ProfilePic} alt="Mrj"></img>
        <h2 className="Card-Title">&copy; Mr.J</h2>
        <p className="Card-Text">This is A Sample React Project</p>

       </div>
       </div>

    );

}
export default Card