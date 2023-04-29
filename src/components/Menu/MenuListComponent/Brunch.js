import React from 'react';
import Menuitems from './Menuitems';
import ListItems from "../Brunch.json";
import MenuHeader from '../MenuHeader';

const Brunch = () => {
    const IdTime = new Date().getTime().toString();
    return (
        <>
            <MenuHeader />
            <Menuitems key={IdTime} top="AVAILABLE SATURDAY-SUNDAY | 11AM - 2:30PM" listitems={ListItems} bottom="" />
        </>
    )
}

export default Brunch;