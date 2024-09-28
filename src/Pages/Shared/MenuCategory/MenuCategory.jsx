import CategoryCover from "../../../Components/CategoryCover/CategoryCover";
import MenuItem from "../../../Components/MenuItem/MenuItem";


const MenuCategory = ({ Item, Img, title, description }) => {

    return (
        <div>
            {title && <CategoryCover
                Img={Img}
                title={title}
                description={description}
            ></CategoryCover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-2  my-4 md:my-16 max-w-[1320px] w-10/12 mx-auto">
                {
                    Item?.map(Item => <MenuItem
                        Item={Item}
                        key={Item._id}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;