import '../styles/slider.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect } from 'react'
import Girafinha from '../imagens/Girafinha.png'
import Coelinho from '../imagens/Coelinho.png'
import Gatinho from '../imagens/Gatinho.png'
import Chocalhos from '../imagens/Chocalhos.png'

function Slider() {
    const [slidePerView, setSlidePerView] = useState(1)
    const data = [
        {id: '1', image: Girafinha},
        {id: '2', image: Chocalhos},
        {id: '3', image: Gatinho},
        {id: '4', image: Coelinho},
    ]

    useEffect(() => {
        function handleResize(){
            if(window.innerWidth < 720) {
                setSlidePerView(1);
            } else {
                setSlidePerView(1);
            }
        }
        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])

    return (
        <>
        <Swiper id='swiper'
        slidesPerView={slidePerView}
        pagination={{clickable: true}}
        navigation
        >
            {data.map( (item) => (
                <SwiperSlide key={item.id}>
                <img
                src={item.image}
                alt="Slider"
                className="slide-item"
                />
                </SwiperSlide>
            ))}
        </Swiper>
        </>
    )
}

export default Slider