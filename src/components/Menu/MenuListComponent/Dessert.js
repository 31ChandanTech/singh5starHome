import React from 'react';
import Menuitems from './Menuitems';
import ListItems from "../Dessert.json";
import MenuHeader from '../MenuHeader';

const Dessert = () => {
    const IdTime = new Date().getTime().toString();
    return (
        <>
            <MenuHeader />
            <Menuitems key={IdTime} top="" listitems={ListItems} bottom="" />
        </>
    )
}

export default Dessert;