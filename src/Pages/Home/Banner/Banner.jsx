import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import '../../../global.css'
// import image from assets folder
import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img6 from '../../../assets/home/06.png';
import img5 from '../../../assets/home/05.png';

const Banner = () => {
    return (
        <Carousel autoPlay infiniteLoop>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img6} />
            </div>
            <div>
                <img src={img5} />
            </div>
        </Carousel>
    );
};

export default Banner;