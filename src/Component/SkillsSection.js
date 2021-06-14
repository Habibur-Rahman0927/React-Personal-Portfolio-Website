import React from 'react';

const SkillsSection = ({skill,progress,width}) => {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <h5 className="skill-title">{skill}</h5>
                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-porgress">
                        <div className="progress">
                            <div className="inner-pregress" style={{width:width}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;