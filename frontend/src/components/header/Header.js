import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { APP_NAME } from '../../static/Content';
import ProfileMenu from './ProfileMenu';
import { Home } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../../static/StyleSheet';

function Header(props) {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={() => navigate('../browse')}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Home />
                    </IconButton>
                    <Box style={styles.breadcrumbBox} sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="div" >
                            {`${APP_NAME} / ${location.pathname.slice(1)}`}
                        </Typography>
                    </Box>
                    <ProfileMenu setIsLoggedIn={props.setIsLoggedIn} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;