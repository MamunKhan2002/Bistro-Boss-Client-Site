import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ChefRecommendCard from '../../../Components/ChefRecommendCard/ChefRecommendCard';

const ChefRecommends = () => {
    const [Menu, setMenu] = useState([]);
    const url = "menu.json"
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const ChefRecommendCards = data.slice(0, 3)
                setMenu(ChefRecommendCards)
            })
    }, [])
    return (
        <section className='my-4 md:my-16 max-w-[1320px] w-10/12 mx-auto'>
            <SectionTitle
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <div className='grid grid-cols-3 gap-4 space-y-2'>
                {
                    Menu.map(card => <ChefRecommendCard
                        card={card}
                        key={card._id}
                    ></ChefRecommendCard>)
                }
            </div>
        </section>
    );
};

export default ChefRecommends;