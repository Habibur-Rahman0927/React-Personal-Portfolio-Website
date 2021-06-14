import React from 'react';

const Title = ({title, span}) => {
    return (
        <div className="Title">
            <h3>
                {title}
                <span> {span}</span>
            </h3>
        </div>
    );
};

export default Title;