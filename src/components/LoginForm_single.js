import { useState } from "react";
import axios from "axios";

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = () => {
        console.log("Clicked")
    };

    const handleEmail = (e) => {
        //Value of the input field / Name is the input field name thats being changed
        console.log("Email Changed", e.target.value);
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        console.log("Password Changed", e.target.value);
        setPassword(e.target.value);
    };

    return (
        <>

        Email: <input type="text" name="email" value={email} onChange={handleEmail} />
        <br></br>
        Password: <input type="password" name="password" value={password} onChange={handlePassword} />
        <button onClick={submitForm}>Submit</button>

        </>
    );
};

export default LoginForm;