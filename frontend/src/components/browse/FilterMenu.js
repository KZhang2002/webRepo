import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import styles from '../../static/StyleSheet';
import { Box, Checkbox } from '@mui/material';
import { FilterList } from '@mui/icons-material';

export default function FilterMenu(props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const filterItems = [
        'Name',
        'Description',
        'Date',
        'Price',
        'Auction Price',
        'Location',
        'Verified',
        'Reputation'
    ]

    const [filterValues, setFilterValues] = useState({})

    const updateFilterValues = (vals) => {
        setFilterValues(...filterValues, ...vals)
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
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
            >
                <FilterList />
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
                <Box style={styles.filterMenu}>
                    <Box style={styles.filterTitleText}>Filter Results</Box>
                    {filterItems.map((value, index) => {
                        return (
                            <Box style={styles.filterItem}>
                                <Checkbox></Checkbox>
                                <MenuItem>{value}</MenuItem>
                            </Box>

                        )
                    })}
                </Box>
            </Menu>
        </>
    );
}