import '../styles/home.css'
import Slider from '../components/Slider'
import Girafinha from '../imagens/Girafinha.png'
import Gatinho from '../imagens/Gatinho.png'
import Coelinho from '../imagens/Coelinho.png'

function Home() {
    return (
    <main>
        <section className="topo-do-site">
            <div className="interface">
                <div className="flex">
                    <div className="txt-topo-site">
                        <h1>Lusha <br /> Crochê</h1>
                    </div>
                    <div className='slider'>
                        <h2>Destaques:</h2>
                        <Slider />
                    </div>
                </div>
            </div>
        </section>

        <section className="especialidades" id="secao1">
            <div className="interface">
                <h2 className="titulo">Conjuntos</h2>
                <div className="flex">

                    <div className="especialidades-box">
                        <img src={Coelinho} />
                    </div> 
                    <div className="especialidades-box">
                        <img src={Gatinho} />
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

export default Home