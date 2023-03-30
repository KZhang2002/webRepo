import { useEffect, useRef, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FilterComponent from './FilterComponent';
import styles from '../../static/StyleSheet';
import { Box, Button, Checkbox } from '@mui/material';
import { FilterList } from '@mui/icons-material';

export default function FilterMenu(props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const [filterValues, setFilterValues] = useState([...props.filters])
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSubmit = () => {
        let populated_vals = filterValues.map((value, index) => {
            if (value.value != "") {
                return {enabled: value.enabled, value: value.value}
            } else {
                return { enabled: false, value: ""}
            }
        })
        props.applyFilters(populated_vals);
        handleClose();
    }

    const updateFilterValues = (vals, index) => {
        let tmp = filterValues
        tmp[index] = { ...tmp[index], ...vals }
        setFilterValues([...tmp])
    }

    const renderComponent = (index, value) => {
        if (filterValues[index].enabled) {
            return <FilterComponent onChange={(e) => {
                updateFilterValues({ value: e.target.value }, index)
            }} style={{ ...styles.filterInput }} id={value} value={filterValues[index].value}></FilterComponent>
        } else {
            return <></>
        }
    }

    const toggleSelected = (index) => {
        updateFilterValues({ enabled: !filterValues[index].enabled }, index)
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
                anchorOrigin={{
                    horizontal: "left",
                    vertical: "bottom"
                }}
                style={{ left: -50 }}
                onClose={() => {
                    handleClose();
                    setFilterValues([...props.filters]);
                }}

                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Box style={styles.filterMenu}>
                    <Box style={styles.filterTitleText}>Filter Results</Box>
                    {props.filterItems.map((value, index) => {
                        return (
                            <Box style={styles.filterItem}>
                                <MenuItem style={{width: "100%", margin: 0, padding: 0 }} onClick={() => { toggleSelected(index) }}>
                                    <Checkbox style={{marginLeft: "0rem"}} checked={filterValues[index].enabled} />
                                    {value}
                                    {renderComponent(index, value)}
                                </MenuItem>
                            </Box>
                        )
                    })}
                    <Button onClick={handleSubmit} style={styles.filterApplyButton} variant='contained'>Apply</Button>
                </Box>
            </Menu>
        </>
    );
}