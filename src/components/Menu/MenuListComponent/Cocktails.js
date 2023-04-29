import React from 'react';
import Menuitems from './Menuitems';
import ListItems from "../Cocktails.json";
import MenuHeader from '../MenuHeader';

const Cocktails = () => {
    const IdTime = new Date().getTime().toString();
    return (
        <>
            <MenuHeader />
            <Menuitems key={IdTime} top="" listitems={ListItems} bottom="" />
        </>
    )
}

export default Cocktails;