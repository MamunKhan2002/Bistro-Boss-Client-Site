import featured_img from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Featured = () => {
    return (
        <section style={{
            backgroundImage: `url(${featured_img})`,
        }}
            className=' bg-cover bg-center bg-fixed text-white'
        >
            <div className='h-full w-full pt-3 pb-10 bg-black bg-opacity-45'>
                <SectionTitle
                    subHeading="Check it out"
                    heading="FROM OUR MENU"
                ></SectionTitle>
                <div className='md:flex items-center gap-6 max-w-[1320px] w-10/12 mx-auto '>
                    <img style={{ width: "50%" }} src={featured_img} alt="featured_img" />
                    <div className=''>
                        <p className='text-xl font-semibold mb-2'>March 20, 2023 <br />WHERE CAN I GET SOME?</p>
                        <p>Designing a good menu is a vital ingredient for your restaurant’s success. Cleverly placed mouthwatering images and strategically positioned dishes can entice customers toward your most profitable or popular offerings, driving sales and maximizing revenue.</p>
                        <button className='btn bg-opacity-0 btn-outline border-0 border-b-2 uppercase text-white mt-10'>read more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;