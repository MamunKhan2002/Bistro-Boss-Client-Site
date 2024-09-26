import React, { useEffect, useState } from 'react';
import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Autoplay, } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    const url = "reviews.json";

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className='my-4 md:my-16 max-w-[1320px] w-10/12 mx-auto'>
            <SectionTitle
                subHeading={"What Our Clients Say"}
                heading={"TESTIMONIALS"}
            ></SectionTitle>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >


                {
                    reviews.map(slide => <SwiperSlide
                        key={slide._id}
                    >
                        <div className='text-center space-y-1 md:space-y-3'>
                            <div className='flex justify-center text-4xl md:text-6xl'>
                            <ImQuotesLeft />
                            </div>
                            <div className='flex justify-center'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={slide?.rating}
                                // onChange={setRating}
                                />
                            </div>
                            <p>{slide?.details}</p>
                            <h1 className='text-xl md:text-3xl text-orange-400 font-semibold'>{slide.name}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;