import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => {
            clearTimeout(timer)
        }
    }, [])


    return (
        <>
            <h2>Page Not Found: {location.pathname}</h2>
            <p>Redirecting you to homepage</p>
        </>

    );
};

export default PageNotFound;
