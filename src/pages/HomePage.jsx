import React from 'react';
import HomePagePart from 'components/Home/Home';
import Slideshow from './../components/SlideShow/SlideShow';
import css from './RegisterPage.module.css';

const Home = () => {
    
return (
    <div className={css.wrapper}>
        <div className={css.cover}>
        <Slideshow />
        </div>
        <div>
        <div className={css.formContainer}>
                <HomePagePart />
            </div>
            </div>
        </div>
)
};




export default Home;

