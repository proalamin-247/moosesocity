import React from 'react';
import Footer from '../Sheard/Footer/Footer';
import ClaimArea from './ClaimArea/ClaimArea';
import NewsLetter from './NewsLetter/NewsLetter';
import './Home.css'

const Home = () => {
    return (
        <div>
            <ClaimArea></ClaimArea>
            <NewsLetter></NewsLetter> 
            <div class="divider dd"></div> 
            <Footer></Footer>
        </div>
    );
};

export default Home;