import { Helmet } from 'react-helmet-async';
import PagesCover from '../../Shared/PagesCover/PagesCover';
import OurMenuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/uesMenu';
import MenuCategory from '../../Shared/MenuCategory/MenuCategory';



const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(Item => Item.category === "offered");
    const dessert = menu.filter(Item => Item.category === "dessert");
    const pizza = menu.filter(Item => Item.category === "pizza");
    const salad = menu.filter(Item => Item.category === "salad");
    const soup = menu.filter(Item => Item.category === "soup");
    return (
        <div>
            <Helmet>
                <title>Bistro-Boss || Menu</title>
            </Helmet>
            <PagesCover
                Img={OurMenuImg}
                title="our menu"
                description="Would you like to try a dish?"
            ></PagesCover>

            {/* TODAY'S OFFER */}
            <SectionTitle
                subHeading={"Don't miss"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>
            <MenuCategory
                Item={offered}
            ></MenuCategory>

            {/* DESSERTS */}
            <MenuCategory
                Item={dessert}
                Img={dessertImg}
                title={"DESSERTS"}
                description={"Dessert is a course that concludes a meal. The course consists of sweet foods, such as cake, biscuit, ice cream and possibly a beverage such as dessert wine and liqueur."}
            ></MenuCategory>
            {/* pizza */}
            <MenuCategory
                Item={pizza}
                Img={pizzaImg}
                title={"PIZZA"}
                description={"Pizza Tycoon, known as Pizza Connection in Europe, is a business simulation game originally developed by the German company Cybernetic Corporation and Software 2000"}
            ></MenuCategory>
            {/* pizza */}
            <MenuCategory
                Item={salad}
                Img={saladImg}
                title={"salad"}
                description={"Pizza Tycoon, known as Pizza Connection in Europe, is a business simulation game originally developed by the German company Cybernetic Corporation and Software 2000"}
            ></MenuCategory>
            {/* salad */}
            <MenuCategory
                Item={soup}
                Img={soupImg}
                title={"soup"}
                description={"Pizza Tycoon, known as Pizza Connection in Europe, is a business simulation game originally developed by the German company Cybernetic Corporation and Software 2000"}
            ></MenuCategory>
        </div>
    );
};

export default Menu;