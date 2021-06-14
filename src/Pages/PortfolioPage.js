import React, { useState } from 'react';
import Title from '../Component/Title';
import Categories from '../Component/Categories';
import MenuItem from '../Component/MenuItem';
import AllPortfolios from '../Component/AllPortfolios';
const allCategories = ["All", ...new Set(AllPortfolios.map(item => item.category))];
const PortfolioPage = () => {
    const [catagores] = useState(allCategories);
    const [menu, setMenu] = useState(AllPortfolios);
    const filter = category =>{
        if(category ==="All"){
            setMenu(AllPortfolios);
            return;
        }
        const filterData = AllPortfolios.filter( item =>{
            return item.category === category
        });
        setMenu(filterData);
    }
    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolio'} span={'Portfolio'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={catagores}></Categories>
                <MenuItem menuItem={menu}></MenuItem>

            </div>
        </div>
    );
};

export default PortfolioPage;