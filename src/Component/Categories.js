import React from 'react';
// import { NavLink } from 'react-router-dom';

const Categories = ({ filter, categories }) => {
    return (
        <div className="buttons">
            {
                categories.map((cat, i) => {
                    return <button key={i} onClick={() => filter(cat)} className="btn-port">{cat}</button>
                })
            }
        </div>
    );
};

export default Categories;