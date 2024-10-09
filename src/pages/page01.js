import '../styles/page01.css';
import Fotos from '../components/Fotos.js'
import Girafinha from '../imagens/Girafinha.png'
import Gatinho from '../imagens/Gatinho.png'
import Coelinho from '../imagens/Coelinho.png'
import Chocalhos from '../imagens/Chocalhos.png'
import { Link } from 'react-router-dom'

function Page01() {
    return (
        <main>
            <div className="flex">
                <div className='fotos'>
                    <Fotos />
                    <div className="texto">
                        <h1>CONJUNTO GIRAFINHA</h1>
                        <h2>R$ 160,00</h2>
                        <p>Conjunto blablabla blablabla bla blabla blablabla blabla bla blablabla blabla.</p>
                    </div>
                </div>
            </div>

            <section className="outros-conjuntos" id="secao1">
            <div className="interface">
                <h2 className="titulo">Outros conjuntos</h2>
                <div>
                    <Link to="girafinha">
                    <div className="especialidades-box">
                        <img src={Girafinha} />
                    </div> 
                    </Link>
                    <div className="especialidades-box">
                        <img src={Gatinho} />
                    </div>
                    <div className="especialidades-box">
                        <img src={Coelinho} />
                    </div>
                    <div className="especialidades-box">
                        <img src={Chocalhos} />
                    </div>
                    <div className="especialidades-box">
                        <img src={Girafinha} />
                    </div>
                    
                </div>
            </div>
        </section>
        </main>
    )
}

export default Page01