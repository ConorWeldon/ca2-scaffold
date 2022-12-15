//Using this to save my form information
import { useState, useEffect } from "react";
//Used to take that information and send it to API
import axios from "axios";

import { useNavigate, useParams } from "react-router";

// import TextField from "@mui/material/TextField";
import { InputLabel, Select, MenuItem, FormControl, TextField, Button, FormHelperText } from "@mui/material";

const Edit = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    //ID number is gotten here
    const { id } = useParams();
    //Store festival in a state variable / Null on load
    const [ festival, setFestival ] = useState(null);

    let token = localStorage.getItem('token');

    //Use effect hook that runs when the page loads, as soon as the component is mounted
    useEffect(() => {
        // console.log(token);
        // console.log(id);
        axios.get(`https://festivals-api.vercel.app/api/festivals/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
             .then((response) => {
                 //Log data if successful
                 console.log(response.date);
                 setFestival(response.data);
                 setForm(response.data);
             })
             .catch((err) => {
                 //If not succesful log the error
                 console.error(err);
                 console.log(err.response.data.message);
                 
             });
    }, [token, id]);

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
            axios.put(`https://festivals-api.vercel.app/api/festivals/${id}`, form, {
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

    if(!festival) return "Loading....";

    return (
    <>

    <h2>Edit Festival</h2>
    
    <div className='form-group' class="pad">
        <TextField 
            name="title" 
            label="Title" 
            variant="filled" 
            onChange={handleForm} 
            fullWidth

            error={errors.title} helperText={errors.title?.message}
            value={form.title} 
        />
    </div>

    <div className='form-group' class="pad">
        <TextField 
            name="description" 
            label="Description" 
            variant="filled" multiline rows={4} 
            onChange={handleForm}
            fullWidth 

            error={errors.description} helperText={(errors.description) ? errors.description.message : ""}
             value={form.description} 
        />
    </div>

    <div className='form-group' class="pad">
        <FormControl variant='filled' fullWidth error={errors.city}>
            <InputLabel city='city-select'>City</InputLabel>
            <Select labelId='city-select' name="city" label="City" onChange={handleForm} value={form.city} >
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
        <TextField 
            variant='filled' 
            label='Start Date' 
            type='datetime-local' 
            name='start_date' 
            fullWidth
            InputLabelProps={{shrink: true}} onChange={handleForm} 
            
            error={errors.start_date} 
            helperText={errors.start_date?.message} value={form.start_date} 
        />
    </div>

    <div className='form-group' class="pad">
        <TextField 
            variant='filled' 
            label='End Date' 
            type='datetime-local' 
            name='end_date' 
            fullWidth
            InputLabelProps={{shrink: true}} onChange={handleForm} 
            
            error={errors.end_date} helperText={errors.end_date?.message} 
            value={form.end_date} 
        />
    </div>

    <Button onClick={submitForm} variant='contained'>Submit</Button>

    </>
    );
};

export default Edit;