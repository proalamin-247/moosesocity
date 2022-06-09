import React from 'react';
import Footer from '../Sheard/Footer/Footer';
import ClaimArea from './ClaimArea/ClaimArea';
import NewsLetter from './NewsLetter/NewsLetter';
import './Home.css'
import TopImg from './TopImg/TopImg';

const Home = () => {
    return (
        <div>
            <TopImg></TopImg>
            <ClaimArea></ClaimArea>
            <NewsLetter></NewsLetter> 
            <div class="divider dd"></div> 
            <Footer></Footer>
        </div>
    );
};

export default Home;