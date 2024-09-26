
const ChefRecommendCard = ({ card }) => {
    const { image, recipe, name } = card;
    return (
        <div className="card rounded-none bg-[#F3F3F3] shadow-xl">
            <figure >
                <img
                    src={image}
                    alt={name}
                     />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className=" px-4 py-2 mt-2 border-b-2 border-[#BB8506] bg-[#E8E8E8] uppercase text-[#BB8506] hover:bg-[#1F2937] duration-700">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommendCard;