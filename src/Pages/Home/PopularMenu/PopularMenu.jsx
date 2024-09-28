// import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import MenuItem from "../../../Components/MenuItem/MenuItem";
import useMenu from "../../../Hooks/uesMenu";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";


const PopularMenu = () => {
    // const [Menu, setMenu] = useState([]);
    // const url = "menu.json";
    // useEffect(() => {
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             const popularItems = data.filter(Item => Item.category === "popular")
    //             setMenu(popularItems)
    //         })

    // }, [])
    // console.log(Menu);

    const [menu] = useMenu();

    const popularItems = menu.filter(Item => Item.category === "popular");
    

    return (
        <section className="">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From our menu"}
            ></SectionTitle>
            <MenuCategory
                Item={popularItems}
            ></MenuCategory>
            <div className="flex justify-center">
                <button className=' btn bg-opacity-0 btn-outline border-0 border-b-2 uppercase text-[#000] '>view full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;