import '../styles/header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <section className="header">
            <div className="interface">
                <div className="logo">
                    <Link to="/">
                        <img src={""} alt="Logo Lusha" />
                    </Link>
                </div>
                <nav className="menu-desktop">
                    <ul>
                        <li><Link to="/page01" rel="next">Conjunto Girafinha</Link></li>
                        <li><Link to="/page01" rel="next">Conjunto Gatinho</Link></li>
                        <li><Link to="/page01" rel="next">Conjunto Coelinho</Link></li>
                        <li><Link to="/page01" rel="next">Conjunto Leãozinho</Link></li>
                    </ul>
                </nav>
                <div className="contato">
                    <a href="https://www.instagram.com/lusha.croche/" target="_blank" rel="external">
                        <button>Contato</button>
                    </a>
                </div>
            </div>
        </section>
        </header>
    )
}

export default Header