import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import Create from '../pages/festivals/Create';

//Loads only the Grid code here but in the example below loads all the code from package but only imports grid
//import { Grid } from '@mui/system/Unstable_Grid';
import Grid from '@mui/system/Unstable_Grid/Grid';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = (props) => {

    const navigate = useNavigate();

    const logout = () => {
        props.onAuthenticated(false);
        navigate('/');
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid class="index" item xs={12}>
            {/* Old ways we used to go to pages 
            <Link to='/'>Home</Link> | 
            <Link to='/festivals'>Festivals</Link> */}

            <Button color="success" component={Link} to='/'>
                Home
            </Button>

            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                color="success"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Scaffolding
            </Button>

            <Button color="success" component={Link} to='/About'>
                About
            </Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose} component={Link} to='festivals'>All</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to='festivals/Create'>Create</MenuItem>
                {/* <MenuItem onClick={handleClose} component={Link} to='festivals/Edit'>Edit</MenuItem> */}
            </Menu>

            {/* Turnary operator here, used to make my if statement */}
            {(props.authenticated) ? (
                <Button variant='outlined' color="success" style={{margin: '0px 0px 0px 500px'}} onClick={logout}>Logout</Button>
            ) : (
                ""
            )}
        </Grid>
    );
};

export default Navbar;