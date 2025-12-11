import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from "swiper/modules";
import 'swiper/css/scrollbar';
function HomePageCarusel() {
    return (
        <div>
            <Swiper
                modules={[Navigation,Pagination]}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                spaceBetween={50}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img width="100%" className='corusel-image' height="500px" src="https://picsum.photos/id/310/300/300" alt="" />
                </SwiperSlide>
                <SwiperSlide> <img width="100%" className='corusel-image' height="500px" src="https://picsum.photos/id/312/300/300" alt="" /></SwiperSlide>
                <SwiperSlide> <img width="100%" className='corusel-image' height="500px" src="https://picsum.photos/id/313/300/300" alt="" /></SwiperSlide>
                <SwiperSlide> <img width="100%" className='corusel-image' height="500px" src="https://picsum.photos/id/314/300/300" alt="" /></SwiperSlide>
                <button className="custom-prev">Prev</button>
                <button className="custom-next">Next</button>
            </Swiper>
        </div>
    )
}

export default HomePageCarusel