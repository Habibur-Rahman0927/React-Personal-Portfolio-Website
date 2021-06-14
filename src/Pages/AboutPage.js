import React from 'react';
import Title from '../Component/Title';
import ImageSection from './ImageSection';
import SkillsSection from '../Component/SkillsSection';
import ServicesSection from '../Component/ServicesSection';
import desgin from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Title title={"About Me"} span={'About Me'}></Title>
            <ImageSection></ImageSection>
            <Title title={"My Skills"} span={'My Skills'}></Title>
            <div className="skils-container">
                <SkillsSection skill={'HTML'} progress={'95%'} width={"95%"} ></SkillsSection>
                <SkillsSection skill={'CSS'} progress={'85%'} width={"85%"} ></SkillsSection>
                <SkillsSection skill={'BOOTSTRAP'} progress={'80%'} width={"80%"} ></SkillsSection>
                <SkillsSection skill={'JQUERY'} progress={'60%'} width={"60%"} ></SkillsSection>
                <SkillsSection skill={'JAVASCRIPT'} progress={'70%'} width={"70%"} ></SkillsSection>
                <SkillsSection skill={'REACT'} progress={'85%'} width={"85%"} ></SkillsSection>
                <SkillsSection skill={'REACT AUTH'} progress={'65%'} width={"65%"} ></SkillsSection>
                <SkillsSection skill={'NODE JS'} progress={'60%'} width={"60%"} ></SkillsSection>
                <SkillsSection skill={'EXPRESS JS'} progress={'75%'} width={"75%"} ></SkillsSection>
                <SkillsSection skill={'MONGODB DATABASE'} progress={'80%'} width={"80%"} ></SkillsSection>
            </div>
            <Title title={"Services"} span={'Services'}></Title>
            <div className="services-container">
            <ServicesSection image={desgin} title={'Web design'} text={'I am expert web design and developing.'}></ServicesSection>
            <ServicesSection image={intelligence} title={'Web development'} text={'I am expert web design and developing.'}></ServicesSection>
            <ServicesSection image={gamedev} title={'Full stack site'} text={'I am expert web design and developing.'}></ServicesSection>
            </div>
        </div>
    );
};

export default AboutPage;