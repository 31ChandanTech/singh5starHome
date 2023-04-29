import React from 'react';
import Menuitems from './Menuitems';
import ListItems from "../GoldenList.json";
import MenuHeader from '../MenuHeader';

const GoldenHour = () => {
  const IdTime = new Date().getTime().toString();
  return (
    <>
      <MenuHeader />
      <Menuitems key={IdTime} top="AVAILABLE MONDAY-FRIDAY | 5-6PM | &#x20b9;1200" listitems={ListItems} bottom="*Vegan or can be prepared vegan. Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness." />
    </>
  )
}

export default GoldenHour;