import React from 'react';
import Title from '../components/Title';
import { Link, useLoaderData } from 'react-router-dom';
import AdventureCard from '../components/AdventureCard';
import Explore from '../components/Explore';
import Banner from '../components/Banner';
import PricePackage from '../components/PricePackage';

const Home = () => {

    const adventures = useLoaderData();
    


    return (
        <div>
            
            <Banner></Banner>
            <Title></Title>

             <div className=' w-11/12 mx-auto mb-10 lg:mb-24'>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                  adventures.slice(0, 6).map(adventure=> <AdventureCard key={adventure.id} adventure={adventure}></AdventureCard>)
                }
                
             </div>
             <Link to="/adventures"><button className='btn bg-lime-800 px-8 text-xl text-white font-semibold mx-auto block mt-10'>show All</button></Link>
             </div>
           
           <Explore></Explore>
           <PricePackage></PricePackage>
        </div>
    );
};

export default Home;