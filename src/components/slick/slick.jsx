import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
    };
    return (
        <Slider {...settings} className="container py-5 rounded-lg max-w-7xl">
            <div >
                <h3>
                    <img className="rounded-2xl h-50" src="https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/ny_sng_2880.webp" alt="" />
                </h3>
            </div>
            <div>
                <h3>
                    <img className="rounded-2xl" src="https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/2880garik.webp" alt="" />
                </h3>
            </div>
            <div>
                <h3><img className="rounded-2xl" src="https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/wb_uzcard_2880_new.webp" alt="" /></h3>
            </div>
            <div>
                <h3><img className="rounded-2xl" src="https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/magic_krasotasng_2880.webp" alt="" /></h3>
            </div>
            <div>
                <h3><img className="rounded-2xl" src="https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/dostavka_sklad_uz_2880.webp" alt="" /></h3>
            </div>
            <div>
                <h3><img className="rounded-2xl" src="https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/2880_ts.webp" alt="" /></h3>
            </div>

        </Slider>
    );
}


