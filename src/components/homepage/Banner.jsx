import React from 'react';
import heroImg from '../../assets/hero_img.jpg'

const Banner = () => {
    return (
        <div className="bg-base-200 container mx-auto py-15 px-5 lg:py-30 lg:px-15 rounded-lg mt-15">
            <div className="lg:flex justify-between items-center space-y-25 lg:space-y-0">
                <div className='space-y-10 lg:space-y-15'>
                    <h1 className="text-4xl lg:text-5xl font-bold">Books to freshen up
                        <br></br>
                        your bookshelf </h1>
                    <button className="btn btn-success text-white">Get Started</button>
                </div>
                <img
                    src={heroImg}
                    className="rounded-lg shadow-2xl lg:w-[450px] w-[350px]"
                />
            </div>
        </div>
    );
};

export default Banner;