//Using this to save my form information
import { useState } from "react";
//Used to take that information and send it to API
import axios from "axios";
import { useNavigate } from "react-router";

// import TextField from "@mui/material/TextField";
import { InputLabel, Select, MenuItem, FormControl, TextField, Button, FormHelperText } from "@mui/material";

const Create = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleForm = (e) => {
        //Value of the input field / Name is the input field name thats being changed
        //Storing in variables to simplify the process of calling them later
        let name = e.target.name;
        let value = e.target.value;

        setForm(prevState => ({
            // ... does --- / prevState gets the content of previous state and puts it in here
            ...prevState,
            [name]: value
        }));
    };

    const isRequired = (fields) => {
        let error = false;

        fields.forEach(field => {
            if(!form[field]) {
                error = true;

                setErrors(prevState => ({
                    // ... does --- / prevState gets the content of previous state and puts it in here
                    ...prevState,
                    [field]: {
                        message: `${field} is required!!!`
                    }
                }));
            }
        });

        return error;
    };

    const submitForm = () => {

        if(!isRequired(['title', 'description', 'city', 'start_date', 'end_date'])) {
            let token = localStorage.getItem('token');

            //first {} is data second {} is config, this is what is being past through first after we send the post
            axios.post('https://festivals-api.vercel.app/api/festivals/', form, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(response => {
                    console.log(response.data);
                    navigate('/festivals');
                })
                .catch(err => {
                    //4 Different error messages, more detailed as you go down
                    console.error(err);
                    console.log(err.response.data);
                    console.log(err.response.data.message);
                    setErrors(err.response.data.errors);
                });
        }
    }

    return (
    <>

    <h2>Create Festival</h2>
    
    <div className='form-group' class="pad">
        <TextField name="title" label="Title" variant="filled" fullWidth onChange={handleForm} error={errors.title} helperText={(errors.title) ? errors.title.message : ""} />
    </div>

    <div className='form-group' class="pad">
        <TextField name="description" label="Description" variant="filled" fullWidth multiline rows={4} onChange={handleForm} error={errors.description} helperText={(errors.description) ? errors.description.message : ""} />
    </div>

    <div className='form-group' class="pad">
        <FormControl variant='filled' fullWidth error={errors.city}>
            <InputLabel city='city-select'>City</InputLabel>
            <Select labelId='city-select' name="city" label="City" onChange={handleForm} >
                <MenuItem value={'Dublin'}>Dublin</MenuItem>
                <MenuItem value={'Cork'}>Cork</MenuItem>
                <MenuItem value={'Galway'}>Galway</MenuItem>
                <MenuItem value={'Wexford'}>Wexford</MenuItem>
                <MenuItem value={'Waterford'}>Waterford</MenuItem>
                <MenuItem value={'Belfast'}>Belfast</MenuItem>
            </Select>
            <FormHelperText>{errors.city?.message}</FormHelperText>
        </FormControl>
    </div>

    <div className='form-group' class="pad">
        <TextField variant='filled' label='Start Date' type='datetime-local' name='start_date' fullWidth InputLabelProps={{shrink: true}} onChange={handleForm} error={errors.start_date} helperText={errors.start_date?.message} />
    </div>

    <div className='form-group' class="pad">
        <TextField variant='filled' label='End Date' type='datetime-local' name='end_date' fullWidth InputLabelProps={{shrink: true}} onChange={handleForm} error={errors.end_date} helperText={errors.end_date?.message} />
    </div>

    <Button onClick={submitForm} variant='contained'>Submit</Button>

    </>
    );
};

export default Create;