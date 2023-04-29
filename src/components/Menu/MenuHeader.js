import React from 'react';
import Navbar from '../header/Navbar';

const MenuHeader = () => {
    const LinkDetails = [
        { url: "/menu/golden-hour", text: "GOLDEN HOUR" },
        { url: "/menu/dinner", text: "DINNER" },
        { url: "/menu/dessert", text: "DESSERT" },
        { url: "/menu/cocktails", text: "COCKTAILS" },
        { url: "/menu/brunch", text: "BRUNCH" },
        { url: "/menu/mothers-day-weekend", text: "MOTHER'S DAY WEEKEND" }
    ]
    return (
        <div className='menu'>
            <h1 className='menu_title'>MENU</h1>
            <nav className='navbar margin M_menu_navbar'>
                <ul>
                    <Navbar listArray={LinkDetails} />
                </ul>
            </nav>
        </div>
    )
}

export default MenuHeader;