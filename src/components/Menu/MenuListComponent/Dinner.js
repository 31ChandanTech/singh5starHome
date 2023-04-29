import React from 'react';
import Menuitems from './Menuitems';
import ListItems from "../DinnerList.json";
import MenuHeader from '../MenuHeader';

const Dinner = () => {
    const IdTime = new Date().getTime().toString();
    return (
        <>
            <MenuHeader />
            <Menuitems key={IdTime} top="" listitems={ListItems} bottom="*Vegan or can be prepared vegan Consuming raw or undercooked meats, poultry, seafood,shellfish or eggs may increase your risk of food-borne illness." />
        </>
    )
}

export default Dinner;