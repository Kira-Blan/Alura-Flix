import "../Banner/Banner.css"

const Banner = () => {
    return <section className= "Banner">
        <img src="/computadora.avif" className="banner" alt="imagen de computadora"/>       
        <div className="banner-info">
            <img src="/wrapper-text.png" className="texto" alt="Texto descriptivo el sitio"/>
            <img src="/player.png" className="video" alt="hombre con auriculares"/>
        </div>
        </section>
}

export default Banner