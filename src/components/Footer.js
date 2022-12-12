import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//Icons
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';
import ContactlessRoundedIcon from '@mui/icons-material/ContactlessRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';


import { Button } from '@mui/material';

const Footer = (props) => {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>

        <div class="footer">
            <div class="heads">
                <h3 class="">Features</h3>
                <h3 class="head_text">Enterprise</h3>
                <h3 class="head_text">Support</h3>
                <h3 class="head_text">ICO</h3>
            </div>

            <div class="icons">
                <Button startIcon={<FacebookRoundedIcon />}/>
                <Button startIcon={<AddLocationRoundedIcon />}/>
                <Button startIcon={<ContactlessRoundedIcon />}/>
                <Button startIcon={<MailRoundedIcon />}/>
            </div>

            <h4 class="copyright">All rights reserved, © Copyright - Premium Scaffolding Contractors Dublin</h4>
        </div>

        </>
    );
};

export default Footer;