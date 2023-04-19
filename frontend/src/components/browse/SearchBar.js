import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterMenu from "./FilterMenu";
import { Chip } from "@mui/material"
import styles from "../../static/StyleSheet";

export default function SearchBar() {

  const filterItems = [
    'Name',
    'Description',
    'Date',
    'Price',
    'Auction Price',
    'Location',
    'Verified',
    'Reputation',
    'Tags'
  ]

  const empty_filter = { enabled: false, value: "" }
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [filters, setFilters] = useState(filterItems.map((value, index) => {
    return empty_filter;
  }))

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const applyFilters = (filters) => {
    setFilters([...filters])
  }

  const renderAppliedFilters = () => {
      return filters.map((value, index) => {
        if (value.enabled) {
          return <Chip key={index} style={styles.filterChipStyle} label={`${filterItems[index]}: ${value.value}`}></Chip>
        }

      })
  }

  return (
    <TextField
      id="search"
      type="search"
      placeholder="Search Listings..."
      value={searchTerm}
      onFocus={() => { setIsSearching(true) }}
      onBlur={() => setIsSearching(false)}
      variant="outlined"
      onChange={handleChange}

      sx={{ width: "100%", background: "#cecece", border: "none", borderRadius: 1, zIndex: 0 }}
      InputProps={{
        style: { paddingLeft: "1.5rem" },
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),

        endAdornment: (
          <>
            <div id="filterChips">
              {renderAppliedFilters()}
            </div>
            <InputAdornment position="end">
              <FilterMenu filterItems={filterItems} filters={filters} applyFilters={applyFilters} />
            </InputAdornment>
          </>
        ),
      }}
    />
  );
}