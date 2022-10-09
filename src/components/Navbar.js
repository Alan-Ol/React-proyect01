import CardWidget from "../components/CardWidget"
import "../style/nav.css"

const Navbar = () => {
    return(
        <>
        <div className="menu">
            <a href="https://plataforma.coderhouse.com/cursos/44590/reactjs" className="menu-icon">COMERCIO</a>
            <div className="menu-item">
                <ul>
                    <li><a href="https://plataforma.coderhouse.com/cursos/44590/reactjs">DEPORTIVAS</a></li>
                    <li><a href="https://plataforma.coderhouse.com/cursos/44590/reactjs">BOTINES</a></li>
                    <li><a href="https://plataforma.coderhouse.com/cursos/44590/reactjs">MODA</a></li>
                    <CardWidget/>
                </ul>
            </div>

        </div>

        </>
    )
    
}

export default Navbar