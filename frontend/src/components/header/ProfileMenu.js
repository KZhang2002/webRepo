import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { Person2, SettingsOutlined } from '@mui/icons-material';

export default function ProfileMenu(props) {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleClose()
        navigate('../login')
        props.setIsLoggedIn(false)
    }

    const handleClickProfile = () => {
        handleClose()
        navigate('../profile')
    }

    return (
        <>
            <IconButton
                variant='outlined'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                size="larxge"
                edge="start"
                color="inherit"
                aria-label="menu"
                style={{height: "2rem", marginTop: "1.2rem", marginRight: "0.5rem"}}
            >
                <Person2 />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClickProfile}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    );
}