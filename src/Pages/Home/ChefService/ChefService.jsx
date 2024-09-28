import image1 from '../../../assets/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div className='max-w-[1320px] w-10/12 mx-auto flex items-center bg-cover bg-center h-96  relative text-center'
            style={{

                backgroundImage: `url(${image1})`,
                // width: '100%',
                // height: '100%'
            }}

        >
            <div className='md:py-10 bg-white mx-4 px-2 md:mx-20 md:px-10 lg:px-32 '>
                <h1 className='text-xl md:text-3xl uppercase my-2 font-Cinzel font-semibold'>Bistro Boss</h1>
                <p className='text-base text-center text-balance text-[#333]'>A restaurant is an establishment that prepares and serves food and drinks to customers.Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.</p>
            </div>
        </div>
    );
};

export default ChefService;