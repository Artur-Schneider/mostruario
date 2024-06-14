import '../styles/home.css'
import Girafinha from '../imagens/Girafinha.png'

function Home() {
    return (
    <main>
        <section className="topo-do-site">
            <div className="interface">
                <div className="flex">
                    <div className="txt-topo-site">
                        <h1>Lusha Crochê</h1>

                    <div className="img-topo-site">
                        <img src={Girafinha} alt='Conjunto Girafinha' />
                    </div>
                </div>
            </div>
            </div>
        </section>
    </main>
    )
}

export default Home