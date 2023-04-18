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
        <Box sx={{ flexGrow: 1, position: "fixed", width: "100%", zIndex: 999 }}>
            <AppBar position="static" style={{display: 'flex', flexDirection: 'row', alignItems: "top", width: "100%", height: "6rem"}}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: "top", width: "100%", height: "4rem", paddingLeft: "2rem", paddingRight: "1rem"}}>
                        {location.pathname === '/browse' ? <></> :
                            <IconButton
                                onClick={() => navigate('../browse')}
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                style={{height: "2rem", marginTop: "1.05rem"}}
                            >
                                <Home />
                            </IconButton>
                        }
                        <Box style={styles.breadcrumbBox} sx={{ flexGrow: 1, alignItems: "center" }}>
                            <div style={styles.breadcrumbsTitleText}>
                                {`${APP_NAME}`}
                            </div>
                            <div style={styles.breadcrumbsSepText}>/</div>
                            <div style={styles.breadcrumbsPathText} >
                                {`${location.pathname.slice(1)}`}
                            </div>
                        </Box>
                        <ProfileMenu setIsLoggedIn={props.setIsLoggedIn} />
                    </div>
            </AppBar>
        </Box>
    );
}

export default Header;