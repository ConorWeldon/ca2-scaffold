import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const FestivalCard = (props) => {
    const navigate = useNavigate();

    let title = <p><b>Title:</b> {props.festival.title} </p>

    if (props.authenticated) {
        title = <p><b>Title:</b> <Link to={`/festivals/${props.festival._id}`}>{props.festival.title}</Link> </p>
    }

    const deleteResource = () => {
        let token = localStorage.getItem('token');
        
        axios.delete(`https://festivals-api.vercel.app/api/festivals/${props.festival._id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
             .then((response) => {
                 //Log data if successful
                 console.log(response.data);
                 navigate('/');
             })
             .catch((err) => {
                 //If not succesful log the error
                 console.error(err);
                 console.log(err.response.data.message);
                 
             });
    }

    return (
        <div class="spacing" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {/* Create a link for the Id number to that link, which will have its own object and link */}
            {/* <p><b>Title:</b> <Link to={`/festivals/${props.festival._id}`}>{props.festival.title}</Link> </p>
            <p><b>Description:</b> {props.festival.description}</p>

            <Button component={Link} to={`/festivals/${props.festival._id}/edit`} startIcon={<EditIcon />} variant='outlined' >Edit</Button>
            <Button startIcon={<EditIcon />} variant='outlined' color='error' onClick={deleteResource} >Delete</Button>
            <hr /> */}
        

            <Card sx={{ maxWidth: 1245 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://www.aihr.com/wp-content/uploads/employee-data-collection-cover.png"
                    alt="green iguana"
                />

                <CardContent>
                    {/* Create a link for the Id number to that link, which will have its own object and link */}
                    <Typography gutterBottom variant="h5" component="div">
                        <p><b>Title:</b> <Link to={`/festivals/${props.festival._id}`}>{props.festival.title}</Link> </p>
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        <p><b>Description:</b> {props.festival.description}</p>
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button component={Link} to={`/festivals/${props.festival._id}/edit`} startIcon={<EditIcon />} variant='outlined' >Edit</Button>
                    <Button startIcon={<EditIcon />} variant='outlined' color='error' onClick={deleteResource} >Delete</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default FestivalCard;