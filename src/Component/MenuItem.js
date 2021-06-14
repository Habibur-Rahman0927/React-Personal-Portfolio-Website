import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({menuItem}) => {
    return (
        <div className="portfolios">
            {
                menuItem.map(item =>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="" />
                            <ul className="hover-items">
                                <li>
                                    {/* <a href={item.link1}>{item.icon1}</a> */}
                                    <Link to={{ pathname: "https://github.com/Habibur-Rahman0927" }} target="_blank"  className="icon-holder">{item.icon1}</Link>
                                    <Link to={{ pathname: "https://github.com/Habibur-Rahman0927" }} target="_blank"  className="icon-holder">{item.icon2}</Link>
                                    {/* <a href={item.link2}>{item.icon2}</a> */}
                                </li>
                            </ul>
                        </div>
                        <h5>{item.title}</h5>
                        <p>Web development</p>
                    </div>
                })
            }
        </div>
    );
};

export default MenuItem;