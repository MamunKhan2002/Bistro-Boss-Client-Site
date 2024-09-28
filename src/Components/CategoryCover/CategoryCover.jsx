
const CategoryCover = ({ Img, title, description }) => {
    return (
        <div
            className="hero min-h-screen w-full bg-cover bg-center"
            style={{
                backgroundImage: `url("${Img}")`,
            }}>
            {/* <div className="text-[#FFF]"></div> */}
            <div className="flex justify-center items-center text-white w-7/12 max-w-[1320px] h-2/5 bg-black bg-opacity-45">
                <div className=" text-center ">
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold font-Cinzel uppercase">{title}</h1>
                    <p className="mb-5 text-base mx-4">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryCover;