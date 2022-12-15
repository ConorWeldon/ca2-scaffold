import axios from 'axios';
import { useState, useEffect } from 'react';
import FestivalCard from '../../components/FestivalCard';

const Index = () => {
    //Creating an Array for festivals
    const [ festivals, setFestivals ] = useState(null);

    useEffect(() => {
        axios.get('https://festivals-api.vercel.app/api/festivals')
             .then((response) => {
                 console.log(response.data);
                 setFestivals(response.data);
             })
             .catch((err) => {
                 console.error(err);
             });
    }, []);


    //Here we state that if we dont have a festival return loading...
    // display loading when theres no festivals
    if(!festivals) return 'Loading...';

    // creates a list of festival cards for every festival in the festivals array
    // and gives a festival card
    const festivalsList = festivals.map((festival) => {
        return <FestivalCard festival={festival} />;
    });

    return (
        <>
            <div class="scrollable-content">
                <h2>Festivals</h2>
                { festivalsList }
            </div>
        </>
    );
};

export default Index;