

export default function NavBar(){
    return(
        <div className="topnav">
            <div>
                <h1>RE@</h1>
            </div>
            <div className="topnav-buttons">
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <i className="fa-solid fa-bars"></i>

            </div>
      </div> 
    )
}