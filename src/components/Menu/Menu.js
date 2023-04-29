import React from 'react';
import "./Menu.css";
import Menuitems from './MenuListComponent/Menuitems';
import ListItems from "./GoldenList.json";
import MenuHeader from './MenuHeader';

const Menu = () => {
    return (
        <div className='menu'>
            <MenuHeader />
            <Menuitems top="AVAILABLE MONDAY-FRIDAY | 5-6PM | &#x20b9;1200" listitems={ListItems} bottom="*Vegan or can be prepared vegan. Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness."/>
        </div>
    )
}

export default Menu;