import { useState } from "react";
import axios from "axios";

const LoginForm = (props) => {

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [authenticated, setAuthenticated] = useState(false);

    const handleForm = (e) => {
        //Value of the input field / Name is the input field name thats being changed
        //Storing in variables to simplify the process of calling them later
        let name = e.target.name;
        let value = e.target.value;

        //Used to test, shows it being updated live
        //console.log(`${name}: ${value}`);

        //This overides and changes the previous version of setForm
        // setForm({
        //     [name]: value
        // });

        // setForm((prevState) => {
        //     return {
        //         // ... does --- / prevState gets the content of previous state and puts it in here
        //         ...prevState,
        //         [name]: value
        //     }
        // });

        setForm(prevState => ({
            // ... does --- / prevState gets the content of previous state and puts it in here
            ...prevState,
            [name]: value
        }));
    };

    const submitForm = () => {
        axios.post('https://festivals-api.vercel.app/api/users/login', {
            email: form.email,
            password: form.password
        })
        .then((response) => {
            console.log(response.data);

            setErrorMessage("");
            //THIS IS WHERE ON AUTENTICATED IS USED. THE SOFT BRACKETS ALLOWS THE FUNCTION TO RUN
            props.onAuthenticated(true, response.data.token);

            // setAuthenticated(true);
        })
        .catch((err) => {
            console.log(err);
            console.log(err.response.data);
            setErrorMessage(err.response.data.message);
        })

        //Testing
        console.log("Clicked")
    };


    //Make  it smarter for example "you are logged in (As someone)"
    if(authenticated) return "You are logged in";

    return (

        <>

        {/* Value displays 2 way binding */}
        Email: <input type="text" name="email" value={form.email} onChange={handleForm} />
        <br></br>
        Password: <input type="password" name="password" value={form.password} onChange={handleForm} />
        <button onClick={submitForm}>Submit</button>
        {/* Returns my error message as well as styles it */}
        <p style={{ color: "red", backgroundColor: "black", width: "310px" }}>{errorMessage}</p>

        </>
    );
};

export default LoginForm;