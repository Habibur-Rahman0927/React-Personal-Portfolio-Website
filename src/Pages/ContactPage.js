import React from 'react';
import ContactItem from '../Component/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../Component/Title';

const ContactPage = () => {
    return (
        <div>
            <div className="title">
                <Title title={'About Me'} span={'About Me'} />
            </div>

            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7289.142505088172!2d90.31701162295458!3d24.010912738321167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dda343fb798b%3A0x8eb85c599592cb2b!2sKonabari!5e0!3m2!1sen!2sbd!4v1623592953410!5m2!1sen!2sbd" style={{ border: "0px", height: "450", width: "600" }} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="contect-sect">
                    <ContactItem icon={phone} text1={"+8801643369104"} text2={"+8801751149979"} title={"Phone"}></ContactItem>
                    <ContactItem icon={email} text1={"mdhabibur927543@gmail.com"} text2={"habibur.rahman.0927@gmail.com"} title={"Email"}></ContactItem>
                    <ContactItem icon={location} text1={"Dhaka, Bangladesh"} text2={"Konabari, Gazipur"} title={"Address"}></ContactItem>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;