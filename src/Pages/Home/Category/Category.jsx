import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Images from assets folder.
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className='my-4 md:my-16 max-w-[1320px] w-10/12 mx-auto'>
            <SectionTitle
                heading={"order online"}
                subHeading={"From 11:00am to 10:00pm"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                // centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper font-Cinzel"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h1 className='text-base md:text-2xl uppercase text-center -mt-10 pb-10 text-white'>salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h1 className='text-base md:text-2xl uppercase text-center -mt-10 pb-10 text-white'>soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h1 className='text-base md:text-2xl uppercase text-center -mt-10 pb-10 text-white'>pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h1 className='text-base md:text-2xl uppercase text-center -mt-10 pb-10 text-white'>desserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h1 className='text-base md:text-2xl uppercase text-center -mt-10 pb-10 text-white'>salads</h1>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;