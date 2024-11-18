import { useLoaderData } from "react-router-dom";
import AdventureCard from "../components/AdventureCard";
import Title from "../components/Title";


const Adventures = () => {

    const adventures = useLoaderData();


    return (
        <div className="w-11/12 mx-auto mb-10 md:mb-20 mt-16">
            <Title></Title>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                  adventures.map(adventure=> <AdventureCard key={adventure.id} adventure={adventure}></AdventureCard>)
                }
                
             </div> 
        </div>
    );
};

export default Adventures;