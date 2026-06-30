import "./Marcas.scss";
import { useEffect, useRef } from "react";
import { Divider } from "../ui";
import entel from "../../assets/img/brand/entel.png";
import azure from "../../assets/img/brand/azure.png"; 
import microsoft from "../../assets/img/brand/microsoft.png";
import starlink from "../../assets/img/brand/starlink.png";
import bitdefender from "../../assets/img/brand/bitdefender.png";
import unitec from "../../assets/img/brand/unitec.png";

function Marcas() {
    const swiperRef = useRef(null);

    useEffect(() => {
        // Importar Swiper dinámicamente
        const initSwiper = async () => {
            try {
                const { default: Swiper } = await import('swiper');
                const { Navigation, Pagination, Autoplay } = await import('swiper/modules');
                
                // Importar estilos de Swiper
                await import('swiper/css');
                await import('swiper/css/navigation');
                await import('swiper/css/pagination');

                if (swiperRef.current) {
                    new Swiper(swiperRef.current, {
                        modules: [Navigation, Pagination, Autoplay],
                        slidesPerView: 2,
                        spaceBetween: 35,
                        loop: true, // Habilitar loop con suficientes slides
                        loopedSlides: 6, // Número de slides originales
                        autoplay: {
                            delay: 3000,
                            disableOnInteraction: false,
                        },
                        breakpoints: {
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 35,
                            },
                            992: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 45,
                            },
                            1400: {
                                slidesPerView: 6,
                                spaceBetween: 50,
                            }
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        }
                    });
                }
            } catch (error) {
                console.error('Error initializing Swiper:', error);
            }
        };

        initSwiper();
    }, []);

    const brands = [
        { src: entel, alt: "Entel" },
        { src: azure, alt: "Microsoft Azure" },
        { src: microsoft, alt: "Microsoft 365" },
        { src: starlink, alt: "Starlink" },
        { src: bitdefender, alt: "Bitdefender" },
        { src: unitec, alt: "Unitec" }
    ];

    // Duplicar las marcas para tener suficientes slides para el loop
    const duplicatedBrands = [...brands, ...brands, ...brands]; // 18 slides total

    return (
        <>
        <div className="brand-sec4">
                <div className="container brand-sec4__top-divider d-md-none">
                    <Divider />
                </div>
                <div className="row-12 d-flex align-items-center justify-content-center">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <h3 className="brand-title9" id="marcas-title">Nuestras Tecnologías</h3>
                    </div>
                </div>
            <div className="slider-area text-center">
                <div className="swiper brand-slider4" ref={swiperRef}>
                    <div className="swiper-wrapper">
                        {duplicatedBrands.map((brand, index) => (
                            <div className="swiper-slide" key={index}>
                                <div className="brand-box">
                                    <img src={brand.src} alt={brand.alt} />
                                </div>
                            </div>
                        ))}
                    </div>             
                </div>
            </div>
        </div>
        </>
    );
}

export default Marcas;
