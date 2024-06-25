import '../styles/home.css'
import Slider from '../components/Slider'

function Home() {
    return (
    <main>
        <section className="topo-do-site">
            <div className="interface">
                <div className="flex">
                    <div className="txt-topo-site">
                        <h1>Lusha Crochê</h1>
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
                <h2 className="titulo">MINHAS <span>ESPECIALIDADES</span></h2>
                <div className="flex">
                    <div className="especialidades-box">
                        <h3>Website</h3>
                        <p>Este portfólio é um exemplo de projeto desenvolvido em um website, em que houve otimização do desempenho e responsividade do site, assegurando que funcione perfeitamente em uma variedade de dispositivos e navegadores. Além de serem incluidas animações, transições suaves e funcionalidades interativas, para melhorar ainda mais a experiência do usuário e a usabilidade do site.</p>
                    </div> 
                    <div className="especialidades-box">
                        <h3>Loja online</h3>
                        <p>Em uma loja virtual, meu foco principal é criar uma experiência de usuário otimizada e atraente para os clientes. Isso envolve a implementação de layouts responsivos e intuitivos, garantindo que a loja virtual seja acessível para todos os clientes e que os usuários possam navegar facilmente pelos produtos e realizar as suas compras.</p>
                    </div>
                    <div className="especialidades-box">
                        <h3>Blog</h3>
                        <p>Em um blog, posso desempenhar várias funções para melhorar a experiência do usuário e a estética do site. Isso inclui a criação de um layout responsivo e atraente para garantir uma ótima visualização em diferentes dispositivos. Também posso implementar recursos de navegação intuitivos para facilitar a descoberta de conteúdo pelos usuários, além de implementar botões de compartilhamento, para aumentar o engajamento do público.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Home