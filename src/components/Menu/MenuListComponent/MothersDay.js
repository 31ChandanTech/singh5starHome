import React from 'react';
import Menuitems from './Menuitems';
import ListItems from "../MothersDay.json";
import MenuHeader from '../MenuHeader';

const MothersDay = () => {
    const IdTime = new Date().getTime().toString();
    return (
        <>
            <MenuHeader />
            <Menuitems key={IdTime} top="" listitems={ListItems} bottom="" />
        </>
    )
}

export default MothersDay;