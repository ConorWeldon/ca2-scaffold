//Hook used to get the ID number
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import FestivalCard from '../../components/FestivalCard';

const Show = () => {
    //ID number is gotten here
    const { id } = useParams();
    //Store festival in a state variable / Null on load
    const [ festival, setFestival ] = useState(null);

    let token = localStorage.getItem('token');

    //Use effect hook that runs when the page loads, as soon as the component is mounted
    useEffect(() => {
        axios.get(`https://festivals-api.vercel.app/api/festivals/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}` 
            }
        })
             .then((response) => {
                 //Log data if successful
                 console.log(response.data);
                 setFestival(response.data);
             })
             .catch((err) => {
                 //If not succesful log the error
                 console.error(err);
                 console.log(err.response.data.message);
                 
             });
    }, [token, id]);
    if(!festival) return "Loading....";

    return (
        <FestivalCard festival={festival} />
    );

    // return ("Hi from festivals Show");
};

export default Show;