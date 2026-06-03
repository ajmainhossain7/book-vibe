import React from 'react';
import Banner from '../../components/homepage/Banner';
import AllBooks from '../../components/homepage/AllBooks';
import Footer from '../../components/homepage/Footer';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <AllBooks></AllBooks>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;