import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Components/MenuItem/MenuItem";


const PopularMenu = () => {
    const [Menu, setMenu] = useState([]);
    const url = "menu.json";
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const popularItems = data.filter(Item => Item.category === "popular")
                setMenu(popularItems)
            })

    }, [])
    // console.log(Menu);

    return (
        <section className="my-4 md:my-16 max-w-[1320px] w-10/12 mx-auto">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From our menu"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-2 md:my-10">
                {
                    Menu.map(Item => <MenuItem
                        Item={Item}
                        key={Item._id}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;