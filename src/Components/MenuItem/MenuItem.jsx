

const MenuItem = ({ Item }) => {
    const { name, image, recipe, price } = Item;
    return (
        <div className="flex gap-4">
            <img style={{ width: "100px", borderRadius:"0 200px 200px 200px" }} src={image} alt="" />
            <div>
                <h3 className="text-xl font-medium">{name}---------------</h3>
                <p className="text-[#333]">{recipe}</p>
            </div>
            <p className="text-yellow-400">${price}</p>
        </div>
    );
};

export default MenuItem;