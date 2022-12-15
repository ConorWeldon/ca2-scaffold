import React from 'react';

//My Image slider that I created
import ImageSlider from '../components/ImageSlider';
//LoginForm
import LoginForm from "../components/LoginForm";



const Home = (props) => {

    return (
        <>
          <div class="green-ov"></div>
            <h1 class="title">Premium Scaffolding</h1>

            {/* Ternary Operator */}
            {(!props.authenticated) ? (
                // Passing onAuthenticated to Login Form 
                < LoginForm onAuthenticated={props.onAuthenticated} />
            ) : (
                <p class="index"></p>
                
            )}
            
            <ImageSlider />
        </>
    );
};

export default Home;