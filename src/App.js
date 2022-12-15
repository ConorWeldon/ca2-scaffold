import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from '@mui/material';

//import pages
import Home from './pages/Home';
import About from './pages/About';
import FestivalsIndex from './pages/festivals/Index';
import FestivalsShow from './pages/festivals/Show';
import FestivalsCreate from './pages/festivals/Create';
import FestivalsEdit from './pages/festivals/Edit';
import PageNotFound from './pages/PageNotFound';

//My CSS styling
import './assets/css/app.css';

//import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {

    // we need to step up the authenticated part up to the common state of nav and login form. 
    // This is the highest common state since it is app
    const [authenticated, setAuthenticated] = useState(false);
    let protectedFestivals;

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setAuthenticated(true);
        }
    }, []);

    //Used to change the state from true or false / Also stores my token
    const onAuthenticated = (auth, token) => {
        setAuthenticated(auth);

        // if statement to check to set a token to local storage when logging in
        if (auth) {
            localStorage.setItem('token', token);
        }
        else {
            localStorage.removeItem('token');
            
        }
    };

    if (authenticated) {
        protectedFestivals = (
            <>
                <Route path="/festivals/:id" element={<FestivalsShow />} />
                <Route path="/festivals/create" element={<FestivalsCreate />} />
                <Route path="/festivals/:id/edit" element={<FestivalsEdit />} />
            </>
        );
    }

    return (
        <Router>
            <Container maxWidth="md">
                {/* 2 stands for the gutter in between columns */}
                {/* <Grid container spacing={2}>

                </Grid> */}

                {/* This is a prop inside navbar */}
                {/* giving "authenticated" as a prop */}
                <Navbar onAuthenticated={onAuthenticated} authenticated={authenticated} />
                <Routes>
                    {/* Passing onAuthenticated to home */}
                    <Route path="/" element={<Home onAuthenticated={onAuthenticated} authenticated={authenticated} />} />
                    <Route path="/festivals" element={<FestivalsIndex authenticated={authenticated} />} />
                    <Route path="/About" element={<About authenticated={authenticated} />} />

                    {/* This is a protected route. Only allows access when authenticated and 
                    the user straight up wont be able to see this route */}
                    {protectedFestivals}
                    <Route path="*" element={<PageNotFound />} />

                </Routes>
                <Footer/>
            </Container>
        </Router>
    );
};

export default App;