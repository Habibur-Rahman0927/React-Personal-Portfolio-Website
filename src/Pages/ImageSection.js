import React from 'react';
import about from '../img/habib-bg.png'

const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am <span> lorem Ipsum</span></h4>
                <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fuga in sit, molestiae consectetur cupiditate.</p>
                <div className="about-details">
                    <div className="left-seciton">
                        <p>Fulll Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Habibur Rahman</p>
                        <p>: 22</p>
                        <p>: Bangladeshi</p>
                        <p>: Banla, English, hindi</p>
                        <p>: Dhaka, Bangladesh</p>
                        <p>: Banladesh</p>
                    </div>
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    );
};

export default ImageSection;