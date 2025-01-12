import "../Header/Header.css"


function Header(){
    return <header className="header">    
    <img src="/logo.png" class="logo" alt="logo"/> 
    <div className="botones">
    <button class="home">Home</button>
    <button class="nuevo-video">Nuevo video</button>
    </div>   
    </header>               
}

export default Header